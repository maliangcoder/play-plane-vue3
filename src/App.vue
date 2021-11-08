<template>
  <container>
    <StartPage
      @change-page="changePage"
      v-if="currentPage === 'StartPage'"
    ></StartPage>
    <Map v-else-if="currentPage === 'GamePage'"></Map>
  </container>
</template>

<script>
import StartPage from "./pages/StartPage.vue";
import Map from "./pages/GamePage.vue";
import { ref } from "@vue/reactivity";
export default {
  name: "App",
  components: {
    StartPage,
    Map,
  },
  setup() {
    const currentPage = ref("GamePage");

    const changePage = (pageName) => {
      currentPage.value = pageName;
    };

    return {
      currentPage,
      changePage
    };
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
