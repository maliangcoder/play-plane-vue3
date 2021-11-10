<template>
  <container>
    <sprite :texture="EnemyImg"></sprite>
  </container>
</template>

<script>
import { reactive } from "@vue/reactivity";
import EnemyImg from "../assets/enemy.png";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { game } from "../game";
import config from "../config";
export default {
  setup() {
    return {
      EnemyImg,
    };
  },
};
export function useEnemy() {
  // 每架飞机不同得速度
  const getSpeed = () => {
    return typeof config.enemy.speed === "function"
      ? config.enemy.speed()
      : config.enemy.speed;
  };

  const enemys = reactive([
    {
      x: 100,
      y: 100,
      speed: getSpeed(),
    },
    {
      x: 150,
      y: 150,
      speed: getSpeed(),
    },
  ]);

  const destory = (index) => {
    enemys.splice(index, 1);
  };
  // 敌方飞机移动逻辑
  const move = () => {
    const handleTicker = () => {
      enemys.forEach((enemy, index) => {
        enemy.y += enemy.speed;
        if (enemy.y > 1080) {
          destory(index);
        }
      });
    };

    onMounted(() => {
      game.ticker.add(handleTicker);
    });
    onUnmounted(() => {
      game.ticker.remove(handleTicker);
    });
  };

  move();

  return {
    enemys,
  };
}
</script>

<style>
</style>