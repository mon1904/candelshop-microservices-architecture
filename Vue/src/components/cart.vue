<template>
<ul class="nav navbar-nav navbar-right">
  <li class="dropdown">
    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
      <span class="glyphicon glyphicon-shopping-cart"></span>{{ items.length }} - Items<span class="caret"></span></a>
    <ul class="dropdown-menu dropdown-cart" role="menu">
      <li v-for="item in items" transition="fade">
        <p><strong>{{ item.name }} - €{{ item.price }}.00</strong></p></li>
      <button class="btn btn-default" v-on:click="navigateTo()" >Proceed to check out</button>
    </ul>
  </li>
</ul>
</template>

<script>

  import axios from "axios";
  import candle from './candle'
  import checkout from './checkout'

  export default {

    props: ['items'],
    data() {
      return {
        cart: [],
      }
    },
    methods: {
      navigateTo: function () {
        this.$router.push('/checkout')
      }
    }
  }


</script>

<style>

  .nav   {
    padding-top:40px;
  }


.dropdown-cart{
  width: 100%;
}

  .dropdown-cart{
    margin-right: -30px;
    border: solid white;
    background-color: #262626;

  }
  ul.dropdown-cart li {
    display:block;
    padding:3px 10px;
    margin: 3px 0;
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
</style>
