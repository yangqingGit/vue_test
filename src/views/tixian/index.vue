<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="top">提现</div>
    <div class="nav">
      <ul>
        <li v-on:click="page11">资金信息</li>
        <li v-on:click="page22">申请提现</li>
        <li v-on:click="page33">提现记录</li>
      </ul>
    </div>
    <div v-show="page1">page1</div>
    <div v-show="page2">page2</div>
    <div v-show="page3">page3</div>
    <foot-nav v-bind:class="{'isTixian':isNowpage}"></foot-nav>
  </div>
</template>
<script>
  import footNav from '../../components/foot.vue'
  export default{
    components: {
      footNav
    },
    data(){
      return{
        isNowpage:true,
        page1:true,
        page2:false,
        page3:false,
      }
    },
    methods:{
      page11(){
        this.page1=true;
        this.page2=false;
        this.page3=false;
      },
      page22(){
        this.page2=true;
        this.page1=false;
        this.page3=false;
      },
      page33(){
        this.page3=true;
        this.page1=false;
        this.page2=false;
      }
    }
  }
</script>
<style>
  .top{
    width:100%;
    height: 40px;
    text-align: left;
    margin-top: 10px;
  }
  ul{
    display: flex;
    flex-direction: row;
    background-color: #cfa75a;
    padding:0;
    margin: 0;

  }

  ul li{
    flex:1;
    display: inline-block;
    height: 50px;
    list-style:none;
    line-height:50px;
  }
  ul li a{
    text-decoration: none;
    color:whitesmoke;
    display: inline-block;
  }

</style>
