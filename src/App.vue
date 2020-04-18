<template>
  <div id="app">
    <el-container>
    <el-header>
      <ul>
        <li>
          <router-link to="/index">Timeline</router-link>
          <router-link to="/todo">todo</router-link>
        </li>
      </ul>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
