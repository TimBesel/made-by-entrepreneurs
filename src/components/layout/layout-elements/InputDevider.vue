<template>
  <div class="input__devider">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input__devider {
  display: flex;

  :v-deep div {
    width: calc(50% - 10px);
  }

  ::v-deep div:not(:last-child) {
    padding-right: 20px;
  }
}

@media screen and (max-width: 600px) {
  .input__devider ::v-deep div:not(:last-child) {
    width: auto;
    padding-right: 0;
  }
}
</style>
