<template>
  <div class="vertical-stepper">
    <ul class="stepper__steps" ref="steps">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
@import "./_var.scss";

.vertical-stepper {
  width: 100%;
  margin: 0 0px;

  .stepper__steps {
    list-style: none;

    ::v-deep .vertical-step:last-child .step-contentbox {
      border-left: none;
    }
  }
}

.row {
  padding: 20px 0;
}
</style>
