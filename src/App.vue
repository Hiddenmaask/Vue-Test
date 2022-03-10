<template>
  <div className="card">
    <div className="component">
      <section className="section">
        <button v-on:click="configComponents">Config Components</button>
      </section>
    </div>
  </div>
  <div id="group">
    <div id="modules" class="gridFlex main-grid">

      <div id="translate">
        <TranslateCard class="card">
        </TranslateCard>
      </div>
      <div id="helloWorld">
        <HelloWorld :should-render="showData.showHelloWorld" class="card"></HelloWorld>
      </div>
      <div id="settingsCard">
        <SettingsCard class="card">
        </SettingsCard>

      </div>
      <div id="countCard">
        <CountCard class="card"> </CountCard>
      </div>
      <div id="axiosTest">
        <AxiosTest class="card"> </AxiosTest>
      </div>
      <div id="Config" >
        <ConfigCard :should-render="showData.showConfig" :showData="showData" class="card"  @eventname="updateparent"></ConfigCard>
      </div>


    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TranslateCard from "@/components/TranslateCard";
import SettingsCard from "@/components/SettingsCard";
import CountCard from "@/components/CountCard";
import AxiosTest from "@/components/AxiosTest";
import ConfigCard from "@/components/ConfigCard";

export default {
  name: 'App',
  components: {
    SettingsCard,
    HelloWorld,
    TranslateCard,
    CountCard,
    AxiosTest,
    ConfigCard
  },
  data () {
    return {
      showData:{
        showHelloWorld: true,
        showConfig: false,
      }
    }
  },
  methods: {
    configComponents(){
      this.showData.showConfig= !this.showData.showConfig;
    },
    toggleHelloWorld () {
      this.showData.showHelloWorld = !this.showData.showHelloWorld;
    },
    updateparent(variable) {
      this.showData.showHelloWorld = variable;
    }
  }
}
</script>

<style>
:root {
  --main-color:#ad55ff;
  --crypto-back:url("https://robbreport.com/wp-content/uploads/2021/05/Bitcoin1.jpg?w=100");
}

#app {
  background: var(--main-color);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 2em 1em 2em;
  border-radius: 2vh;
  box-shadow: 0vh 0vh 3vh #828282;
  word-wrap: break-word;
}
.main-grid {
  display: grid;
  grid-gap: 1fr;
  grid-template-columns: 8fr 8fr;
  grid-auto-rows: 8fr;
}
#type {
  display: flex;
  flex-direction: column;
  flex-align: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1em;
}

gridFlex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-align: flex-start;
  align-content: flex-start;
  justify-content: center;
  padding: 1em;
}

.card{
  background-color: rgba(62, 75, 86, 70);
  margin: 1vh 1vh 2vh 1vh;
  border: 1vh #040505;
  filter: drop-shadow(1vh 1vh 0.5rem #252525);
}



/* Animations
 */

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

section{
  height: 10vh;
  background: var(--main-color);
  box-shadow: 0vh 0vh 1vh #050505;

}

.bg-image{
  /* The image used */
  background-image: var(--crypto-back);

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

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

html{
  background: #040505;
}
</style>
