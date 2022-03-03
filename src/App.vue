<template>
  <div id="main-grid" class="gridFlex">

    <div id="translate">
      <TranslateCard class="card">
      </TranslateCard>
    </div>
    <div id="helloWorld">
      <HelloWorld class="card"></HelloWorld>
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

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TranslateCard from "@/components/TranslateCard";
import SettingsCard from "@/components/SettingsCard";
import CountCard from "@/components/CountCard";
import AxiosTest from "@/components/AxiosTest";

export default {
  name: 'App',
  components: {
    SettingsCard,
    HelloWorld,
    TranslateCard,
    CountCard,
    AxiosTest
  }
}
</script>

<style>
:root {
  --main-color:#fff;
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
#main-grid {
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
  border-radius: 1vh;
  filter: drop-shadow(0vh 0 0.5rem #252525);

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
  background: rgba(255, 0, 0,20%);
  box-shadow: 0vh 0vh 0.5vh #050505;
  border-radius: 1vh;
}

html{
  background: #040505;
}
</style>
