<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <div class="fix_top">
      <div class="nav_po">朋友圈</div>
      <div class="camera"><img src="/static/img/camera.png" alt=""></div>
    </div>
    <div>
      <div class="bg_img"><img src="/static/img/head.jpg" alt=""></div>
      <div class="head_img"><img src="/static/img/head.jpg" alt=""></div>
      <div class="user_nick">黑色幽默。</div>
    </div>
    <div class="container">
      <div v-for="(item,index) in data" class="border">
        <div class="user_img"><img :src="item.url" alt=""></div>
        <div class="right">
          <div class="nick_name">{{item.name}}</div>
          <div class="content">{{item.content}}</div>
          <div class="pimg"><img :src="item.picUrl" alt=""></div>
          <div class="time">{{item.time}}</div>
          <div class="comment"v-on:click.stop="showCommentClick($event,item)"><img src="/static/img/comment.png" alt=""></div>
          <div class="wrap"v-show="item.showComt">
            <a v-on:click.stop="likeClick($event,item)" class="btn btn-left" href="javascript:;">
              <span class="icon-heart-empty"></span>{{item.like}}
            </a>
            <a v-on:click.stop="comtClick($event,item)" href="javascript:;" class="btn btn-comment">
              <span class="icon-comment-alt"></span>评论
            </a>
          </div>
          <div class="comment_div" v-show="item.comment && item.comment.length >0 || item.userLike.length>0">
            <span class="triangle"></span>
            <div class="like_div">
              <span  v-for="like in item.userLike">{{like}}<span class="douhao">,</span></span>
            </div>
            <div class="comment_list"v-show="item.comment && item.comment.length >0">
              <div v-for="list in item.comment">
                <span>{{list.name}}:</span><span class="content">{{list.content}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<foot-nav v-bind:class="{'isIndex':isNowpage}"></foot-nav>-->
  </div>
</template>
<script>
  import footNav from '../../components/foot.vue'
  import axios from 'axios'
  import Vue from 'vue'
  import $ from 'jquery'
  export default{
    components: {
      footNav
    },

    mounted(){
      this.getData();
        /*axios.get('/api/getdata',{
            params: {
              ID: 12345
            }
          })
          .then(function (response) {
            this.dd(response)
          })
          .catch(function (error) {
            console.log(error);
          });*/
    },
    data () {
      return {
        isNowpage: true,
        data:[],
        clickFeed:null,
      }
    },
    methods:{
      getData(){
        var obj=this;
        var showComt;
        $.getJSON("../../static/mock/talk.json",function(response){
          obj.dd(response.data);
          obj.data.forEach(function (feed) {
            // 初始化showComt,false为不显示
            Vue.set(feed, 'showComt', false);
          })
        })
      },
      dd(yy){
        this.data=yy;
        console.log(this.data)
      },
      showCommentClick: function (event, feed) {
        this.clickFeed = feed;
        feed.showComt = !feed.showComt;
      },
      likeClick: function (event, feed) {
        console.log(feed)
        var gUserInfo='杨清';
        if (feed.like === "赞") {
          if (gUserInfo) {
            feed.userLike.push(gUserInfo);
            feed.like = '取消';
          }
        } else {
          if (gUserInfo) {
            feed.userLike.pop();
            feed.like = '赞';
          }
        }
      },
      comtClick () {

      }
    }
  }
</script>
<style scoped>
  img{
    width:100%;
    height:auto;
    display: block;
    vertical-align: bottom;
  }
  .fix_top{
    width:100%;
    height:50px;
    position:absolute;
    left:0;
    top:0;
    background-color: #727272;
  }
  .nav_po{
    position: absolute;
    left:12%;
    top:27%;
    color:white;
  }
  .bg_img{
    position: absolute;
    top:48px;;
    left:0;
    width:100%;
    height:35%;
    overflow: hidden;
  }
  .camera{
    position: absolute;
    top:15%;
    left:86%;
    width:2em;
    height: 2em;
  }
  .head_img{
    position: absolute;
    top:32%;
    left:68%;
    width:25%;
    border:solid 0.1px darkgrey;
    padding:3px;
    background-color: white;
  }
  .user_nick{
    position: absolute;
    top:36%;
    left:40%;
    color:white;
    font-size:18px;
    font-weight: bold;
  }
  .container{
    position: absolute;
    top:42%;
    left:0;
    padding:12px 8px;
    width:100%;
    height: auto;
    text-align: left;;
    box-sizing: border-box;
  }
  .border{
    border-bottom: solid 1px rgba(214, 216, 221, 0.44);
    padding:1em 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
  }
  .user_img{
    flex:1;
    width:4em;
    height:4em;
  }
  .user_img img{
    width:100%;
    height: 100%;
  }
  .right{
    flex:5;
    width:70%;
    padding-left:1em;
    padding-top:0.5em;
    font-size: 18px;;
    position: relative;
  }
.nick_name{
  color:cornflowerblue;
  padding-bottom: 0.5em;
}
  .pimg{
    width:80%;
    padding-top:1em;
  }
  .time{
    float:left;
    margin-top: 0.5em;
    font-size:14px;
    color:darkgrey;

  }
  .comment{
    width:1.6em;
    height: 1.6em;
    float:right;
    margin-top: 0.4em;
  }
  a{
    text-decoration: none;
    color:whitesmoke;
    padding:0 0.3em;
  }
  .wrap{
    float:right;
    width:50%;
    padding:0.2em;
    margin-top: 0.4em;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #5f5b65;
    text-align: center;
  }
  .wrap a{
  }
  .btn-left{
    border-right:1px solid #000;
  }
  .comment_div{
    width:90%;
    height: auto;
    background-color: rgb(245, 245, 245);
    margin-top: 15%;
    position: relative;
    border-radius:2px;
    padding:0.5em;
    box-sizing: border-box;
    color: #4c7bff;
    font-size: 15px;

  }
  .triangle {
    position: absolute;
    width: 0px;
    height: 0px;
    line-height: 0px;
    border-bottom: 10px solid #F4F4F4;
    border-left: 10px solid #fff;
    border-right: 10px solid #fff;
    left: 40px;
    top: -10px;
  }
  .like_div span{

  }
  .like_div span:last-child .douhao {
    display: none;
  }
  .comment_list{
    border-top:solid 1px gainsboro;
    margin-top: 5px;
    padding-top:10px;
  }
  .comment_list>div{
    margin-bottom: 3px;
  }
  .content{
    color:black;
  }
</style>
