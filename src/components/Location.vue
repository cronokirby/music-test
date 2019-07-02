<template>
  <div class="hello">
    <p>Latitude: {{ position ? position.latitude : 'unknown' }}</p>
    <p>Longitude: {{ position ? position.longitude : 'unknown' }}</p>
    <p>Closest Country: {{closestCountry}}</p>
  </div>
</template>

<script>
import { Position } from "../geo.js";

export default {
  data() {
    return { position: undefined, lat: 0, long: 0 };
  },
  computed: {
    closestCountry() {
      return this.position ? this.position.closestCountry().name : undefined;
    }
  },
  async created() {
    this.position = await Position.current();
  }
};
</script>
