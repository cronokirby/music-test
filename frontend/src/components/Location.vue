<template>
  <div class="hello">
    <p>Latitude: {{ position ? position.latitude : 'unknown' }}</p>
    <p>Longitude: {{ position ? position.longitude : 'unknown' }}</p>
    <p>Closest Country: {{closestCountry}}</p>
    <h4>Popular songs on Spotify:</h4>
    <ul>
      <li v-for="(song, index) in songs" :key=index>
        Track: {{ song.track }}, Artist: {{ song.artist }}, Url: {{ song.url }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Position, fetchSongs } from "../geo.js";

export default {
  data() {
    return { position: undefined, lat: 0, long: 0, songs: [] };
  },
  computed: {
    closestCountry() {
      return this.position ? this.position.closestCountry().name : undefined;
    }
  },
  async created() {
    this.position = await Position.current();
    const closest = this.position.closestCountry();
    this.songs = await fetchSongs(closest);
  }
};
</script>
