<template>
  <el-container id="app" style="border:1px solid #a1a1a1" class="fullContent">
    <el-header height="57px" style="padding:0 16px;background-color: #e7f4f7;" class="flexRowBetween app-header">
      <img style="padding:2px 2px 2px 0px" :src="$Image(`logo.png`)" width="100" />
      <div class="fullContent flexRowBetween" style="padding:0 16px;background-color: #e7f4f7;">
        <div class="flexRowStart" style="width:214px;">
          <span class="win-title" style="margin-left:2px; font-size:20px">中联智诚智能巡更系统</span>
        </div>      
      </div>
      <div class="flexRowEnd menu-box">
        <image-button v-for="(button, index) in buttons" @click="button[0]" :src="$Image(`/${button[1]}`)" :key="index"></image-button>
      </div>
    </el-header>
    <el-container >
      <el-aside width="210px" class="main-aside" >
        <el-menu :default-active="activeTab" @select="onChangeActiveTab">
          <el-menu-item v-for="(item,index) in itemData"  :key="index" :index="item.name">
            <div class="flexRowStart" style="padding:0px 0px 0px 15px;">
              <i :class="item.icon"></i>
              <span slot="title">{{ `${item.name}` }}</span>
            </div>
          </el-menu-item> 
          <el-submenu index="2">
            <template slot="title" >
              <i style="padding:0px 0px 0px 15px;" class="el-icon-setting"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item style="padding:0px 0px 0px 70px;" index="部门设置">部门设置</el-menu-item>
            <el-menu-item style="padding:0px 0px 0px 70px;" index="角色设置">角色设置</el-menu-item>
            <el-menu-item style="padding:0px 0px 0px 70px;" index="用户设置">用户设置</el-menu-item>
          </el-submenu>                      
        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view />
        </keep-alive>           
      </el-main>
    </el-container>
    <el-dialog
      title="用户登录"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose">
      <el-form label-position="left" label-width="120px"  >
        <el-form-item label="用户账号:">
          <el-input
          v-model="data1"
          :readonly="true">
          </el-input> 
        </el-form-item>          
        <el-form-item label="用户密码:">
          <el-input
          v-model="data2"
          :readonly="true">
          </el-input> 
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>    
  </el-container>
</template>

<script>
  import ImageButton from '@/components/zhonglian/img-button.vue'
  import {remote} from 'electron'
  const window = remote.getCurrentWindow()
  export default {
    name: 'syncios',
    components: { ImageButton },
    data () {
      return {
        buttons: [
          [this.onMini, 'mini.png'],
          [this.onMax, window.isMaximized() ? 'quit-max.png' : 'max.png'],
          [this.onClose, 'close.png']
        ],
        itemData: [
          {name: '巡检记录', icon: 'el-icon-tickets'},
          {name: '巡检线路', icon: 'el-icon-circle-plus-outline'},
          {name: '巡检点', icon: 'el-icon-location-outline'},
          {name: '巡检计划', icon: 'el-icon-star-off'},
          {name: '任务安排', icon: 'el-icon-view'},
          {name: '查询统计', icon: 'el-icon-search'}
        ],
        activeTab: '',
        dialogVisible: true,
        data1: 'admin',
        data2: 'xxxxxxxx'
      }
    },
    methods: {
      onMini: function () {
        window.minimize()
      },
      onMax: function () {
        if (window.isMaximized()) {
          window.unmaximize()
        } else {
          window.maximize()
        }
      },
      onClose: function () {
        window.close()
      },
      onChangeActiveTab (newTab) {
        this.$router.push({ name: newTab })
      }
    },
    mounted: function () {
      window.on('maximize', () => {
        this.buttons.splice(1, 1, [this.onMax, 'quit-max.png'])
      })
      window.on('unmaximize', () => {
        this.buttons.splice(1, 1, [this.onMax, 'max.png'])
      })
    }
  }
</script>

<style lang='scss'>
  /* CSS */
  #app {
    .app-header {
      border-bottom: 1px solid #b4deee;
      -webkit-app-region: drag;
    }
    .app-footer {
      padding: 0 14px;
      width: 100%;
      border-top: 1px solid #e6e6e6;
      background-color: #e0e0e0;
    }  
  }
  .menu-box {
    width: 120px;
    -webkit-app-region: no-drag;
    #image-button + #image-button {
      margin-left: 18px;
    }
  }
  .main-aside {
    border-right:1px solid #e1e1e1;
    .el-menu {
      border-right: none;
    }
    .el-menu-item {
      padding: 0;
      height: 42px;
      line-height: 42px;
      font-size: 14px;
      color: #333333;
    }
    .el-menu-item:hover, .el-submenu .el-menu-item:hover, div[class="el-submenu__title"]:hover {
      background-color: #e7f4f7;
    }
    .el-menu-item.is-active {
      background-color: #00b4f0  !important;
      color: #ffffff;
    }    
  }
  .btn-group {
    padding: 0 18px;
    background-color:#f1f1f1;
    border-bottom: 1px solid #e1e1e1;
    #image-button + #image-button{
      margin-left: 50px;
    }
  }  
</style>
