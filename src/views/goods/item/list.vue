<template>
  <div>

    <h3 class="page-header-title">
      <el-row :gutter="20" >
        <el-col :span="16">
          <i class="el-icon-goods"></i> 商品列表
        </el-col>
        <el-col :span="8" class="align-right">
          <el-button type="default" icon="el-icon-refresh">刷新</el-button>
          <el-button type="success" icon="el-icon-plus">添加商品</el-button>
        </el-col>
      </el-row>
    </h3>

    <div class="clearfix">
      <el-tabs v-model="statusType" type="card" @tab-click="handleSelectStatus">
        <el-tab-pane label="全部商品" name="first">
          <span slot="label"><i class="el-icon-goods"></i> 全部商品(<i class="el-badge__content el-badge__content--primary">300</i>)</span>
        </el-tab-pane>
        <el-tab-pane label="已上架(200)" name="second">已上架(200)</el-tab-pane>
        <el-tab-pane label="未上架" name="third">未上架(300)</el-tab-pane>
        <el-tab-pane label="待审核" name="fourth">待审核(100)</el-tab-pane>
        <el-tab-pane label="未通过" name="fifth">未通过(300)</el-tab-pane>
      </el-tabs>

      <div class="search-area">
        <el-form :inline="true" >
          <el-form-item label="审批人">
            <el-input  placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select  placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >查询</el-button>
          </el-form-item>
        </el-form>
      </div>



      <el-table
        :data="tableData"
        border
        style="width: 100%"
        max-height="250">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="120">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="data-table-bottom">
        <el-row>
          <el-col :span="8" class="align-right">
            <el-pagination
              background
              :current-page="4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </el-col>
        </el-row>
      </div>


    </div>


  </div>
</template>

<script>
    import {Message} from 'element-ui';
    export default {
        data() {

            return {
                statusType:'first',
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }]
            }
        },
        created(){

        },
        methods: {
            handleSelectStatus() {

            }
        }
    }
</script>
