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
        r.style.setProperty('--scrollbar-thumb-boarder','solid 3px #e6e6e6')
        r.style.setProperty('--scrollbar-thumb-hover-background','black')
        r.style.setProperty('--bodytext','black')
        r.style.setProperty('--skillsBackground','#D3D3D3')
        this.isDark = false
      }
      else{
        r.style.setProperty('--scrollbar-track-background','#1f1b24')
        r.style.setProperty('--scrollbar-track-boarder-left','1px solid #2c2c2c')
        r.style.setProperty('--scrollbar-thumb-boarder','solid 3px #202020')
        r.style.setProperty('--scrollbar-thumb-hover-background','white')
        r.style.setProperty('--bodytext','white')
        r.style.setProperty('--skillsBackground','black')
        this.isDark = true
      }
    }
  },
}
</script>

<template>
  <div id="mainContainer">
    <v-sheet id="mainCard">
      <div style="margin-left:2.5vw">
        <v-switch @click="colorSwitch" :model-value="this.isDark" color="#bb86fc" style="max-width: 10vw;" prepend-icon="mdi-white-balance-sunny" append-icon="mdi-moon-waning-crescent"></v-switch>
      <font size="+2">Hello! My name is</font>
      <br>
      <font size="+4">Samuel Nicklaus</font><font color="#bb86fc" size="+4"><b>.</b></font>
      <br>
      <br>
      <br>
      <font size="+1">I am a Computer Science and Engineering major <br> from</font>
      <font size="+1"><a href="https://www.google.com/maps/place/Iowa+City,+IA/@41.647599,-91.5407446,13z/data=!3m1!4b1!4m6!3m5!1s0x87e441c16a208817:0x6d711867870582b0!8m2!3d41.6578257!4d-91.5346169!16zL20vMHQwMTU?entry=ttu" target="_blank" style="color:#bb86fc"><b> Iowa City, Iowa</b></a></font>
      <font size="+1"> who loves coding, hiking, & video games!</font>
      <br>
      <br>
      <font size="+1">I am currently a student at the University of Iowa with an expected graduation date of 2024</font>
      </div>
    </v-sheet>
    <v-sheet id="skillsCard">
        <div style="margin-left: 2.5vh;">

        </div>
    </v-sheet>
    
  </div>
</template>

<style>
/* Root variables that can be changed through JS */
:root{
  --scrollbar-track-background: #1f1b24;
  --scrollbar-track-boarder-left: 1px solid #2c2c2c;
  --scrollbar-thumb-background: #bb86fc;
  --scrollbar-thumb-boarder: solid 3px #202020;
  --scrollbar-thumb-hover-background: white;
  --header-text: white;
  --special-text: white;
  --subtext: white;
  --bodytext: white;
  --skillsBackground: black;
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

#mainCard{
  background-color: var(--scrollbar-track-background);
  min-height: 95vh;
  min-width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  color: var(--bodytext);
}
#skillsCard{
  background-color: var(--skillsBackground);
  min-height: 100vh;
  min-width: 100vw;
  left: 0;
  top: 95vh;
  color: var(--bodytext);
  position: absolute;
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
