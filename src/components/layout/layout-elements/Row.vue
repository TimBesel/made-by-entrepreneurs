<template>
  <el-row :gutter="40" class="row">
    <slot></slot>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 30px;
}

@media screen and (max-width: 600px) {
  .row {
    margin-bottom: 30px;
  }
}
</style>
