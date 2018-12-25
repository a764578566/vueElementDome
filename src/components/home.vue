<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <slot name="header">
        <el-col
          :span="3"
          class="logo"
          :class="collapsed?'logo-collapse-width':'logo-width'"
        >{{collapsed?'':sysName}}</el-col>
        <el-col :span="3">
          <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col>
        <el-col :span="3" class="userinfo"></el-col>
      </slot>
    </el-col>
    <el-col :span="24" class="main">
      <slot name="main">
        <!--导航菜单-->
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleopen"
          @close="handleclose"
          @select="handleselect"
          unique-opened
          router
          :collapse="collapsed"
        >
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title">
                <i :class="item.iconCls"></i>
                {{item.name}}
              </template>
              <el-menu-item
                v-for="child in item.children"
                :index="child.path"
                :key="child.path"
                v-if="!child.hidden"
              >{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>
              {{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="breadcrumb-container">
              <strong class="title">{{$route.name}}</strong>
              <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>
      </slot>
    </el-col>
  </el-row>
</template>


<script>
export default {
  data() {
    return {
      sysName: "VUEADMIN",
      collapsed: false,
      sysUserName: "",
      sysUserAvatar: "",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    handleopen: function() {
      //console.log('handleopen');
    },
    handleclose: function() {
      //console.log('handleclose');
    },
    handleselect: function(a, b) {},
    //折叠导航栏
    collapse: function() {
      debugger;
      this.collapsed = !this.collapsed;
    }
  }
};
</script>


<style scoped lang="scss">
@import "~scss_vars";
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: $color-primary;
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
    .logo {
      height: 60px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
      img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 200px;
    }
    .logo-collapse-width {
      width: 60px;
    }
    .tools {
      padding: 0px 23px;
      width: 14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    .content-container {
      // background: #f1f2f7;
      flex: 1;
      // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 230px;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
}
</style>