<template>
  <container>
    <sprite :texture="StartImg"></sprite>
    <sprite :texture='startBtn' x='226' y='510' :interactive='true' @click="toGame"></sprite>
  </container>
</template>

<script>
import StartImg from "../assets/start_page.jpg";
import startBtn from '../assets/startBtn.png'
export default {
  setup(propas,{emit}) {
      const toGame = () =>{
          console.log('clcik')
          emit('change-page','GamePage')
      }
    return {
      StartImg,
      startBtn,
      toGame
    };
  },
};
</script>

<style>
</style>