<template>
  <div id="app">
    <div class="logoimg">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <img :src="'https://www.playpennies.com/vfiles/2896-c5a42014c4541a75d7cc1980c988d9fd.png'">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/candle">Shop</router-link></li>
        </ul>
        <ul v-if="window.user" class="navbar-nav">
          <li v-if="window.user.role === 'admin'" class="nav-item"><router-link to="/addmore">Add to store</router-link></li>
          <li v-if="window.user.role === 'admin'" class="nav-item"><router-link to="/deleteItem">Remove from store</router-link></li>
          <li class="logout"><a  v-on:click="logout" href="#">Logout</a></li>
          <li id="cart"><cart :items="items" v-if="window.user.role === 'admin'" class="cart"></cart></li>
        </ul>
        <ul v-else class="navbar-nav">
          <li class="nav-item"><router-link to="/login">Login</router-link></li>
        </ul>
      </div>
    </nav>
    <hr>
    <router-view @addCandle="addCandle" @deleteFromCartCandle="deleteFromCartCandle" :items="items"></router-view>
    </div>
      <div class="footer-bottom">
        <div class="container">
          <p class="pull-left"> Copyright © Monica 2017. All rights reserved. </p>
        </div>
      </div>
    </div>
</template>

<script>
  import candle from './components/candle'
  import home from './components/home'
  import addmore from './components/addmore'
  import cart from './components/cart'
  import deleteItem from './components/deleteItem'
  import checkout from '@/components/checkout'
  import sucs from '@/components/sucs'



  export default {
    name: 'app',
    components: {
      addmore,
      candle,
      home,
      cart,
      deleteItem,
      checkout,
      sucs
    },
    data(){
      return{
       items: [],
       url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        window: window
     }
    },
    methods: {
      addCandle(candle){
        this.items.push(candle);
      },
      deleteFromCartCandle(candle){
        let index = this.items.indexOf(candle)
        this.items.splice(index, 1);
//        this.items.remove(candle)

      },
      logout() {
        window.user = null;
        this.$router.push('login')
      }
    }
  }
</script>

<style>
  #app {
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #FFFFFF;
    height:100%;
    background-color: #262626;
    margin: 0%;
    padding: 0%;
  }

  .navbar ul {
    /*border-bottom: none;*/
    font-size: 1.9em;
    line-height: 40px;
    margin: 0;
    list-style-type: none;
    text-align: center;
  }

  .navbar ul li {
    display:inline-block
  }

  .navbar ul li a {
    padding: .2em 1em;
    color: #fff;

  }

  .navbar ul li a:hover {
    color: #000;
    background-color: #fff;
  }

  /*----------*/

  ul.dropdown-cart li .item{
    display:block;
    padding:3px 10px;
    margin: 3px 0;
    width:150px;
  }
  ul.dropdown-cart li .item:hover{
    background-color:#f3f3f3;
  }
  ul.dropdown-cart li .item:after{
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  ul.dropdown-cart li .item-left{
    float:left;
  }
  ul.dropdown-cart li .item-left img,
  ul.dropdown-cart li .item-left span.item-info{
    float:left;
  }
  ul.dropdown-cart li .item-left span.item-info{
    margin-left:10px;
  }
  ul.dropdown-cart li .item-left span.item-info span{
    display:block;
  }
  ul.dropdown-cart li .item-right{
    float:right;
  }
  ul.dropdown-cart li .item-right button{
    margin-top:14px;
  }
  .footer-bottom{
    margin-top: 40px;
    border-top: 2px solid #eee;
    background-color: #262626;
  }
  .pull-left{
    margin-top: 10px;
   }

  img{
    width:150px;

  }
  .nav-item{
    padding-top:42px;
    margin-left: auto;
    margin-right: auto;
  }

  .navbar navbar-toggleable-md navbar-light bg-faded{
    padding-bottom: -450px;
  }

  .logout{
    margin-top: 42px;
  }


  #cart {
    font-size: 0.7em;
    margin-left: 120px;
  }
</style>

