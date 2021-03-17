<template>
  <el-container>
    <el-header class="header">
      <the-logo @click="sideBarToggle"></the-logo>
    </el-header>
    <el-container>
      <nav-bar :collapse="sideMenuOpen"></nav-bar>
      <el-container>
        <el-main class="main" style="padding: 0">
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
      sideMenuOpen: true,
    };
  },
  methods: {
    sideBarToggle() {
      this.sideMenuOpen = !this.sideMenuOpen;
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e2f;
  color: white;
}

.main {
  width: calc(100vw - 70px);
  height: calc(100vh - 60px);
  background-color: #27293d;
}

@media screen and (max-width: 700px) {
  .header {
    justify-content: center;
  }

  .logo {
    width: 250px;
  }
}
</style>
