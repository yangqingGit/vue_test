<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="manager">
    <div><img src="../../assets/logo.png" alt=""></div>
    <button v-on:click="add">新增</button>
    <div class="line1" v-show="addflag">
      <input type="text"class="name"v-model="namevalue">  <input type="button"value="添加"class="add"v-on:click="addpeople">
    </div>
    <table>
      <tr>
        <th>姓名</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in peoples">
        <td>{{item.name}}</td>
        <td v-bind:id="index"><span v-on:click="edit">修改</span> <span v-on:click="del">删除</span></td>
      </tr>
    </table>
    <div class="wrap"v-show="editflag">
      <div class="edit_div">
        <input type="text"placeholder="姓名"v-model="newname"class="newname">
        <button v-on:click="sub"class="sub">确定</button>
        <button v-on:click="cancel"class="cancel">取消</button>
      </div>
    </div>
    <foot-nav v-bind:class="{'isManager':isNowpage}"></foot-nav>
  </div>
</template>
<script>
  import footNav from '../../components/foot.vue'
  export default{
    components: {
      footNav
    },
    mounted() {
      $('.manager').css('height',$(document).height())
      $('.manager').css('background-color','pink')
    },
    data () {
      return {
        isNowpage: true,
        addflag:false,
        peoples:[
          {'name':'jack'},
          {'name':'rose'},
          {'name':'lucky'},
        ],
        namevalue:'',
        newname:'',
        editflag:false,
        editid:''
      }
    },
    methods:{
      add(){
        this.addflag=true;
      },
      addpeople(){
        var n=this.namevalue;
        if(n.trim()==''){
          alert('请输入姓名')
        }
        else{
          var data={};
          data.name=n;
          this.peoples.push(data);
          this.namevalue=''
        }
      },
      del(e){

        var v=e.target.offsetParent.id;
        this.peoples.splice(v,1)

      },
      edit(e){
        this.editflag=true;
        var t=e.target.offsetParent.id;
        this.editid=t;
        this.newname=this.peoples[t].name
      },
      sub(){
        var v=this.newname;
        if(v.trim()==''){
          alert('请输入名称')
        }
        else{
          this.peoples[this.editid].name=v;
          this.editflag=false;
        }
      },
      cancel(){
        this.editflag=false;
      }
    }
  }
</script>
<style scoped>
    button{
      width:70%;
      height:30px;
      background-color:#1f804d;
      color:papayawhip;
      border:none;
      border-radius: 3px;
     margin:10px;
    font-size:20px;
  }
  .line1{
    width:80%;
    height: 50px;
    text-align: center;
    margin: auto;
  }
  .name{
    width:60%;
    height: 30px;
    float:left;
    padding:0 8px;
    border:solid 1px grey
  }
  .add{
    width:20%;
    height:30px;
    background-color:#1f804d;
    color:papayawhip;
    border: none;
   /* float:right;
    margin-left:2%;*/
    border-radius: 5px;;
  }
  table{
    width:100%;
    text-align: center;
  }
  .wrap{
    position: absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.3);
    width:100%;
    height: 100%;
  }
  .edit_div{
    position: absolute;
    top:40%;
    left:10%;
    width:80%;
    height: 100px;;
  }
  .newname{
    width:82%;
    height: 30px;
    font-size: 18px;
  }
  .sub{
    width:60px;

  }
  .cancel{
    width:60px;
  }
</style>
