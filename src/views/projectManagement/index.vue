<template>
    <div>
        <el-row >
            <el-col :span="24">
                <el-col :span="20">
                        <el-row :gutter="20">
                            <el-col v-for="(item,index) in checkData" :key="index" :span="6">
                                <div class="grid-content">
                                    <img :src="item.icon"/>
                                    <div class="check-info">
                                        <span>{{item.count}}</span>
                                        <span>{{item.title}}</span>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="24" style="padding: 15px; ">
                                <el-row :gutter="20" style="background: #f4f4f5;padding:10px;">
                                        <el-col :span="5">
                                            <el-input placeholder="项目名称" v-model="searArgs.checkName" size="small" clearable></el-input>
                                        </el-col>
                                        <el-col :span="5">
                                            <el-input placeholder="项目状态" v-model="searArgs.checkStatus" size="small" clearable></el-input>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-date-picker v-model="searArgs.startTime" type="date" size="small" placeholder="开始时间" style="width: 100%"></el-date-picker>
                                        </el-col>
                                        <el-col :span="6">
                                            <el-date-picker v-model="searArgs.endTime" type="date" size="small" placeholder="结束时间" style="width: 100%"></el-date-picker>
                                        </el-col>
                                        <el-col :span="2" style="text-align: center;">
                                            <el-button type="success" icon="el-icon-search" size="small" circle></el-button>
                                        </el-col>
                                </el-row>
                            </el-col>
                        </el-row>
                </el-col>
                <el-col :span="1">&nbsp;</el-col>
                <el-col :span="3">
                    <div class="grid-content" style="text-align: center;height: 130px;">
                        <el-progress type="circle" :width="100" :percentage="25"></el-progress>
                        <p>项目完成进度</p>
                    </div>
                </el-col>
            </el-col>
        </el-row>
        <el-table :data="tableData" ref="table"  style="width: 100%">
                <el-table-column class="text-overflow" v-for="(item,index) in tableCouums" :key="index" 
                :show-overflow-tooltip="true" :prop="item.key"  :label="item.title"> 
               </el-table-column>
               <el-table-column width="100"  label="操作" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-edit"></el-button>
                        <el-button type="text" icon="el-icon-delete"></el-button>
                    </template>
                </el-table-column>
        </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>
<style>
    .grid-content {
        padding: 15px;
        height: 65px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    
    .grid-content img {
        height: 65px;
    }
    
    .grid-content p {
        font-size: 16px;
        margin: 0;
        padding: 0;
        color: #00b8d2;
        font-weight: 600;
    }
    
    .check-info {
        float: right;
        text-align: right;
        color: #00b8d2;
    }
    
    .check-info span:nth-child(1) {
        font-size: 35px;
        font-weight: 700;
        display: block;
    }
    .el-table td, .el-table th {
        padding: 5px 0 !important; 
    }
    .el-table .cell{
        cursor: pointer !important;
    }
</style>
<script>
    export default {
        data() {
            return {
                checkData: [{
                    title: '总金额(万元)',
                    count: 9687,
                    icon: require('../../assets/images/money.png')
                }, {
                    title: '完结金额',
                    count: 1088,
                    icon: require('../../assets/images/money.png')
                }, {
                    title: '已完结项目',
                    count: 3409,
                    icon: require('../../assets/images/chart.png')
                }, {
                    title: '未完结项目',
                    count: 5190,
                    icon: require('../../assets/images/chart.png')
                }],
                searArgs: {
                    checkName: '',
                    checkStatus: '',
                    startTime: '',
                    endTime: ''
                },
                tableCouums:[
                    { "key": "xmmc", "title": "项目名称"},
                    { "key": "xmje", "title": "金额(万元)"},
                    { "key": "xmzt", "title": "状态"},
                    { "key": "xxdw", "title": "单位"},
                    { "key": "kgsj", "title": "开工时间"},
                    { "key": "wgsj", "title": "完工时间"},
                    { "key": "fzr", "title": "负责人"},
                    { "key": "yz", "title": "业主"},
                    { "key": "lxfs", "title": "业主联系方式"},
                ],
                tableData: []
            }
        },
        created() {
            this.getData()
        },
        methods:{
            getData(){
                /*this.http.post(this.api.projectManagement.list, {
                   name:'test'
                }, res => {
                    console.log(res);
                })*/
                this.tableData=[
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'},
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'},
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'},
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'},
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'},
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'},
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'},
                    {xmmc:'XX市城区图-完结',xmje:200,xmzt:'完结',xxdw:'xx有限公司',kgsj:'2019-06-10',wgsj:'2019-10-10',fzr:'张三',yz:'李四',lxfs:'18000000000'}
                ]
            }
        }
    }
</script>