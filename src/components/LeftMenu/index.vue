<template>
        <el-menu
        class="left-content"
        :default-active="leftMenuActive">
        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <template v-for="(child,index1) in item.children || child.children.length<=0">
                    <el-menu-item v-if="!child.children" :key="index1" :index="index1+''" @click="openPage(child,item.path+'/'+child.path)">
                        <i :class="child.meta.icon"></i>
                        <span slot="title">{{child.meta.title}}</span>
                    </el-menu-item>
                    <el-submenu v-if="child.children && child.children.length>0" :index="index1+''">
                        <template slot="title">
                                <i :class="child.meta.icon"></i>
                                <span slot="title">{{child.meta.title}}</span>
                        </template>
                        <el-menu-item v-for="(twoChild,index2) in child.children" :key="index2" :index="twoChild.path" @click="openPage(twoChild,item.path+'/'+child.path+'/'+twoChild.path)">
                                <i :class="twoChild.meta.icon"></i>
                                <span slot="title">{{twoChild.meta.title}}</span>
                        </el-menu-item>
                    </el-submenu>
            </template>
        </template>
      </el-menu>
</template>
<style lang="less">
.left-content{
    height: 100%;
    border: none !important;
}
.el-submenu i,.el-menu-item i{
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 16px;
}
</style>
<script>
export default{
    data(){
        return {
            leftMenuActive:'0'
        }
    },
    methods: {
        openPage(meun,path){
            const toPath=path?path:menu.path;
            if(meun.path.indexOf('http')>-1){
                window.open(meun.path);
            }else{
                this.$router.push({ path: toPath });
            }
        }
    }
}
</script>