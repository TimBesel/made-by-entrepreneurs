<template>
  <el-col :span="12" class="column">
    <slot></slot>
  </el-col>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
</style>
