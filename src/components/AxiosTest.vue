<template>
  <div class="component" v-if="shouldRender">
    <section class="section">
      <div class="bg-image" id="bgImage"></div>
      <div class="bg-text">
        <h1>Axios Test</h1>
      </div>
    </section>
    <button @click="changeBackground()" href="#">Change Background</button>
    <h2 id="BTC">1 Bitcoin: {{btc}} | {{trendBTC}}</h2>
    <h2 id="ETH">1 Ethereum: {{eth}} | {{trendETH}}</h2>
    <button @click="testBackground()" href="#">Test Background</button>

  </div>
</template>

<script>
// Send a GET request (default method)

import axios from "axios";

export default {
  data() {
    return {
      btc: '',
      eth: '',
      trendBTC: '',
      trendETH: '',
      temp1: '',
      temp2: '',
    }
  },props: ['shouldRender'],
  methods:{
    changeBackground(){


      var axios = require("axios").default;

      var options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {q: 'bitcoin png', pageNumber: '1', pageSize: '30', autoCorrect: 'true'},
        headers: {
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
          'x-rapidapi-key': '436801be5amshac1799745813e84p14a2b8jsn827e3d46a769'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        var random = Math.floor(Math.random() * 30);

        document.getElementById("bgImage").style.backgroundImage = "url("+response.data.value[random].url+"";
      }).catch(function (error) {
        console.error(error);
        this.changeBackground()
      });



    },
    testBackground() {
      var bgImage = document.getElementById("bgImage").style.backgroundImage;
      document.getElementById("bgImage").style.backgroundImage = "url(https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)";
      setTimeout(function(){
        document.getElementById("bgImage").style.backgroundImage = bgImage;
      }, 5000);


    }
  },
  mounted () {
    let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
    axios.get(url).then(response => (this.btc = response.data));
    this.temp1 = axios.get(url);
    url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
    axios.get(url).then(response => (this.eth = response.data));
    this.temp2 = axios.get(url);
    window.setInterval(() => {
      let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
      axios.get(url).then(response => (this.btc = response.data));

      url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
      axios.get(url).then(response => (this.eth = response.data));
      if (this.temp1 <= this.btc){
        this.trendBTC = "UP";
      }else{
        this.trendBTC = "DOWN";
      }
      if (this.temp2 <= this.eth){
        this.trendETH = "UP";
      }else{
        this.trendETH = "DOWN";
      }
      this.temp1=this.btc;
      console.log(this.temp2);
      this.temp2=this.eth;
      console.log(this.temp2)
    }, 10000)

  }
}
</script>

<style scoped>
.bg-image{
  /* The image used */
  background-image: var(--crypto-back);

  /* Add the blur effect */
  /*
  filter: blur(8px);
  -webkit-filter: blur(8px);

   */

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-text{
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  text-align: center;
}
</style>