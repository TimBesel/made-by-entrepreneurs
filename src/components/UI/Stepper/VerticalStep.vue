<template>
  <li class="vertical-step" :class="{ active: activateStep, done }">
    <div class="step-header" @click="toggleStep">
      <div class="icon-container">
        <div class="step-icon">
          <i v-if="done" :class="doneIcon"></i>
          <span v-if="!done">{{ stepIndex }}</span>
        </div>
      </div>
      <div class="step-title">
        <h2>{{ title }}</h2>
      </div>
    </div>

    <div class="step-contentbox">
      <transition>
        <div v-show="activateStep" class="content">
          <slot></slot>
        </div>
      </transition>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    stepIndex: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "Step 1",
    },
    modelValue: {
      type: Number,
      default: 1,
    },
    done: {
      type: Boolean,
      default: false,
    },
    doneIcon: {
      type: String,
      default: "el-icon-check",
    },
  },
  computed: {
    activateStep() {
      return this.stepIndex === this.modelValue;
    },
  },
  methods: {
    toggleStep() {
      if (this.modelValue > this.stepIndex || this.done === true) {
        this.$emit("update:modelValue", this.stepIndex);
      } //else if (this.stepIndex === this.modelValue + 1 && this.done === true) {
      //   this.$emit("update:modelValue", this.stepIndex);
      // }
      //TODO add alert when step is not done and tried to go to the next step
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./_var.scss";

* {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}

.v-enter-active {
  transition: all 0.4s;
}

.v-enter-from {
  transform: translateY(-100%);
}

.v-enter-to {
  transform: translateY(0);
}

.vertical-step {
  .step-header {
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon-container {
      display: inline-block;

      .step-icon {
        width: $icon-size;
        height: $icon-size;
        border-radius: 50px;
        background: $container-color;
        display: flex;
        justify-content: center;
        align-items: center;

        color: $text-color;
        font-size: $icon-font-size;
      }
    }
    .step-title {
      color: $text-color;
      font-size: $title-font-size;
      margin-left: 10px;
      display: inline;

      h2 {
        display: inline;
      }
    }
  }

  .step-contentbox {
    height: $stepline-closed-height;
    padding-left: $icon-size / 2 + 10px;
    padding-right: 30px;

    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: $icon-size / 2 - 1px;
    border-left: 1px solid $container-color;
    display: flex;
    align-items: center;
    overflow: hidden;

    .content {
      height: 0;
      width: calc(100%);
      // display: none;
    }
  }
}

.active {
  .step-header .icon-container .step-icon {
    background: $active-color;
  }

  .step-contentbox {
    min-height: $stepline-closed-height;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;

    .content {
      height: auto;
      // display: none;
    }
  }
}

.done .step-header .icon-container .step-icon {
  background: $active-color;
}
</style>
