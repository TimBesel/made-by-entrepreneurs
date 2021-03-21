<template>
  <el-container>
    <el-header class="header">
      <the-logo @click="sideBarToggle"></the-logo>
    </el-header>
    <el-container>
      <nav-bar :collapse="sideMenuClosed"></nav-bar>
      <el-container>
        <el-main class="main" :class="{ 'menu-padding': !sideMenuClosed }" style="padding: 0">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import TheLogo from "./components/layout/TheLogo";
import NavBar from "./components/layout/SideMenu/SideMenu";

export default {
  data() {
    return {
      sideMenuClosed: true,
    };
  },
  methods: {
    sideBarToggle() {
      this.sideMenuClosed = !this.sideMenuClosed;
    },
  },
  components: {
    TheLogo,
    NavBar,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body {
  overflow-x: hidden;
}

.header {
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e2f;
  color: white;
}

.main {
  margin-top: 60px;
  margin-left: 70px;
  transition: 0.4s;
  transition-property: margin-left;
  width: calc(100vw - 70px);
  height: calc(100vh - 60px);
  background-color: #27293d;
}

.menu-padding {
  margin-left: 250px;
  transition: 0.4s;
  transition-property: margin-left;
}

@media screen and (max-width: 700px) {
  .header {
    justify-content: center;
  }

  .main {
    margin-top: 60px;
    margin-left: 0;
    margin-bottom: 70px;
    height: calc(100vh - 130px);
  }

  .menu-padding {
    margin-left: 0;
  }

  .logo {
    width: 250px;
  }
}
</style>
