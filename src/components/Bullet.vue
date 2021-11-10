<template>
  <container>
    <sprite
      v-for="(bullet, index) in bullets"
      :key="index"
      :texture="bulletImg"
      :x="bullet.x"
      :y="bullet.y"
    ></sprite>
  </container>
</template>

<script>
import { reactive } from "@vue/reactivity";
import bulletImg from "../assets/bullet.png";
import { onMounted, onUnmounted } from '@vue/runtime-core';
export default {
  setup() {
    const bullets = reactive([
      {
        x: 100,
        y: 100,
      },
      {
        x: 150,
        y: 150,
      },
    ]);
    const handleBullet = (e) =>{
        console.log(e.code)
        // if(e.code === 'Space'){
        //     bullets.push({
        //         x:210++,
        //         y:510++
        //     })
        // }
    }

    onMounted(() =>{
        window.addEventListener('keyup',handleBullet)
    })
    onUnmounted(() =>{
        window.removeEventListener('keyup',handleBullet)
    })
    

    return {
      bulletImg,
      bullets,
    };
  },
};
</script>

<style>
</style>