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
import { hitObjectTest } from "../utils/index";
import { onMounted, onUnmounted } from '@vue/runtime-core';
import {game} from '../game'
export default {
  components: {
    Plane,
    Map,
    Bullet,
    Enemy,
  },
  setup() {
    const { bullets, addBullet,destoryBullet } = useBullet();
    const { planeInfo } = usePlane({
      onAttack({ x, y }) {
        addBullet({ x, y });
      },
    });
    const { enemys,destory:destoryEnemy } = useEnemy();

    // 碰撞检测，若子弹碰撞到地方飞机，两方都销毁
    const handleTicker = () =>{
      bullets.forEach((bullet,bIndex) =>{
        enemys.forEach((enemy,eIndex) =>{
          if(hitObjectTest(bullet,enemy)){
            console.log('hit')
              destoryBullet(bIndex)
              destoryEnemy(eIndex)
          }
        })
      })
    }

    onMounted(() =>{
      game.ticker.add(handleTicker)
    })
    onUnmounted(() =>{
      game.ticker.remove(handleTicker)
    })
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