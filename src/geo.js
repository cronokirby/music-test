export const HAS_GEO = "geolocation" in navigator;

const COUNTRIES = [
  { code: "AD", lat: 42.546245, long: 1.601554, name: "Andorra" },
  { code: "AR", lat: -38.416097, long: -63.616672, name: "Argentina" },
  { code: "AT", lat: 47.516231, long: 14.550072, name: "Austria" },
  { code: "AU", lat: -25.274398, long: 133.775136, name: "Australia" },
  { code: "BE", lat: 50.503887, long: 4.469936, name: "Belgium" },
  { code: "BG", lat: 42.733883, long: 25.48583, name: "Bulgaria" },
  { code: "BO", lat: -16.290154, long: -63.588653, name: "Bolivia" },
  { code: "BR", lat: -14.235004, long: -51.92528, name: "Brazil" },
  { code: "CA", lat: 56.130366, long: -106.346771, name: "Canada" },
  { code: "CH", lat: 46.818188, long: 8.227512, name: "Switzerland" },
  { code: "CL", lat: -35.675147, long: -71.542969, name: "Chile" },
  { code: "CO", lat: 4.570868, long: -74.297333, name: "Colombia" },
  { code: "CR", lat: 9.748917, long: -83.753428, name: "Costa Rica" },
  { code: "CY", lat: 35.126413, long: 33.429859, name: "Cyprus" },
  { code: "CZ", lat: 49.817492, long: 15.472962, name: "Czech Republic" },
  { code: "DE", lat: 51.165691, long: 10.451526, name: "Germany" },
  { code: "DK", lat: 56.26392, long: 9.501785, name: "Denmark" },
  { code: "DO", lat: 18.735693, long: -70.162651, name: "Dominican Republic" },
  { code: "EC", lat: -1.831239, long: -78.183406, name: "Ecuador" },
  { code: "EE", lat: 58.595272, long: 25.013607, name: "Estonia" },
  { code: "ES", lat: 40.463667, long: -3.74922, name: "Spain" },
  { code: "FI", lat: 61.92411, long: 25.748151, name: "Finland" },
  { code: "FR", lat: 46.227638, long: 2.213749, name: "France" },
  { code: "GR", lat: 39.074208, long: 21.824312, name: "Greece" },
  { code: "GT", lat: 15.783471, long: -90.230759, name: "Guatemala" },
  { code: "HK", lat: 22.396428, long: 114.109497, name: "Hong Kong" },
  { code: "HN", lat: 15.199999, long: -86.241905, name: "Honduras" },
  { code: "HU", lat: 47.162494, long: 19.503304, name: "Hungary" },
  { code: "ID", lat: -0.789275, long: 113.921327, name: "Indonesia" },
  { code: "IE", lat: 53.41291, long: -8.24389, name: "Ireland" },
  { code: "IL", lat: 31.046051, long: 34.851612, name: "Israel" },
  { code: "IN", lat: 20.593684, long: 78.96288, name: "India" },
  { code: "IS", lat: 64.963051, long: -19.020835, name: "Iceland" },
  { code: "IT", lat: 41.87194, long: 12.56738, name: "Italy" },
  { code: "JP", lat: 36.204824, long: 138.252924, name: "Japan" },
  { code: "LT", lat: 55.169438, long: 23.881275, name: "Lithuania" },
  { code: "LU", lat: 49.815273, long: 6.129583, name: "Luxembourg" },
  { code: "LV", lat: 56.879635, long: 24.603189, name: "Latvia" },
  { code: "MC", lat: 43.750298, long: 7.412841, name: "Monaco" },
  { code: "MT", lat: 35.937496, long: 14.375416, name: "Malta" },
  { code: "MX", lat: 23.634501, long: -102.552784, name: "Mexico" },
  { code: "MY", lat: 4.210484, long: 101.975766, name: "Malaysia" },
  { code: "MZ", lat: -18.665695, long: 35.529562, name: "Mozambique" },
  { code: "NI", lat: 12.865416, long: -85.207229, name: "Nicaragua" },
  { code: "NL", lat: 52.132633, long: 5.291266, name: "Netherlands" },
  { code: "NO", lat: 60.472024, long: 8.468946, name: "Norway" },
  { code: "NZ", lat: -40.900557, long: 174.885971, name: "New Zealand" },
  { code: "PA", lat: 8.537981, long: -80.782127, name: "Panama" },
  { code: "PE", lat: -9.189967, long: -75.015152, name: "Peru" },
  { code: "PH", lat: 12.879721, long: 121.774017, name: "Philippines" },
  { code: "PL", lat: 51.919438, long: 19.145136, name: "Poland" },
  { code: "PT", lat: 39.399872, long: -8.224454, name: "Portugal" },
  { code: "PY", lat: -23.442503, long: -58.443832, name: "Paraguay" },
  { code: "RO", lat: 45.943161, long: 24.96676, name: "Romania" },
  { code: "SE", lat: 60.128161, long: 18.643501, name: "Sweden" },
  { code: "SG", lat: 1.352083, long: 103.819836, name: "Singapore" },
  { code: "SK", lat: 48.669026, long: 19.699024, name: "Slovakia" },
  { code: "SV", lat: 13.794185, long: -88.89653, name: "El Salvador" },
  { code: "TH", lat: 15.870032, long: 100.992541, name: "Thailand" },
  { code: "TR", lat: 38.963745, long: 35.243322, name: "Turkey" },
  { code: "TW", lat: 23.69781, long: 120.960515, name: "Taiwan" },
  { code: "UY", lat: -32.522779, long: -55.765835, name: "Uruguay" },
  { code: "VN", lat: 14.058324, long: 108.277199, name: "Vietnam" },
  { code: "ZA", lat: -30.559482, long: 22.937506, name: "South Africa" }
];

function deg2rad(deg) {
  return (deg * Math.PI) / 180;
}

export class Position {
  constructor(lat, long) {
    this.latitude = lat;
    this.longitude = long;
  }

  static fromNavPosition(position) {
    return new Position(position.coords.latitude, position.coords.longitude);
  }

  static async current() {
    if (!("geolocation" in navigator)) return null;
    return new Promise(resolve =>
      navigator.geolocation.getCurrentPosition(resolve)
    ).then(Position.fromNavPosition);
  }

  distance(that) {
    const R = 6371;
    const dLat = deg2rad(that.latitude - this.latitude);
    const dLon = deg2rad(that.longitude - this.longitude);
    const sinHalfDLat = Math.sin(dLat / 2);
    const sinHalfDLon = Math.sin(dLon / 2);
    const a =
      sinHalfDLat * sinHalfDLat +
      Math.cos(deg2rad(this.latitude)) *
        Math.cos(deg2rad(that.latitude)) *
        sinHalfDLon *
        sinHalfDLon;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  closestCountry() {
      let best = null;
      let best_distance = 0;
      for (let i = 0; i < COUNTRIES.length; ++i) {
          const country = COUNTRIES[i];
          const distance = this.distance({latitude: country.lat, longitude: country.long});
          if (!best || distance < best_distance) {
              best = country;
              best_distance = distance;
          }
      }
      return best;
  }
}
