<template>
  <div class="hello">
    <p>Latitude: {{ position ? position.latitude : 'unknown' }}</p>
    <p>Longitude: {{ position ? position.longitude : 'unknown' }}</p>
    <p>Closest Country: {{closestCountry}}</p>
    <h4>Songs:</h4>
    <p>{{songs}}</p>
  </div>
</template>

<script>
import { Position, fetchSongs } from "../geo.js";

export default {
  data() {
    return { position: undefined, lat: 0, long: 0, songs: '' };
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
