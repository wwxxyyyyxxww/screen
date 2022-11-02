<template>
  <div class="screen-table">
    <el-table :data="tableList">
      <el-table-column
        v-for="item in tableCulomns"
        :key="item.key"
        :prop="item.key"
        :label="item.label"
        show-overflow-tooltip
      ></el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
export default {
  name: "ScreenTable",
  props: {
    tableList: {
      type: Array,
      default: [],
    },
    tableCulomns: {
      type: Array,
      default: [],
    },
  },
  setup(props: any) {
    const { tableList, tableCulomns } = props;
    return {
      tableList,
      tableCulomns,
    };
  },
};
</script>
<style scoped lang="scss"></style>
