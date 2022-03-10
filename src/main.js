import { createApp } from 'vue'
import App from './App.vue'

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
window.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.setProperty('--main-color', getCookie("colour"));
    document.getElementById("app").style.fontFamily = getCookie("font");
    document.getElementById("app").style.fontSize = getCookie("fontsize")+"vh";


});
createApp(App).mount('#app')