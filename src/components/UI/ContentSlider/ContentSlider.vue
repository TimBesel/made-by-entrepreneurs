<template>
  <div class="content-slider">
    <div class="content-slider_header">
      <h3>Address Header</h3>
    </div>
    <content-container>
      <slot name="content1"></slot>
    </content-container>
    <content-container :index="2">
      <slot name="content2"></slot>
    </content-container>
    <content-container :index="3">
      <slot name="content3"></slot>
    </content-container>
  </div>
</template>

<script>
import ContentContainer from "./ContentContainer";

export default {
  props: {
    index: {
      type: Number,
      default: 1,
    },
  },
  provide() {
    return {
      cIndex: this.getCurrentIndex,
    };
  },
  components: {
    ContentContainer,
  },
  computed: {
    getCurrentIndex() {
      console.log(this.index);
      return this.index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./var.scss";

* {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}

.content-slider {
  width: 100%;
  padding: 20px 30px;

  .content-slider_header {
    display: flex;
    justify-content: space-between;
    vertical-align: baseline;
    align-items: flex-end;
    // padding-bottom: 20px;

    h3 {
      font-size: $header-font-size;
      color: $font-color;
    }
  }
}

@media screen and (max-width: 970px) {
  .content-slider {
    padding: 10px 10px;
  }
}
</style>
