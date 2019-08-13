<template>
    <div  class="top-content">
        <el-menu
            class="top-right-menu"
            mode="horizontal"
            background-color="#00b8d2"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item>
                    <i class="fa fa-question-circle menu-icon"></i>
                    帮助
            </el-menu-item>
            <el-submenu>
              <template slot="title">
                    <i class="fa fa-user-circle-o menu-icon"></i>
                    管理员
              </template>
              <el-menu-item>个人信息</el-menu-item>
              <el-menu-item @click="loginOut">退出</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
       
</template>
<style lang="less">
    .top-content{
        background: #00b8d2;
        height: 60px;
    }
    .top-right-menu{
        float: right;
        background: transparent;
    }
    .menu-icon{
        font-size: 25px !important;
        color:#fff !important;
    }
</style>
<script>
export default{
    data(){
        return {
          
        }
    },
    methods:{
        loginOut(){
            this.$router.push({ path: "/login" });
        },
    }
}
</script>