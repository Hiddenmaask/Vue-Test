
<template>

  <div class="component">
    <section>
      <h1>Settings</h1>
    </section>
    <div style="padding: 2vh">
      <input v-model="colour" placeholder="#??????" />
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
      console.log(this.colour)
      document.documentElement.style.setProperty('--main-color', this.colour);
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