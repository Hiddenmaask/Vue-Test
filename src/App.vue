<template>
  <div id="main-grid">

    <div id="type">
      <NumPrint class="card">

      </NumPrint>
    </div>
    <div id="helloWorld">
      <HelloWorld class="card"></HelloWorld>
    </div>
    <div id="settingsCard">
      <SettingsCard class="card">
      </SettingsCard>

    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NumPrint from "@/components/NumPrint";
import SettingsCard from "@/components/SettingsCard";

export default {
  name: 'App',
  components: {
    SettingsCard,
    HelloWorld,
    NumPrint,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 2em 1em 2em;
  border-radius: 2vh;
  box-shadow: 0vh 0vh 3vh #828282;
}
#main-grid {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 45em 1fr;
  grid-auto-rows: 1fr;
}
#type {
  display: flex;
  flex-direction: column;
  flex-align: flex-start;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 1em;
}

#helloWorld {
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
  filter: drop-shadow(0 0 0.75rem #252525);

}

textwrap{
  word-wrap: break-word;
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
</style>
