<template>
  <div class="toolbar">
    <h1>
      {{ title }}
    </h1>

    <div class="toolbar__tools">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Toolbar Title",
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Source Sans Pro", sans-serif;
}

.toolbar {
  height: 80px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2e3047;
  border-bottom: 1px solid #1e1e2f;

  h1 {
    color: white;
    font-size: 1.3rem;
    padding-left: 30px;
  }

  .toolbar__tools {
    display: flex;
    ::v-deep > * {
      margin-right: 20px;
    }
  }
}

@media screen and (max-width: 600px) {
  .toolbar {
    height: 40px;
    justify-content: center;
    border-bottom: 1px solid #27293d;
    h1 {
      font-size: 1.2rem;
      color: #1e1e2f;
    }
  }

  .toolbar__tools {
    height: 70px;
    width: 100vw;
    background-color: #2e3047;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 9;
    border-top: 1px solid #1e1e2f;
  }
}
</style>
