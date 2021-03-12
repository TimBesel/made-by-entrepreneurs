<template>
  <div class="nav__dropdown" :class="{ active: isRoutActive }">
    <router-link :to="link" class="nav__link">
      <i class="nav__icon" :class="icon"></i>
      <span class="nav__name">{{ title }}</span>
      <i class="el-icon-arrow-down nav__dropdown-icon"></i>
    </router-link>

    <div class="nav__dropdown-collapse">
      <div class="nav__dropdown-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import './var.css';

export default {
  props: {
    icon: {
      type: String,
      default: 'el-icon-eleme',
    },
    title: {
      type: String,
      default: 'Sub-Menu',
    },
    link: {
      type: String,
      default: '#',
    },
  },
  computed: {
    isRoutActive() {
      return this.$route.path.includes(this.link);
    },
  },
};
</script>

<style scoped>
.nav__dropdown {
  overflow: hidden;
  max-height: var(--nav-item-height);
  transition: 0.5s ease-in-out;
}

.nav__dropdown-collapse {
  background-color: var(--hover-color);
}

.nav__dropdown-content {
  display: grid;
}

.nav__dropdown-icon {
  font-size: var(--icon-size-small);
  width: var(--nav-icon-width);
  margin-left: auto;
  transition: 0.4s;
}

.active .nav__dropdown-icon {
  transform: rotate(180deg);
}

.active {
  max-height: 100rem;
  background-color: var(--highlight-color);
}
</style>
