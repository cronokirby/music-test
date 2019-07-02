<template>
  <div class="hello">
    <p>Latitude: {{ position ? position.latitude : 'unknown' }}</p>
    <p>Longitude: {{ position ? position.longitude : 'unknown' }}</p>
  </div>
</template>

<script>
import { Position } from "../geo.js";

export default {
  data() {
    return { position: undefined };
  },
  async created() {
    this.position = await Position.current();
    console.log(this.position);
  }
};
</script>

<style>
</style>
