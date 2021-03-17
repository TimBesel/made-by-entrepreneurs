<template>
  <toolbar title="Create a new customer">
    <default-button title="Cancle"></default-button>
    <icon-button title="Next"></icon-button>
  </toolbar>
  <el-form label-width="200px" class="customer-form">
    <vertical-stepper>
      <vertical-step :stepIndex="1" title="Contact Header" v-model="activeIndex">
        <step-one></step-one>
      </vertical-step>
      <vertical-step :stepIndex="2" title="Customer Informations" v-model="activeIndex"></vertical-step>
      <vertical-step :stepIndex="3" title="Custome Informationfields" v-model="activeIndex"></vertical-step>
    </vertical-stepper>
  </el-form>
</template>

<script>
import Toolbar from "../../../components/layout/Topbar";
import DefaultButton from "../../../components/UI/Button/DefaultButton";
import IconButton from "../../../components/UI/Button/IconButton";
import StepOne from "./StepOne.vue";
import VerticalStepper from "../../../components/UI/Stepper/VerticalStepper";
import VerticalStep from "../../../components/UI/Stepper/VerticalStep";

export default {
  components: {
    Toolbar,
    IconButton,
    DefaultButton,
    StepOne,
    VerticalStepper,
    VerticalStep,
  },
};
</script>

<style scoped>
* {
  font-family: "Source Sans Pro", sans-serif;
}

.el-step__icon {
  background: #2e3047;
}

.customer-form {
  border-left: 1px solid #1e1e2f;
  border-right: 1px solid #1e1e2f;
  margin: 0 auto;
  height: calc(100% - 81px);
  width: 840px;
  background-color: #2e3047;
  display: flex;
  padding-top: 20px;
}

.customerEditTopbar {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: #2e3047;
  border-bottom: 1px solid #1e1e2f;
}

@media screen and (max-width: 970px) {
  .customer-form {
    /* because border 1px each */
    width: calc(100% - 2px);
  }
}
</style>
