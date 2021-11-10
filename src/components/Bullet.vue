<template>
  <container>
    <sprite :texture="bulletImg"></sprite>
  </container>
</template>

<script>
import bulletImg from "../assets/bullet.png";
import { onMounted, onUnmounted, reactive } from "vue";
import {game} from '../game'
import config from '../config'
export default {
  setup() {
    return {
      bulletImg,
    };
  },
};
export function useBullet() {
  const bullets = reactive([]);

  const addBullet = ({ x, y }) => {
    bullets.push({ x, y });
  };

  // 我方飞机发射子弹移动逻辑
  const move = () =>{
    const handleTicker = () =>{
      bullets.forEach((bullet,index) => {
        bullet.y -= config.bullet.speed;

        if(bullet.y < -200){
          bullets.splice(index,1)
        }
      });
    }
    onMounted(() => {
      game.ticker.add(handleTicker)
    })
    onUnmounted(() => {
      game.ticker.remove(handleTicker)
    })
  }

  move();

  return {
    bullets,
    addBullet,
  };
}
</script>

<style>
</style>