<template>
  <div class="component" v-if="shouldRender">
    <section class="section">
      <div class="bg-image"></div>
      <div class="bg-text">
        <h1>Axios Test</h1>
      </div>
    </section>
    <button @click="changeBackground()" href="#">Change Background</button>
    <h2 id="BTC">1 Bitcoin: {{btc}} | {{trendBTC}}</h2>
    <h2 id="ETH">1 Ethereum: {{eth}} | {{trendETH}}</h2>

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

      /*
      var axios = require("axios").default;

      var options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI',
        params: {q: 'bitcoin png', pageNumber: '1', pageSize: '1', autoCorrect: 'true'},
        headers: {
          'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
          'x-rapidapi-key': '436801be5amshac1799745813e84p14a2b8jsn827e3d46a769'
        }
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });

       */

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

</style>