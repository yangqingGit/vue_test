<template>
  <div class="foot fix">
    <ul>
      <li><router-link to="/">首页</router-link> </li>
      <li><router-link to="/manager">人员管理</router-link> </li>
      <li><router-link to="/tixian">提现</router-link> </li>
    </ul>
  </div>
</template>
<style scoped>
  .fix{
    position: fixed;
    width:100%;
    height: 50px;

  }
  .foot{
    bottom:0;
    left:0;
  }
  ul{
    display: flex;
    flex-direction: row;
    background-color: #1f804d;
    padding:0;
    margin: 0;

  }

  ul li{
    flex:1;
    display: inline-block;
    height: 50px;
    list-style:none;

  }
  ul li a{
    text-decoration: none;
    color:whitesmoke;
    line-height:50px;;
    display: inline-block;

  }
  .isIndex li:first-child{
    background-color: #94d33a;
  }

  .isManager li:nth-child(2){
    background-color: #94d33a;
  }
  .isTixian li:last-child{
  background-color: #94d33a;

}
</style>
