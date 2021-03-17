<template>
  <input-page-layout>
    <template #ToolbarContent>
      <default-button title="Cancle"></default-button>
      <icon-button title="Next"></icon-button>
    </template>
    <template v-slot:PageContent> </template>
  </input-page-layout>
</template>

<script>
import InputPageLayout from "../../../components/layout/PageLayout/InputPageLayout";
import DefaultButton from "../../../components/UI/Button/DefaultButton";
import IconButton from "../../../components/UI/Button/IconButton";

export default {
  components: {
    InputPageLayout,
    IconButton,
    DefaultButton,
  },
};
</script>

<style scoped></style>
