// template -> action submits, on callback put user onto window object and go to home page

<template>
  <div>
  <h1>Log In</h1>

  <form class="well form-horizontal" action="#" method="post"  id="login_form">
    <fieldset>

      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-4 control-label">Username</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input  name="name" v-model="username" placeholder="Name" class="form-control"  type="text">
          </div>
        </div>
      </div>


      <!-- Text input-->

      <div class="form-group">
        <label class="col-md-4 control-label" >Password</label>
        <div class="col-md-4 inputGroupContainer">
          <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>
            <input name="address" v-model="password" placeholder="Password" class="form-control"  type="password" required>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="form-group">
        <label class="col-md-4 control-label"></label>
        <div class="col-md-4">
          <button type="submit" v-on:click.prevent="login" class="btn btn-default" >Login <span class="glyphicon glyphicon-send"></span></button>
          <!--<router-link to="/success">Sort by artist</router-link>-->
        </div>
      </div>
    </fieldset>
  </form>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    props: [],
    data() {
      return {
      username: '',
        password: ''
    }
    },
    methods: {
      login() {
        var user = {
          "username": this.username,
          "password": this.password
        }
        var that = this;
        axios({
          url: 'http://localhost:3001/login',
          method: 'post',
          contentType: 'application/json',
          data: user
        })
          .then(function(response) {
            console.log(response);
            window.user = response.data;

            if(window.user.role === 'admin') {
              console.log("here");
              that.$router.push('candle')
            } else {
              that.$router.push('addmore')
            }

          })
          .catch(e => {
            console.error(e);
          })
      }
    }
  }
</script>

<style>


  .control-label{

  color: #262626;
  }
</style>
