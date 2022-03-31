<template>
  <div class="component" v-if="shouldRender" >
    <section>
      <h1>Config</h1>
    </section>
    <div class="gridFlex main-grid">
      <div>
        <input type="checkbox" id="translateCheck"  @click="check1" :checked="showData.showTranslate">
        <label for="translateCheck">Translate</label>
      </div>
      <div>
        <input type="checkbox" id="helloWorldCheck"  @click="check2" :checked="showData.showHelloWorld">
        <label for="helloWorldCheck">HP</label>
      </div>
      <div>
        <input type="checkbox" id="settingsCheck"  @click="check3" :checked="showData.showSettings">
        <label for="settingsCheck">Settings</label>
      </div>
      <div>
        <input type="checkbox" id="countCheck" style="align-content: start"  @click="check4" :checked="showData.showCount">
        <label for="countCheck">10 Counter</label>
      </div>
      <div>
        <input type="checkbox" id="axiosCheck"  @click="check5" :checked="showData.showAxios">
        <label for="axiosCheck">Axios Test</label>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "ConfigCard",
  props: ['shouldRender', 'showData'],
  data() {
    return {

    }
  },
  methods:{
    check1(){
      if(document.getElementById("translateCheck").checked){
        this.$emit('translate', true)
      }else{
        this.$emit('translate', false)
      }},
    check2(){
      if(document.getElementById("helloWorldCheck").checked){
        this.$emit('hello', true)
      }else{
        this.$emit('hello', false)
      }},
    check3(){
      if(document.getElementById("settingsCheck").checked){
        this.$emit('settings', true)
      }else{
        this.$emit('settings', false)
      }},
    check4(){
      if(document.getElementById("countCheck").checked){
        this.$emit('count', true)
      }else{
        this.$emit('count', false)
      }},
    check5(){
      if(document.getElementById("axiosCheck").checked){
        this.$emit('axios', true)
      }else{
        this.$emit('axios', false)
      }},
  },
  mounted() {


  },
}

</script>

<style scoped>

</style>