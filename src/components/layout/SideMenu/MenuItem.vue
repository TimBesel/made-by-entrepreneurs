<template>
  <router-link :to="link" class="nav__link" :class="{ active: isRoutActive }">
    <i class="nav__icon" :class="icon"></i>
    <span class="nav__name"><slot>Menu-Item</slot></span>
  </router-link>
</template>

<script>
import './var.css';

export default {
  data() {
    return {
      activeRout: false,
    };
  },
  props: {
    icon: {
      type: String,
      default: 'el-icon-eleme',
    },
    link: {
      type: String,
      default: '#',
    },
    index: {
      type: String,
      default: '1',
    },
  },
  computed: {
    isRoutActive() {
      return this.link === this.$route.path;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: var(--highlight-color);
}
</style>
