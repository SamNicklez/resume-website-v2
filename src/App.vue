<script>
export default {
  data() {
    return {
      isDark: true,
        }
  },
  created() {
    
  },
  methods: {
    /**
     * Swaps between dark mode and light mode
     */
    colorSwitch(){
      var r = document.querySelector(':root')
      if(this.isDark){
        r.style.setProperty('--scrollbar-track-background','#e6e6e6')
        r.style.setProperty('--scrollbar-track-boarder-left','1px solid #dadada')
        r.style.setProperty('--scrollbar-thumb-background','#b0b0b0')
        r.style.setProperty('--scrollbar-thumb-boarder','solid 3px #e6e6e6')
        r.style.setProperty('--scrollbar-thumb-hover-background','black')
        this.isDark = false
      }
      else{
        r.style.setProperty('--scrollbar-track-background','#202020')
        r.style.setProperty('--scrollbar-track-boarder-left','1px solid #2c2c2c')
        r.style.setProperty('--scrollbar-thumb-background','#3e3e3e')
        r.style.setProperty('--scrollbar-thumb-boarder','solid 3px #202020')
        r.style.setProperty('--scrollbar-thumb-hover-background','white')
        this.isDark = true
      }
    }
  },
}
</script>

<template>
  <div id="mainContainer">
    <v-btn @click="colorSwitch">
  Button
    </v-btn>
    Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello<br>Hello
  </div>
</template>

<style>
/* Root variables that can be changed through JS */
:root{
  --scrollbar-track-background: #202020;
  --scrollbar-track-boarder-left: 1px solid #2c2c2c;
  --scrollbar-thumb-background: #3e3e3e;
  --scrollbar-thumb-boarder: solid 3px #202020;
  --scrollbar-thumb-hover-background: white;
  --header-text: white;
  --special-text: white;
  --subtext: white;
}

/* Fade in animation on loading of webpage */
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* Imports default font type for webpage */
@font-face {
  font-style: normal;
  font-display: auto;
  font-family: "Exo";
  src: url('/resources/Exo-VariableFont_wght.ttf');
}

/* Main div ID */
#mainContainer {
  font-family: 'Exo';
}

/* Sets scrollbar width */
::-webkit-scrollbar {
  width: 15px;
}

/* Sets scrollbar background and boarder */
::-webkit-scrollbar-track {
  background: var(--scrollbar-track-background);
  border-left: var(--scrollbar-track-boarder-left);
}

/* Sets scrollbar thumb background and boarder */
::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb-background);
  border: var(--scrollbar-thumb-boarder);
  border-radius: 7px;
}

/* Sets scrollbar hover color */
::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover-background);
}
</style>
