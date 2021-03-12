<template>
  <div class="nav" id="navbar">
    <nav
      class="nav__container"
      :class="{ 'nav__container-collapse': collapse }"
    >
      <div>
        <div class="nav__list">
          <div class="nav_items" ref="menuItems">
            <!---->
            <!-- #################### side Menu Items #################### -->
            <!---->
            <menu-item icon="el-icon-s-data" link="/dashboard"
              >Dashboard</menu-item
            >
            <sub-menu
              icon="el-icon-s-custom"
              title="Costumers"
              link="/customer"
            >
              <sub-menu-item
                icon="el-icon-office-building"
                link="/customer/company"
                >Company</sub-menu-item
              >
              <sub-menu-item icon="el-icon-plus" link="/customer/new"
                >Add</sub-menu-item
              >
              <sub-menu-item
                icon="el-icon-edit-outline"
                link="/customer/customer"
                >customize</sub-menu-item
              >
            </sub-menu>
            <sub-menu icon="el-icon-money" title="Invoice" link="/invoice">
              <sub-menu-item icon="el-icon-document-add" link="/invoice/new"
                >New</sub-menu-item
              >
              <sub-menu-item icon="el-icon-folder-opened" link="/invoice/saved"
                >Saved</sub-menu-item
              >
              <sub-menu-item icon="el-icon-edit" link="/invoice/edit"
                >Edit</sub-menu-item
              >
            </sub-menu>
            <!---->
            <!-- ######################################################### -->
            <!---->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import './var.css';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';
import SubMenuItem from './SubMenuItem';

export default {
  components: {
    MenuItem,
    SubMenu,
    SubMenuItem,
  },
  props: {
    collapse: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.nav {
  z-index: 10;
  background-color: var(--container-color);
  transition: 0.4s;
}

.nav__container {
  max-width: var(--nav-width);
  width: var(--nav-width);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  scrollbar-width: none;
  transition: 0.4s;
  transition-property: max-width;
}

.nav__container-collapse {
  max-width: var(--nav-collapse-width);
  transition: 0.4s;
  transition-property: max-width;
}

.nav::-webkit-scrollbar {
  display: none;
}

.nav__list,
.nav_items {
  display: grid;
}

.nav_list {
  row-gap: 2.5rem;
}

@media screen and (max-width: 700px) {
  .nav {
    position: absolute;
    height: calc(100vh - 60px);
  }
}
</style>
