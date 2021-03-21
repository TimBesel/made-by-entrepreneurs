<template>
  <input-page-layout>
    <template #ToolbarContent>
      <default-button title="Cancle"></default-button>
      <icon-button title="Next"></icon-button>
    </template>
    <template v-slot:PageContent>
      <content-slider :index="contentSliderIndex">
        <template v-slot:content1>
          <the-tabbar></the-tabbar>
        </template>
      </content-slider>
    </template>
  </input-page-layout>
</template>

<script>
import InputPageLayout from "../../../components/layout/PageLayout/InputPageLayout";
import DefaultButton from "../../../components/UI/Button/DefaultButton";
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
    DefaultButton,
    ContentSlider,
    TheTabbar,
  },
  methodes: {
    next() {
      this.contentSliderIndex++;
      console.log(this.contentSliderIndex);
    },
  },
};
</script>

<style scoped></style>
