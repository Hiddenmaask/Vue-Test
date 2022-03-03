
<template>

  <div class="textwrap">

    <p id="settingsText">Settings</p>
    <div style="padding: 2vh">
      <input v-model="colour" placeholder="Colour" />
      <button @click="changeColour()" href="#">Change Colour</button>
      <Transition name="slide-fade">
        <p v-if="message != ''">Boo!</p>
      </Transition>
    </div>
    <div style="padding: 2vh">
      <select id="fontSizeSelect" v-model="fontsize" onchange="">
        <option disabled value="">Please select one</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <button @click="changeFontSize()" href='#'>Change Font Size</button>
    </div>

    <div style="padding: 2vh">
      <select id="fontFamilySelect" v-model="font" onchange="">
        <option disabled value="">Please select one</option>
        <option>Comic Sans MS</option>
        <option>Verdana</option>
        <option>Lucida Console</option>
      </select>
      <button @click="changeFont()" href='#'>Change Font</button>
    </div>

    <p style="color: red">{{ message }}</p>

  </div>


</template>

<script>
export default {
  name: "SettingsCard",
  el: '...',
  data() {
    return {
      colour: '',
      fontsize: '',
      font: '',
      message: ''

    }
  },
  methods: {


    changeColour() {
      this.message = "";
      let current = document.getElementById("app").style.backgroundColor
      console.log("try reached")
      console.log(this.colour)
      document.getElementById("app").style.backgroundColor = this.colour;
      if (document.getElementById("app").style.backgroundColor == current) {
        console.log("catch reached")
        this.message = "Error, Invalid Input";
      }
    },
    changeFontSize(){
      console.log("Font Confirm")
      console.log(this.fontsize)
      document.getElementById("app").style.fontSize = this.fontsize+"vh";
    },

    changeFont(){
      console.log("Font Confirm")
      console.log(this.font)
      document.getElementById("app").style.fontFamily = this.font;
    }

  }
}


</script>

<style scoped>

</style>