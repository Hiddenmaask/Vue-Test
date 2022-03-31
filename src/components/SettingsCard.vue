
<template>

  <div class="component" v-if="shouldRender">
    <section>
      <h1>Settings</h1>
    </section>
    <div style="padding: 1vh">

      <label style="padding-right:1vh" for="backColourSelect">Colour</label>
      <input id="backColourSelect" v-model="colour" placeholder="#??????" />
      <Transition name="slide-fade">
        <p v-if="message != ''">{{message}}</p>
      </Transition>

    </div>
    <div style="padding: 1vh">
      <label style="padding-right:1vh" for="fontSizeSelect">Font Size</label>
      <select id="fontSizeSelect" v-model="fontsize" onchange="">
        <option disabled value="">Please select one</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>


    </div>

    <div style="padding: 1vh">
      <label style="padding-right:1vh" for="fontFamilySelect">Font Face</label>
      <select id="fontFamilySelect" v-model="font" onchange="">
        <option disabled value="">Please select one</option>
        <option>Comic Sans MS</option>
        <option>Verdana</option>
        <option>Lucida Console</option>
      </select>
    </div>

    <div style="padding: 0.5vh">
      <button @click="clearCookies()" href="#">Clear Settings</button>
      <button @click="submitSettings()" href="#">Submit Settings</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "SettingsCard",
  el: '...',
  props: ['shouldRender', 'showData'],
  data() {
    return {

      colour: '',
      fontsize: '',
      font: '',
      message: ''

    }
  },
  methods: {

    submitSettings(){
      //only change settings which arent null
      if (this.colour != '' || this.fontsize != '' || this.font != '') {
        if (this.colour != '') {
          this.changeColour()
          this.setCookie("colour", this.colour, 30);
        }
        if (this.fontsize != '') {
          this.changeFontSize()
          this.setCookie("fontsize", this.fontsize, 30);
        }
        if (this.font != '') {
          this.changeFont()
          this.setCookie("font", this.font, 30);
        }

        this.message = ''

      } else {
        this.message = 'Please fill in a field'
      }

    },
    clearCookies() {
      this.colour = '';
      this.fontsize = '';
      this.font = '';
      //delete all cookies
      var cookies = document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      //refresh page
      window.location.reload();
    },
    setCookie(cname,cvalue,exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      console.log("cookie");
    },
    changeColour() {
      document.documentElement.style.setProperty('--main-color', this.colour);
    },
    changeFontSize(){
      document.getElementById("app").style.fontSize = this.fontsize+"vh";
    },

    changeFont(){
      document.getElementById("app").style.fontFamily = this.font;
    }

  }
}


</script>

<style scoped>

</style>