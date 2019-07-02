const axios = require('axios');
const parse = require('csv-parse');
const express = require('express');

async function parseSongs(data) {
    const acc = [];
    let seen = 0;
    return new Promise(resolve => {
        parse(data)
        .on('readable', function () {
            let record;
            while (record = this.read()) {
                // The first 2 seen rows aren't useful to us
                if (seen < 2) {
                    ++seen;
                    continue;
                }
                acc.push({track: record[1], artist: record[2], url: record[4]})
            }
        }).on('end', () => resolve(acc));
    });
}

async function getSongs(countryCode) {
    const code = countryCode.toLowerCase();
    const url = `https://spotifycharts.com/regional/${code}/daily/latest/download`;
    const resp = await axios.get(url);
    return parseSongs(resp.data);
}


const app = express();

app.use(express.static('public'));
app.get('/charts/:country', async (req, res, next) => {
    try {
        const songs = await getSongs(req.params.country);
        res.json(songs);
    } catch (e) {
        next(e);
    }
});

app.listen(3000);