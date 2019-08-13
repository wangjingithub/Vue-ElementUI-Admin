<template>
   <div class="login-content">
       <div class="login-panel">
           
        <el-card class="box-card login-card">
            
            <div style="padding: 20px">
                <!-- <div></div> -->
                <h3 style="color: #83d662">欢迎使用</h3>
                <h1 style="color: #83d662">后台管理系统</h1>
                <el-form ref="form" :model="form">
                    <el-form-item>
                        <el-input v-model="form.username" placeholder="请输入用户名"  prefix-icon="fa fa-user"> </el-input> 
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.password" type="password" placeholder="请输入密码"  prefix-icon="fa fa-lock"> </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="login" type="success" size="small" :loading="loading" style="width: 100%;">登录</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="register" type="text">注册账号</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <div class="circle"></div>
        </div>
   </div>
   
</template>
<style>
    .login-content{
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .login-panel{
        
        width: 400px;
        width: 400px;
        position: relative;
        top: 50%;
        left: 50%;
        border-radius: 4px;
        transform: translate(-50%, -50%);
        border: 1px solid #EBEEF5;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .login-card{
        text-align: center;
        border: 0px solid #EBEEF5 !important;
        box-shadow: 0 0px 0px 0 rgba(0,0,0,0) !important;
    }
    .login-content .el-card__body{
        padding: 0;
    }
    .circle{
        width: 120px;
        height: 120px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        top: -40px;
        left: 50%;
        z-index: -1;
        transform: translate(-50%, 0%);
        border: 1px solid #EBEEF5;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
</style>
<script>
export default{
    data(){
        return {
            form:{
                username:'',
                password:''
            },
            loading:false
        }
    },
    methods:{
        login(){
            this.loading=true;
            setTimeout(() => {
                this.$router.push({ path: "/home" });
                this.loading=false;
            }, 1000);
            
        },
        register(){
            this.$router.push({ path: "/register" });
        }
    }
}
</script>