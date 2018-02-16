<template>
  <div id="app">
    <div class="container">

      <h1 class="name">Checkout items</h1>
      <div class="container-2">
        <ol class="list-group " v-if="items && items.length">
          <li class="list-group-item list-group-item-action" v-for="item in items" transition="fade">
            <div class="media-left2">
              <img class ="img2" v-bind:src=item.url>
            </div>
            <h4><strong>{{ item.name }} - €{{ item.price }}.00</strong></h4>
          <button class="btn btn-default" v-on:click="deleteFromCartCandle()" >Remove from cart</button>
          </li>
        </ol>


        <h2>Billing Information</h2>
        <form class="well form-horizontal" action="#" method="post"  id="order_form">
          <fieldset>

            <!-- Text input-->

            <div class="form-group">
              <label class="col-md-4 control-label">Name</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                  <input  name="name" v-model="name" placeholder="Name" class="form-control"  type="text">
                </div>
              </div>
            </div>


            <!-- Text input-->

            <div class="form-group">
              <label class="col-md-4 control-label" >Address</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
                  <input name="address" v-model="address" placeholder="Address" class="form-control"  type="text" required>
                </div>
              </div>
            </div>

            <!-- Text input-->

            <div class="form-group">
              <label class="col-md-4 control-label" >Card Number</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-credit-card"></i></span>
                  <input name="cardnumber" v-model="cardnumber" placeholder="card Number" class="form-control"  type="text" required>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" >CVC</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-credit-card"></i></span>
                  <input name="cvc" v-model="cvc" placeholder="cvc" class="form-control"  type="number" required>
                </div>
              </div>
            </div>

            <div class="form-group">
              <label class="col-md-4 control-label" >Expiry Date</label>
              <div class="col-md-4 inputGroupContainer">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
                  <input name="edate" v-model="edate" placeholder="edate" class="form-control"  type="month" required>
                </div>
              </div>
            </div>
            <!-- Button -->
            <div class="form-group">
              <label class="col-md-4 control-label"></label>
              <div class="col-md-4">
                <button type="submit" v-on:click.prevent="addOrder" class="btn btn-default" >Pay <span class="glyphicon glyphicon-send"></span></button>
                <!--<router-link to="/success">Sort by artist</router-link>-->
              </div>
            </div>
          </fieldset>
        </form>
      </div>

      </div>
    </div>
</template>



<script>
  import candle from './candle';
  import axios from "axios";

  export default {
    props: ['items'],
    data() {
      return {
        cart: [],
        order:[],
          name:'',
          address: '',
          cardnumber: '',
          cvc:'',
          edate: '',
      }
    },

    methods: {
      deleteFromCartCandle(candle) {
        if(cart ==null){

        }
        else{
          this.$emit('deleteFromCartCandle', candle)
        }

      }
    },

    addOrder() {
      var newOrder = {
        "name": this.name,
        "address": this.address,
        "cardnumber": this.cardnumber,
        "cvc": this.cvc,
        "edate": this.edate
      }
      axios({
        url: 'http://localhost:5000/addOrder',
        method: 'post',
        contentType: 'application/json',
        data: newOrder
      })
        .catch(e => {
          console.error(e);
        })
      console.log(newOrder)
//        this.$router.push('success')
    },
  }

</script>



<style>

  .list-group-item{
    color:black;
    /*-webkit-column-count: 2;*/
    /*-moz-column-count: 2;*/
    /*column-count: 2;*/

  }

  ol li {
    margin: 0 10px;
    padding: 0 10px;
  }

  .media-left2{
    width: 40px;
    height: 40px;
  }

  img2{
    width: 30px;
    height: 30px;
  }


  td, tr{
    margin-right:490px;
  }
  .col-md-4{
    color:#262626;
  }
  .container{
    width: 80%;
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
