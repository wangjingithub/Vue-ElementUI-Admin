<template>
        <div class="register-content">
            <div class="login-panel">
                    <div class="register-title">
                            <h2 style="color:#fff;margin: 0;">后台管理系统用户注册</h2>
                            <div class="triangle"></div>
                    </div>
             <el-card class="box-card register-card">
                 <el-form ref="form" :model="form">
                     <el-form-item>
                         <el-input v-model="form.username" placeholder="请输入用户名"  prefix-icon="fa fa-user"> </el-input> 
                     </el-form-item>
                     <el-form-item>
                        <el-select v-model="form.deptname" placeholder="请选择部门" style="width: 100%">
                            <el-option v-for="item in deptOptions"
                                :key="item.value" :label="item.key" :value="item.value">
                            </el-option>
                        </el-select>
                     </el-form-item>
                     <el-form-item>
                        <el-input v-model="form.username" placeholder="请输入联系方式"  prefix-icon="fa fa-phone"> </el-input> 
                    </el-form-item>
                     <el-form-item>
                         <el-input v-model="form.password" type="password" placeholder="请输入密码"  prefix-icon="fa fa-lock"> </el-input>
                     </el-form-item>
                     <el-form-item>
                        <el-input v-model="form.password2" type="password" placeholder="请确认密码"  prefix-icon="fa fa-lock"> </el-input>
                    </el-form-item>
                     <el-form-item>
                            <el-button @click="toLogin" size="small" style="width: 35%">返回登录</el-button>
                            <el-button @click="submitRegister" size="small" type="success" style="width: 35%;float: right;">提交注册</el-button>
                     </el-form-item>
                 </el-form>
             </el-card>
            </div>
        </div>
        
     </template>
     <style>
         .register-content{
             position: absolute;
             width: 100%;
             height: 100%;
         }
         .register-card{
            border: 0px solid #EBEEF5 !important;
            box-shadow: 0 0px 0px 0 rgba(0,0,0,0) !important;
         }
         .register-title{
             background: #83d662;
             margin: 20px 0;
             padding: 10px;
            margin-left: -30px;
            width: 350px;
         }
         .triangle{
            z-index: -1;
            position: absolute;
            margin-top: -23px;
            margin-left: -2px;
            -webkit-transform: rotate(22deg);
            width: 0;
            height: 0;
            border-width: 0 15px 40px;
            border-style: solid;
            border-color: transparent transparent #66994c;
         }
     </style>
     <script>
     export default{
         data(){
             return {
                 form:{
                     username:'',
                     password:'',
                     password2:'',
                     phone:'',
                     deptname:''
                 },
                 deptOptions:[
                    {key:'部门1',value:'部门1'},
                    {key:'部门2',value:'部门2'}
                 ],
                 loading:false
             }
         },
         methods:{
            toLogin(){
                this.$router.push({ path: "/login" });
             },
             submitRegister(){
                this.$message({
                    message: '恭喜你，注册成功！',
                    type: 'success'
                });
             }
         }
     }
     </script>