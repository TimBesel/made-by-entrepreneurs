<template>
  <div class="page-input">
    <toolbar title="Create a new customer">
      <slot name="ToolbarContent"></slot>
    </toolbar>

    <el-form label-width="200px" class="input-form">
      <slot name="PageContent"></slot>
    </el-form>
  </div>
</template>

<script>
import Toolbar from "../Toolbar";

export default {
  components: {
    Toolbar,
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Source Sans Pro", sans-serif;
}

.page-input {
  height: calc(100% - 101px);

  .input-form {
    border-left: 1px solid #1e1e2f;
    border-right: 1px solid #1e1e2f;
    margin: 0 auto;
    height: 100%;
    width: 840px;
    background-color: #2e3047;
    display: flex;
    padding-top: 20px;
  }
}

@media screen and (max-width: 970px) {
  .page-input {
    height: calc(100% - 61px);

    .input-form {
      /* because border 1px each */
      width: calc(100% - 2px);
    }
  }
}
</style>
