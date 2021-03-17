<template>
  <button class="btn">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isHovering: false,
    };
  },
  props: {
    primaryColor: {
      type: String,
      default: "#2c7855",
    },
    secondaryColor: {
      type: String,
      default: "#27293d",
    },
    fontColor: {
      type: String,
      default: "white",
    },
    title: {
      type: String,
      default: "Button",
    },
    methods: {
      hoverButton() {},
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
}
.btn {
  height: 40px;
  width: 100px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #1e1e2f;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1e1e2f;
  transition: 0.3s;
  transition-property: background-color;
}

.btn:hover {
  cursor: pointer;
  background-color: #27293d;
  transition: 0.3s;
  transition-property: background-color;
}

@media screen and (max-width: 600px) {
  .btn {
    margin-left: 20px;
  }
}
</style>
