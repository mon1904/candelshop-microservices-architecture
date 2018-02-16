<template>
  <div id="app">
    <div class="container">
      <h1 class="name">Search by smell</h1>
      <input class="input-box" type="text" v-model="search" placeholder="Search by smell" />
      <ul class="list-group " v-if="candles && candles.length">
        <li class="list-group-item list-group-item-action"v-for="candle in filteredCandle">
          <div class="media-body">
            <h4 class="media-heading">Candle name:{{candle.name}}</h4>
            <h4><i>Smell: {{candle.smell}}</i></h4>
            <button class="btn btn-default" @click="deleteItem(filteredCandle)" >Delete Candle</button>
          </div>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: 'deleteItem',
    data() {
      return {
        candles: [],
        search: ''
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
    computed: {
      filteredCandle: function () {
        return this.candles.filter((x) => {
          return x.smell.toLowerCase().includes(this.search.toLowerCase())
        });
      }
    },
    methods:{
      deleteItem(){
        axios.delete('http://localhost:3000/deleteCandle')

      }
    },
//    created () {
//      if(window.user) {
//        if(window.user.role !== 'admin') {
//          this.$router.push('/')
//        }
//      } else {
//        this.$router.push('/')
//      }
//    }
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
  }


  .list-group{
    color: black;
    padding: 10px;
    position: inherit;
    border-radius: 20px;

  }

  .list-group-item{
    list-style-type: none;
    padding: 15px;
  }

  .input-box {
    padding: 5px;
    margin-bottom: 10px;
    width: 200px;
    border-width:2px 1px 1px 1px;
    border-radius: 5px;
    background-color: #262626;
  }

  .name{
    display:inline-block;
    font: 18px "Lucida Grande", Helvetica, Arial, sans-serif;
    position: inherit;
    padding-bottom: 10px;
  }

  .btn-default {
    margin-top: 30px;
    width:180px;
    color: #202129;
    background-color:  #f2f2f2;
    border:solid 1px;
    border-color: darkgray;
  }
</style>


