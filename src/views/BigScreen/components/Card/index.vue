<script setup lang="ts"></script>

<template>
  <div class="screen-card">
    <div class="screen-card-title">标题</div>
    <div class="screen-card-container">
      <div class="screen-card-content"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.screen-card {
  // margin: 12px;
  // padding: 12px;
  .screen-card-container {
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    border: 1px solid rgba(45, 152, 255, 0.3);
    background: rgba(16, 41, 102, 0.6);
    padding: 12px;
  }
  .screen-card-title {
    font-size: 14px;
    height: 30px;
    margin-left: 10px;
    position: relative;
  }
  .screen-card-content {
    background: rgba(16, 41, 102, 0.6);
    width: 100%;
    height: 100%;
  }
  .screen-card-title::before {
    position: absolute;
    content: "";
    width: 0px;
    height: 12px;
    border-left: 3px solid rgb(44, 156, 250);
    left: -10px;
    top: 3px;
  }
}
</style>
