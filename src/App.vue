<template>
  <div id="app">
    <el-container>
    <el-header>
      <ul>
        <li>
          <router-link to="/index">Timeline</router-link>
          <router-link to="/todo">todo</router-link>
          <router-link to="/article">Article</router-link>
          <router-link to="/twoDimensionTable">TwoDimensionTable</router-link>
          <router-link to="/factOpinionCard">FactOpinionCard</router-link>
          <router-link to="/whyHowWhatCard">WhyHowWhatCard</router-link>
          <router-link to="/preference">Preference</router-link>
          <router-link to="/imageGallery">ImageGallery</router-link>
        </li>
      </ul>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>记录不只是记录，还是书写人生</el-footer>
  </el-container>
  </div>
</template>

<script>
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

export default {
  name: "app"
};
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-footer {
    width: 100%;
  }
  .el-header ul{
    list-style-type: none;
    margin-top: 0px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    min-height: calc(100vh - 120px);
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

