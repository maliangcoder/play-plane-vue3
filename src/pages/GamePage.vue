<template>
  <container>
    <Map></Map>
    <Plane></Plane>
    <Bullet></Bullet>
  </container>
</template>

<script>
import Plane from "../components/Plane.vue";
import Bullet from '../components/Bullet.vue'
import Map from "../components/Map.vue";
export default {
  components: {
    Plane,
    Map,
    Bullet
  },
};
</script>

<style>
</style>