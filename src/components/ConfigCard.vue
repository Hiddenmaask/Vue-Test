<template>
  <div class="component" v-if="shouldRender">
    <section>
      <h1>Config</h1>
    </section>
    <input type="checkbox" id="helloWorldCheck"  @click="check" checked>
    <label for="helloWorld">Hello World</label>

  </div>
</template>

<script>


export default {
  name: "ConfigCard",
  props: ['shouldRender', 'showData'],
  data() {
    return {
      showHelloWorld: true,
    }
  },
  methods:{
    check(){
      if(document.getElementById("helloWorldCheck").checked){
        console.log(this.showData.showHelloWorld)
          this.$emit('eventname', true)

      }else{
        this.$emit('eventname', false)
      }



    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>