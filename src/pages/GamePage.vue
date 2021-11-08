<template>
  <container>
    <Map></Map>
    <Plane></Plane>
  </container>
</template>

<script>
import Plane from "../components/Plane.vue";
import Map from "../components/Map.vue";
export default {
  components: {
    Plane,
    Map,
  },
};
</script>

<style>
</style>