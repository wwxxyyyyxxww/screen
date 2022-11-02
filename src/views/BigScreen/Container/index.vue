<script lang="ts">
import Card from "../components/Card/index.vue";
export default {
  name: "BigScreen",
  setup() {},
  components: { Card },
};
</script>

<template>
  <div class="screen-container">
    <div class="flex">
      <div class="flex100 mr12"><Card title="小标题" /></div>
      <div class="flex200"><Card title="小标题" /></div>
    </div>
    <div class="flex mt12">
      <div class="flex200 mr12"><Card title="小标题" /></div>
      <div class="flex100"><Card title="小标题" /></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen-container {
  padding: 16px;
  .mr12 {
    margin-right: 12px;
  }
  .mt12 {
    margin-top: 12px;
  }
  .flex {
    display: flex;
    .flex100 {
      flex: 100;
    }
    .flex200 {
      flex: 200;
    }
  }
}
</style>
