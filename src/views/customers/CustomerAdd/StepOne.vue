<template>
  <div class="box-card">
    <the-tabbar>
      <template #tab1>
        <el-form class="form">
          <el-row :gutter="40" class="row">
            <el-col :span="12" class="column">
              <default-input label="Client Company Name *"></default-input>
            </el-col>
            <el-col :span="12" class="column">
              <default-input label="Name Suffix"></default-input>
            </el-col>
          </el-row>

          <el-row :gutter="40" class="row">
            <el-col :span="12" class="column">
              <default-input label="Street & House Number *"></default-input>
            </el-col>
            <el-col :span="12" class="column">
              <div class="input__devider">
                <default-input label="Zip *"></default-input>
                <default-input label="Place"></default-input>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="40" class="row">
            <el-col :span="12" class="column">
              <default-input label="Country *"></default-input>
            </el-col>
          </el-row>
        </el-form>
      </template>

      <template #tab2>
        <el-form class="form">
          <el-row :gutter="40" class="row">
            <el-col :span="12" class="column">
              <default-input label="Sex *"></default-input>
            </el-col>
            <el-col :span="12" class="column">
              <default-input label="Title"></default-input>
            </el-col>
          </el-row>

          <el-row :gutter="40" class="row">
            <el-col :span="12" class="column">
              <default-input label="First Name *"></default-input>
            </el-col>
            <el-col :span="12" class="column">
              <default-input label="Last Name *"></default-input>
            </el-col>
          </el-row>

          <el-row :gutter="40" class="row">
            <el-col :span="12" class="column">
              <default-input label="Street & House Number *"></default-input>
            </el-col>
            <el-col :span="12" class="column">
              <div class="input__devider">
                <default-input label="Zip *"></default-input>
                <default-input label="Place"></default-input>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="40" class="row">
            <el-col :span="12" class="column">
              <default-input label="Country *"></default-input>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </the-tabbar>
  </div>
</template>

<script>
import DefaultInput from "../../../components/UI/Input/DefaultInput";
import TheTabbar from "../../../components/UI/Tabbar/TheTabbar";

export default {
  data() {
    return {
      activeIndex: 1,
    };
  },
  methods: {
    setSetpActive() {
      this.activeIndex++;
    },
  },
  components: {
    TheTabbar,
    DefaultInput,
  },
};
</script>

<style scoped>
.box-card {
  padding: 0;
  height: auto;
  width: 100%;
  border: none;
}

.form {
  width: 100%;
}

.row {
  margin-bottom: 30px;
}

.input__devider {
  display: flex;
}

.input__devider div:not(:last-child) {
  width: 50%;
  padding-right: 10px;
}

@media screen and (max-width: 970px) {
  .box-card {
    padding: 0 10% 0 10%;
    width: 80%;
  }
}

@media screen and (max-width: 600px) {
  .box-card {
    width: 100%;
  }

  .row {
    margin-bottom: 30px;
  }

  .column {
    width: 100%;
  }

  .column:not(:last-child) {
  }
}
</style>
