<script lang="ts">
import Header from "./components/Header/index.vue";
import Container from "./Container/index.vue";
export default {
  name: "BigScreen",
  setup() {},
  components: { Header, Container },
};
</script>

<template>
  <div class="screen-container">
    <Header />
    <Container />
  </div>
</template>

<style scoped lang="scss"></style>
