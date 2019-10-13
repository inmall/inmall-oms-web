<template>
  <div class="content-tabs">
    <button class="roll-nav roll-left tab-prev-btn"><i class="el-icon-d-arrow-left"></i> </button>
    <button class="roll-nav roll-right tab-next-btn"><i class="el-icon-d-arrow-right"></i> </button>
    <nav class="page-tabs page-menu-tabs">
      <div class="page-tabs-content" style="margin-left: 0px;">
        <ul>
          <li>控制台 <i class="el-icon-circle-close"></i></li>
          <li class="active">商品 <i class="el-icon-circle-close"></i></li>
        </ul>
      </div>
    </nav>
    <div class="btn-group roll-nav roll-right tab-more-btn-group">
      <el-dropdown trigger="hover"
                   :hide-on-click="false">
              <span class="el-dropdown-link">
                <i class="el-icon-more"></i>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item> 关闭全部选项卡</el-dropdown-item>
          <el-dropdown-item> 关闭其他选项卡</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'nav-tabs',
        props: {

        },
        data () {
          return {}
        },
        computed: {

        }
    }
</script>

<style>
  .content-tabs {
    border-bottom: solid 2px #2f4050;
    font-size:13px;
  }

  .page-tabs ul{margin:0;padding:0;list-style: none;}

  .page-tabs li {
    color: #999;
    text-decoration: none;
    padding:0 15px;
    float:left;
  }

  .page-tabs li i {
    color: #ccc;
    margin-left:6px;
  }

  .page-tabs li.active {
    background: #2f4050;
    color: #a7b1c2
  }

  .page-tabs li.active i:hover,.page-tabs li.active:hover {
    background: #293846;
    color: #fff
  }

  .content-tabs {
    position: relative;
    height: 42px;
    background: #fafafa;
    line-height: 42px
  }

  .content-tabs .roll-nav,.page-tabs-list {
    position: absolute;
    width: 40px;
    height: 100%;
    text-align: center;
    color: #999;
    z-index: 2;
    top: 0
  }

  .content-tabs .roll-left {
    left: 0;
    border-right: solid 1px #eee
  }

  .content-tabs .roll-right {
    right: 0;
    border-left: solid 1px #eee
  }

  .content-tabs button {
    background: #fff;
    border: 0;
    height: 42px;
    width: 100%;
    outline: 0
  }

  .content-tabs button:hover {
    background: #fafafa
  }

  nav.page-tabs {
    margin-left: 42px;
    width: 100000px;
    height: 100%;
    overflow: hidden
  }

  nav.page-tabs .page-tabs-content {
    float: left
  }

  .page-tabs a {
    display: block;
    float: left;
    border-right: solid 1px #eee;
    padding: 0 15px
  }

  .page-tabs li i:hover {
    color: #c00
  }

  .content-tabs .roll-nav:hover,.page-tabs li:hover {
    color: #777;
    background: #f2f2f2;
    cursor: pointer
  }

  .roll-right.tab-next-btn {
    right: 80px
  }

  .roll-right.btn-group {
    right: 0;
    width: 80px;
    padding: 0
  }

  .roll-right.btn-group button {
    width: 80px
  }
  .dropdown-menu-right {
    left: auto
  }
</style>
