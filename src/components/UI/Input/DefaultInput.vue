<template>
  <div class="form__div">
    <label for="" class="form__label"></label>
    <input type="text" class="form__input" :placeholder="label" />
  </div>
</template>

<script>
import '../../../style/style.css';

export default {
  props: {
    label: {
      type: String,
      default: 'Label',
    },
  },
};
</script>

<style scoped>
.form__div {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 0.9rem;
  width: 100%;
  height: 40px;
}

.form__div .form__label {
  padding-bottom: 0.51429rem;
}

.form__label {
  display: block;
  font-size: 0.92857rem;
  padding-left: 2px;
  color: white;
}

.form__input {
  display: block;
  width: 100%;
  height: 2.7rem;
  padding: 0 15px;
  box-sizing: border-box;
  color: white;
  border: 1px solid #1e1e2f;
  background-color: #27293d;
  border-radius: 5px;
  outline: none;
}
</style>
