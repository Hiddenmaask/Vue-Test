<template>

  <div class="component" v-if="shouldRender">

    <div id="counter">
      <section>
        <h1>10 Counter</h1>
      </section>
      <p>Message is: {{ count }}</p>
      <button @click="increaseCount()" href="#">Add</button>
      <Transition name="bounce">
        <p v-if="(count % 10 == 0)&&(count>0)">10!</p>
        <p v-else>Not 10 :(</p>
      </Transition>

    </div>
    <button class="closeButton" @click='elementHide'> X </button>

  </div>
</template>

<script>



export default {
  name: "CountCard",
  data() {
    return {
      count: 0,
      toggle: true,
    }
  },props: ['shouldRender'],
  methods: {
    increaseCount() {
      this.count += 1;
      if (this.count > 10){
        this.count = 0;
      }
    },
    elementHide(){
      try {

        this.$el.remove(document.getElementById("count"))
      }catch (e){
        this.$el.parentNode.appendChild(this.$el)
      }

    }

  }
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>