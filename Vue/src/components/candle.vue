<template>
  <div id="app">
    <div class="container"><h1>List of all the candles</h1>
      <div class="br">

      <ul class="media-list" v-if="candles && candles.length">
        <li class="media" v-for="candle in candles" track-by="id">
          <div class="media-left">
          <img class ="img" v-bind:src=candle.url>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Candle name: {{ candle.name}}</h4>
            <h4><i>Smell: {{ candle.smell}}</i></h4>
            <h3><i>Price: €{{ candle.price}}.00</i></h3>
              <button class="btn btn-default" v-on:click="addToCart(candle)" >Add to Cart</button>
          </div>
        </li>
      </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    props: ['items'],
    name: 'candle',
    data() {
      return {
        candles: []
      }
    },
    created() {
      axios.get('http://localhost:3000/getCandle')
        .then(response => {
          this.candles = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },

    methods: {
      addToCart(candle) {
        this.$emit('addCandle', candle)
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
    height:100%;
    background-color: #262626;
    margin: 0%;
  }

  .img{
    height: 250px;
    width: 250px;
    border-radius: 10%;

  }
  .media-body{
    padding-top:20px;
  }

  .media {
    border-top: 1px solid lightgray;
    padding-top: 20px;
    border-style: double;
    color: white;
    border-style: solid;
    border-color: #8c8b8b;
    border-width:2px 1px 0 0;
    border-radius: 20px;

  }
  .media-left{
    padding-left:30px;
  }


  p{
    font-size: 12px;
  }
  .btn-default {
    margin-top: 30px;
    color: #202129;
    background-color: #f2f2f2;
  }

  .btn-default:hover{
    margin-top: 30px;
    background-color: #808080;
    color: #f2f2f2;

  }
  h1{
    padding: 30px;
  }

</style>
