<template>
    <el-container style="height: 100%">
        <el-aside width="200px">
            <LeftMenu/>
        </el-aside>
        <el-container>
            <el-header style="padding: 0;">
                <TopMenu />
            </el-header>
            <el-main>
                <keep-alive>
                    <router-view/>
                </keep-alive>
            </el-main>
        </el-container>
    </el-container>
</template>
<style>
.el-aside{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .1);
}
</style>
<script>
    import LeftMenu from '@/components/LeftMenu/index.vue'
    import TopMenu from '@/components/TopMenu/index.vue'

    export default {
        name: 'index',
        components: {
            LeftMenu,
            TopMenu
        }
    }
</script>