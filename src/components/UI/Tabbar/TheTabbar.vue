<template>
  <div class="tabbar">
    <div class="tabbar__tabs">
      <button type="button" @click="firstActive = true" :class="{ active: firstActive }">
        <span>Company</span>
      </button>
      <button type="button" @click="firstActive = false" :class="{ active: !firstActive }">
        <span>Privat</span>
      </button>
      <span class="tab__indicator" :class="{ one: firstActive, two: !firstActive }"></span>
    </div>
    <div class="tabbar__content">
      <div class="tabbar__tab" :class="{ active: firstActive }">
        <slot name="tab1"></slot>
      </div>
      <div class="tabbar__tab" :class="{ active: !firstActive }">
        <slot name="tab2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstActive: true,
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.9rem;
  color: white;
  margin: 0;
  padding: 0;
}

.tabbar {
  width: 100%;
}

.tabbar__tabs {
  position: relative;
  height: 48px;
  width: 100%;
  display: flex;
}

.tabbar__tabs button {
  cursor: pointer;
  width: 50%;
  outline: none;
  border: 1px solid #1e1e2f;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27293d;
  transition: 0.1s;
  transition-property: background-color;
}

.tabbar__tabs button:first-child {
  border-radius: 5px 0 0 0px;
}

.tabbar__tabs button {
  border-radius: 0 5px 0 0;
}

.tab__indicator {
  position: absolute;
  bottom: 0px;
  height: 3px;
  width: calc(50% + 1px);
  background-color: #2c7855;
}

.tabbar__tabs button:is(.active) {
  background-color: #1e1e2f;
  color: #3ca574;
  transition: 0.3s;
  transition-property: color;
}

.tabbar__tab {
  height: auto;
  padding-top: 50px;
  display: none;
}

.tabbar__content {
  height: auto;
}

.one {
  left: 0px;
  transition: 0.3s;
  transition-duration: left;
}

.two {
  left: calc(50% - 1px);
  transition: 0.3s;
  transition-duration: left;
}

.active {
  display: flex;
}

@media screen and (max-width: 600px) {
  .tabbar {
    padding-bottom: 100px;
  }
}
</style>
