<template>
  <container>
    <sprite :texture="planeImg" :y="plane.y" :x="plane.x"></sprite>
  </container>
</template>

<script>
import { onMounted, onUnmounted, reactive } from "@vue/runtime-core";
import planeImg from "../assets/plane.png";
export default {
    
  setup() {
    const { plane } = useMove();
    return {
      planeImg,
      plane,
    };
  },
};
function useMove() {
  const plane = reactive({
    x: 100,
    y: 600,
  });
  const speed = 10;
  const handleTicker = (e) => {
    switch (e.code) {
      case "ArrowUp":
        plane.y -= speed;
        break;
      case "ArrowDown":
        plane.y += speed;
        break;
      case "ArrowLeft":
        plane.x -= speed;
        break;
      case "ArrowRight":
        plane.x += speed;
        break;
    }
  };
  onMounted(() => {
    window.addEventListener("keyup", handleTicker);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", handleTicker);
  });
  return {
    plane,
  };
}
</script>

<style>
</style>