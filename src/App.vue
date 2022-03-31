<template>

  <div className="card">


  </div>
  <div id="group"  >
    <section className="section" style="height: auto; border-radius: 5vh;">
      <button v-on:click="configComponents" >Config Components</button>
    </section>

    <div className="component card" style="height: auto; border-radius: 5vh;">
      <ConfigCard  :should-render="showData.showConfig" :showData="showData"
                  @translate="updateparent1"
                  @hello="updateparent2"
                  @settings="updateparent3"
                  @count="updateparent4"
                  @axios="updateparent5">



      </ConfigCard>
    </div>
    <div id="modules" class="gridFlex main-grid">
      <TranslateCard :should-render="showData.showTranslate" id="Translate" class="card"></TranslateCard>
      <HelloWorld :should-render="showData.showHelloWorld" class="card" id="helloWorld"></HelloWorld>
      <SettingsCard :should-render="showData.showSettings" class="card" > </SettingsCard>
      <CountCard :should-render="showData.showCount" class="card"> </CountCard>
      <AxiosTest :should-render="showData.showAxios" class="card"> </AxiosTest>



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
    ConfigCard,
  },
  props: ["edit", "value", "shouldRender"],
  data () {
    return {
      selected: '',
      showData: {
        showHelloWorld: Boolean(localStorage.getItem("hello")),
        showSettings: Boolean(localStorage.getItem("settings")),
        showTranslate: Boolean(localStorage.getItem("translate")),
        showCount: Boolean(localStorage.getItem("count")),
        showAxios: Boolean(localStorage.getItem("axios")),
        showConfig: Boolean(localStorage.getItem("config"))
      }
    }
  },
  methods: {
    configComponents(){
      this.showData.showConfig= !this.showData.showConfig;
      localStorage.setItem("config", (this.showData.showConfig).toString());
    },
    updateparent1(variable) {
      this.showData.showTranslate = variable;
      localStorage.setItem("translate", this.showData.showTranslate)
    },
    updateparent2(variable) {
      this.showData.showHelloWorld = variable;
      localStorage.setItem("hello", this.showData.showHelloWorld)
    },
    updateparent3(variable) {
      this.showData.showSettings = variable;
      localStorage.setItem("settings", this.showData.showSettings)
    },
    updateparent4(variable) {
      this.showData.showCount = variable;
      localStorage.setItem("count", this.showData.showCount)
    },
    updateparent5(variable) {
      this.showData.showAxios = variable;
      localStorage.setItem("axios", this.showData.showAxios)
    },
    updateparent6(variable) {
      this.showData.showConfig = variable;
      localStorage.setItem("config", this.showData.showConfig)
    },
    forceRerender() {

    }
  },
  mounted() {
    let check = (localStorage.getItem("hello"))//to boolean value
    if (check === "true") {
      this.showData.showHelloWorld = true;
    } else {
      this.showData.showHelloWorld = false;
    }
    check = (localStorage.getItem("settings"))//to boolean value
    if (check === "true") {
      this.showData.showSettings = true;
    } else {
      this.showData.showSettings = false;
    }
    check = (localStorage.getItem("translate"))//to boolean value
    if (check === "true") {
      this.showData.showTranslate = true;
    } else {
      this.showData.showTranslate = false;
    }
    check = (localStorage.getItem("count"))//to boolean value
    if (check === "true") {
      this.showData.showCount = true;
    } else {
      this.showData.showCount = false;
    }
    check = (localStorage.getItem("axios"))//to boolean value
    if (check === "true") {
      this.showData.showAxios = true;
    } else {
      this.showData.showAxios = false;
    }
    check = (localStorage.getItem("config"))//to boolean value
    if (check === "true") {
      this.showData.showConfig = true;
    } else {
      this.showData.showConfig = false;
    }


  },
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
  grid-template-columns: 6fr 6fr;
  grid-auto-rows: min-content;
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
  color: black;
  box-shadow: 0vh 0vh 1vh #050505;

}


.closeButton{
  position: absolute;
  bottom: 0;
  padding-right: 2vh;
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  color: red;
}

html{
  background: #040505;
  color: white;
}
</style>
