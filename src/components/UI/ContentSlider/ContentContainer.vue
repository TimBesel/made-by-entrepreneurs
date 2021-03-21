<template>
  <div class="content-slider_content" v-if="cIndex === index">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 1,
    },
    cIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content-slider_content {
  height: 200px;
  padding-top: 20px;
}
</style>
