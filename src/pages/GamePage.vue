<template>
  <container>
    <Map></Map>
    <Plane :x="planeInfo.x" :y="planeInfo.y"></Plane>
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    ></Bullet>
    <Enemy
      v-for="(enemy, index) in enemys"
      :key="index"
      :x="enemy.x"
      :y="enemy.y"
    ></Enemy>
  </container>
</template>

<script>
import Map from "../components/Map.vue";
import Plane, { usePlane } from "../components/Plane.vue";
import Bullet, { useBullet } from "../components/Bullet.vue";
import Enemy, { useEnemy } from "../components/Enemy.vue";
export default {
  components: {
    Plane,
    Map,
    Bullet,
    Enemy,
  },
  setup() {
    const { bullets, addBullet } = useBullet();
    const { planeInfo } = usePlane({
      onAttack({ x, y }) {
        addBullet({ x, y });
      },
    });
    const { enemys } = useEnemy();

    return {
      planeInfo,
      bullets,
      enemys,
    };
  },
};
</script>

<style>
</style>