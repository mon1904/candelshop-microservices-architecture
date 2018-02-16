<template>

  <div class="body">
    <h1>{{ msg }}</h1>
  <div class="media-object">
    <image-slider>
      <div v-for="number in [currentNumber]">
        <img class="sld" :src="imagesList[Math.abs(currentNumber) % imagesList.length]"
             v-on:mouseover="stopRotation"
             v-on:mouseout="startRotation"
        />
      </div>
      <p>
        <a @click="prev">Previous</a> || <a @click="next">Next</a>
      </p>
    </image-slider>
</div>
  </div>
</template>

<script>
export default {

  name: 'Hello',
  data () {
    return {
      imagesList: ['http://www.theperfumegirl.com/perfumes/home-fragrances/yankee-candle/man-candles-2/images/man-candles-yankee-candle.jpg', 'https://www.rockymountainsavings.com/wp-content/uploads/2014/10/Yankee-Candle-Black-Friday-Sale.png', 'https://i.ytimg.com/vi/nOKQr2hG5ag/maxresdefault.jpg'],
      currentNumber: 0,
      timer: null,
      msg: 'Welcome to my Candle Shop'
    }
  },
  methods: {

    startRotation: function () {
      this.timer = setInterval(this.next, 2000);
    },

    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .body {
    font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height:100%;
    color: #262626;
    padding-top: 50px;
    margin: 0px;
    position: inherit;
  }

  .sld{
    height: 300px;
    width: 600px;

  }

  h1{
    font: 50px "Lucida Grande", Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    padding-bottom: 30px;
  }

  p{
    padding-top: 20px;
  }

</style>
