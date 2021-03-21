<template>
  <input-page-layout>
    <template #ToolbarContent>
      <icon-button
        title="Back"
        primaryColor="#1e1e2f"
        secondaryColor="#222236"
        icon="el-icon-back"
        @click="toggleBack"
      ></icon-button>
      <icon-button title="Next" @click="toggleNext"></icon-button>
    </template>
    <template v-slot:PageContent>
      <content-slider :index="contentSliderIndex">
        <template v-slot:content1>
          <the-tabbar>
            <template #tab1>
              <el-input placeholder="Please input" v-model="input"></el-input>
            </template>
          </the-tabbar>
        </template>
      </content-slider>
    </template>
  </input-page-layout>
</template>

<script>
import InputPageLayout from "../../../components/layout/PageLayout/InputPageLayout";
import IconButton from "../../../components/UI/Button/IconButton";
import ContentSlider from "../../../components/UI/ContentSlider/ContentSlider";
import TheTabbar from "../../../components/UI/Tabbar/TheTabbar.vue";

export default {
  data() {
    return {
      contentSliderIndex: 1,
    };
  },
  components: {
    InputPageLayout,
    IconButton,
    ContentSlider,
    TheTabbar,
  },
  methods: {
    // TODO make content slider dynamic
    toggleNext() {
      this.contentSliderIndex < 3 ? this.contentSliderIndex++ : (this.contentSliderIndex = 3);
    },
    toggleBack() {
      this.contentSliderIndex > 1 ? this.contentSliderIndex-- : (this.contentSliderIndex = 1);
    },
  },
};
</script>

<style scoped></style>
