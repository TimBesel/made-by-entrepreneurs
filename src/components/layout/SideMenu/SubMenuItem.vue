<template>
  <router-link :to="link" class="nav__dropdown-item" :class="{ 'exact-active': isRoutActive }">
    <i class="nav__sub-icon" :class="icon"></i>
    <span class="nav__name nav__sub-item-name"><slot>Sub-Menu-Item</slot></span>
  </router-link>
</template>

<script>
import "./var.css";

export default {
  props: {
    icon: {
      type: String,
      default: "el-icon-eleme",
    },
    link: {
      type: String,
      default: "#",
    },
  },
  computed: {
    isRoutActive() {
      return this.link == this.$route.path;
    },
  },
};
</script>

<style scoped>
.nav__dropdown-item {
  display: flex;
  align-items: center;
  color: var(--text-color);
  font-size: var(--font-size-small);
  height: var(--nav-sub-item-height);
}

.nav__dropdown-item:hover {
  color: var(--highlight-color);
}

.nav__sub-icon {
  width: var(--nav-icon-width);
  font-size: var(--sub-icon-size-medium);
}

.nav__sub-item-name {
  font-size: var(--font-size-small);
}

.nav__dropdown-content i {
  text-align: center;
}

.exact-active {
  color: var(--highlight-color);
}
</style>
