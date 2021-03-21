<template>
  <div class="btn" :class="{ hovering: isHovering }">
    <i class="el-icon-right" :class="icon"></i>
    <button>
      <span>{{ title }}</span>
    </button>
  </div>
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
      default: "#3ca574",
    },
    fontColor: {
      type: String,
      default: "white",
    },
    title: {
      type: String,
      default: "Button",
    },
    icon: {
      type: String,
      default: "el-icon-right",
    },
    methods: {
      hoverButton() {
        console.log("click");
      },
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
  width: 130px;
  border-radius: 5px;
  /* border: 2px solid #2c7855; */
  display: flex;
  align-items: center;
  background-color: #2c7855;
  transition: 0.3s;
  transition-property: background-color;
}

.btn:hover {
  cursor: pointer;
  background-color: #3ca574;
  transition: 0.3s;
  transition-property: background-color;
}

.btn i {
  text-align: center;
  font-size: 1.2rem;
  width: 30%;
}

.btn button {
  height: 100%;
  width: 70%;

  outline: none;
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: #3ca574;
  transition: 0.3s;
  transition-property: background-color;
}

.btn:hover button {
  cursor: pointer;
  background-color: #2c7855;
  transition: 0.3s;
  transition-property: background-color;
}

@media screen and (max-width: 600px) {
  .btn {
    margin-right: 20px;
  }
}
</style>
