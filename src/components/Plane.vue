<template>
  <container>
    <sprite :texture="planeImg"></sprite>
  </container>
</template>

<script>
import { onMounted, onUnmounted, reactive } from "vue";
import planeImg from "../assets/plane.png";
export default {
  setup() {
    return {
      planeImg,
    };
  },
};

export function usePlane({ onAttack }) {
  let planeInfo = reactive({
    x: 100,
    y: 600,
  });
  const move = () => {
    const speed = 10;
    const handleMove = (e) => {
      switch (e.code) {
        case "ArrowUp":
          planeInfo.y -= speed;
          break;
        case "ArrowDown":
          planeInfo.y += speed;
          break;
        case "ArrowLeft":
          planeInfo.x -= speed;
          break;
        case "ArrowRight":
          planeInfo.x += speed;
          break;
      }
    };
    onMounted(() => {
      window.addEventListener("keyup", handleMove);
    });
    onUnmounted(() => {
      window.removeEventListener("keyup", handleMove);
    });
  };
  move();

  const attack = () => {
    const handleAttack = (e) => {
      console.log(e.code);
      if (e.code === "Space") {
        console.log("attack");
        onAttack &&
          onAttack({
            x: planeInfo.x + 100,
            y: planeInfo.y - 50,
          });
      }
    };
    onMounted(() => {
      window.addEventListener("keyup", handleAttack);
    });
    onUnmounted(() => {
      window.removeEventListener("keyup", handleAttack);
    });
  };
  attack();

  return {
    planeInfo,
  };
}
</script>

<style>
</style>