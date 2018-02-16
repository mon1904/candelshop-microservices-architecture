<template>
<div>
  <h1>Your Candle is now added to the database</h1>
  <h2>hdjhsjkns</h2>
</div>
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

      }
    }
  }
</script>

<style>

  h1{
    font: 50px "Lucida Grande", Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    padding-bottom: 30px;
  }

  h2{
    font: 50px "Lucida Grande", Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    padding-bottom: 30px;
  }


</style>
