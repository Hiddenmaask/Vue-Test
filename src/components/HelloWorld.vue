<template>
  <div class="component" v-if="shouldRender">
    <section>
      <h1>Clickables</h1>
    </section>
    <h2 @click="hpCalc()" id="health">{{hp}}/100</h2>
    <h1 @click="resize()" id="helloText">{{ message }}</h1>

  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!',
      hp : 100,
      dead : false,
    }
  }, props: ['shouldRender'],
  methods:{
    resize(){
      var el = document.getElementById('helloText');
      var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
      var fontSize = parseFloat(style);
      // now you have a proper float for the font size (yes, it can be a float, not just an integer)
      el.style.fontSize = (fontSize - 3) + 'px';
    },
    hpCalc(){
      if (this.dead == false){
        this.hp -=10;
      }

      if (this.hp == 0){
        document.getElementById("health").innerHTML = "Dead";
        this.dead = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
