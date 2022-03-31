
<template>
  <div class="component" v-if="shouldRender">
    <section>
      <h1>Upper/Lower Case</h1>
    </section>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="text" />
    <button @click="translate()" href="#">Translate</button>
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  },props: ['shouldRender'],
  methods:{
    translate(){
      if (this.message == this.message.toUpperCase()){
        this.message = this.message.toLowerCase();
      }
      else{
        this.message = this.message.toUpperCase();
      }
    },
  }
}

</script>

<style scoped>
.num {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items:  center;
}
.tab { margin-left: 40px; }
</style>