<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Add Candle to shop</h1>
        <div class="container">

          <form class="well form-horizontal" action="some" method="post"  id="contact_form">
            <fieldset>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label">Name Of Candle</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-heart"></i></span>
                    <input  name="name" v-model="name" placeholder="Candle Name" class="form-control"  type="text" required>
                  </div>
                </div>
              </div>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Smell</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-star"></i></span>
                    <input name="smell" v-model="smell" placeholder="Smell" class="form-control"  type="text">
                  </div>
                </div>
              </div>
              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Color</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-pencil"></i></span>
                    <input name="color" v-model="color"  placeholder="Color" class="form-control"  type="text">
                  </div>
                </div>
              </div>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Price</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-euro"></i></span>
                    <input name="price" v-model="price" placeholder="Price" class="form-control"  type="text">
                  </div>
                </div>
              </div>

              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >URL</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-globe"></i></span>
                    <input name="url" v-model="url" placeholder="URL to image" class="form-control"  type="text">
                  </div>
                </div>
              </div>
              <!-- Text input-->

              <div class="form-group">
                <label class="col-md-4 control-label" >Quantity</label>
                <div class="col-md-4 inputGroupContainer">
                  <div class="input-group">
                    <span class="input-group-addon"><i class="glyphicon glyphicon-asterisk"></i></span>
                    <input name="quantity" v-model="quantity" placeholder="Quantity" class="form-control"  type="text">
                  </div>
                </div>
              </div>

              <!-- Button -->
              <div class="form-group">
                <label class="col-md-4 control-label"></label>
                <div class="col-md-4">
                  <button type="submit" v-on:click.prevent="addCandle" class="btn btn-default" >Add More Candles <span class="glyphicon glyphicon-send"></span></button>
                  <!--<router-link to="/success">Sort by artist</router-link>-->
                </div>
              </div>

            </fieldset>
          </form>
        </div>
      </div><!-- /.container -->
      </div>
    </div>

</template>

<script>

  import axios from "axios";

  export default {
    data () {
      return {
        name:'',
        smell: '',
        color: '',
        price:'',
        url: '',
        quantity: ''
      }
    },


    methods: {
      addCandle () {

        var newCandleArray = {
          "name": this.name,
          "smell": this.smell,
          "color": this.color,
          "price": this.price,
          "url": this.url,
          "quantity": this.quantity
        }
        axios({
          url: 'http://localhost:3000/addCandle',
          method: 'post',
          contentType: 'application/json',
          data: newCandleArray
          })
        this.$router.push('/success')

        console.log(newCandleArray)
      }
    },
    created () {
      if(window.user) {
        if(window.user.role !== 'admin') {
          this.$router.push('/')
        }
      } else {
        this.$router.push('/')
      }
    }
  }

</script>

<style>

  .container{
    width: 80%;
  }
  .col-md-4{
    color:#262626;
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
