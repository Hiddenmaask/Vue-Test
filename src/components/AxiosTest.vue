<template>
  <div class="component">
    <section>
      <h1>Axios Test</h1>
    </section>
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
  },
  methods:{
  },
  mounted () {
    let url = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD";
    axios.get(url).then(response => (this.btc = response.data));
    url = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";
    axios.get(url).then(response => (this.eth = response.data));
    this.temp1 = Object.assign({}, this.btc);
    this.temp2 = Object.assign({}, this.eth);
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
        console.log(this.temp2);
        console.log(this.eth);
      }else{
        this.trendETH = "DOWN";
        console.log(this.temp2);
      }
    }, 10000)

  }
}
</script>

<style scoped>

</style>