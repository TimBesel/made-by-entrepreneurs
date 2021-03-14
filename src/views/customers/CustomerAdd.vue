<template>
  <toolbar title="Create a new customer">
    <default-button title="Cancle"></default-button>
    <icon-button title="Next"></icon-button>
  </toolbar>
  <el-form label-width="200px" class="customer-form">
    
    <customer-invoice-header></customer-invoice-header>
  </el-form>
</template>

<script>
import '../../components/layout/slider/SideMenu/var.css';
import Toolbar from '../../components/layout/Topbar';
import DefaultButton from '../../components/UI/Button/DefaultButton.vue';
import IconButton from '../../components/UI/Button/IconButton';
import CustomerInvoiceHeader from '../../components/layout/customerNewStepOne/CustomerInvoiceHeader';

export default {
  components: {
    Toolbar,
    IconButton,
    DefaultButton,
    CustomerInvoiceHeader,
  },
};
</script>

<style scoped>
* {
  font-family: 'Source Sans Pro', sans-serif;
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
  align-items: center;
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
