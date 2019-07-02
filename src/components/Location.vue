<template>
  <div class="hello">
    <p>Latitude: {{ position ? position.latitude : 'unknown' }}</p>
    <p>Longitude: {{ position ? position.longitude : 'unknown' }}</p>
    <div>
      <h4>Latitude input:</h4>
      <input v-model.number="lat">
    </div>
    <div>
      <h4>Longitude input:</h4>
      <input v-model.number="long">
    </div>
    <p>Distance: {{distance}}</p>
  </div>
</template>

<script>
import { Position } from "../geo.js";

export default {
  data() {
    return { position: undefined, lat: 0, long: 0 };
  },
  computed: {
    distance() {
      const target = new Position(this.lat, this.long);
      return this.position ? this.position.distance(target) : 0;
    }
  },
  async created() {
    this.position = await Position.current();
  }
};
</script>

<style>
</style>
