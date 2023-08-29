<script>
export default {
  data() {
    return {
      isDark: true,
      languages: [{ name: 'C#' }, { name: 'Python' }, { name: 'C++' }, { name: 'Java' }, { name: 'SQL' }, { name: 'JavaScript' }, { name: 'Haskell' }, { name: 'Verilog' }, { name: 'C' }, { name: 'Assembly' }, { name: 'Ruby' }],
      frameworks:[{name:'Vue.js'},{name:'HTML'},{name:'CSS'},{name:'Node.js'},{name:'Linux'},{name:'Github'},{name:'LaTex'},{name:'.NET'},{name:'Subversion'}],
      devTools: [{name:'Visual Studio Tools for Office'},{name:'Microsoft Visual Studio'},{name:'VSCode'},{name:'Jetbrains Products'},{name:'Microsoft O365 Suite'},{name:'SPICE Software'},{name:'Microsoft SQL Server Management Studio'},{name:'Google Cloud Platform'}],
    }
  },
  created() {

  },
  mounted() {
    //postscribe('#linkedin', '<script src="https://platform.linkedin.com/badges/js/profile.js"><\/script>')
    window.addEventListener("scroll", this.reveal);
  },
  methods: {
    /**
     * Swaps between dark mode and light mode
     */
    colorSwitch() {
      var r = document.querySelector(':root')
      if (this.isDark) {
        r.style.setProperty('--scrollbar-track-background', '#e6e6e6')
        r.style.setProperty('--scrollbar-track-boarder-left', '1px solid #dadada')
        r.style.setProperty('--scrollbar-thumb-boarder', 'solid 3px #e6e6e6')
        r.style.setProperty('--scrollbar-thumb-hover-background', 'black')
        r.style.setProperty('--bodytext', 'black')
        r.style.setProperty('--skillsBackground', '#D3D3D3')
        this.isDark = false
        //postscribe('#linkedin', '<script src="https://platform.linkedin.com/badges/js/profile.js"><\/script>')
      }
      else {
        r.style.setProperty('--scrollbar-track-background', '#1f1b24')
        r.style.setProperty('--scrollbar-track-boarder-left', '1px solid #2c2c2c')
        r.style.setProperty('--scrollbar-thumb-boarder', 'solid 3px #202020')
        r.style.setProperty('--scrollbar-thumb-hover-background', 'white')
        r.style.setProperty('--bodytext', 'white')
        r.style.setProperty('--skillsBackground', 'black')
        this.isDark = true
        //postscribe('#linkedin', '<script src="https://platform.linkedin.com/badges/js/profile.js"><\/script>')
      }
    },
    /**
     * checks if the user is using a mobile device or not
     */
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    reveal() {
      var reveals = document.querySelectorAll(".reveal");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
  },
}
</script>

<template>
  <div v-if="!isMobile()">
    <div id="mainContainer">
      <v-sheet id="mainCard">
        <div style="margin-left: 2.5vh;">
          <img src="\Me.jpg" alt="" :width="400" aspect-ratio="1/1" cover style="border-radius: 50%;   float: right;
  margin-right: 10vw;
  margin-top: 15vh;">
          <!-- This code is for the linkedin javascript badge
            <div v-if="this.isDark">
            <div class="badge-base LI-profile-badge" id="linkedin" data-locale="en_US" data-size="large" data-theme="dark"
              data-type="HORIZONTAL" data-vanity="sam-nicklaus" data-version="v1"><a
                class="badge-base__link LI-simple-link" id="linkedin"
                href="https://www.linkedin.com/in/sam-nicklaus?trk=profile-badge"></a></div>
          </div>
          <div v-if="!this.isDark">
            <div class="badge-base LI-profile-badge" id="linkedin" data-locale="en_US" data-size="large"
              data-theme="light" data-type="HORIZONTAL" data-vanity="sam-nicklaus" data-version="v1"><a
                class="badge-base__link LI-simple-link" id="linkedin"
                href="https://www.linkedin.com/in/sam-nicklaus?trk=profile-badge"></a></div>
          </div> -->
        </div>
        <div style="margin-left:2.5vw">
          <div style="float:left;">
            <v-switch @click="colorSwitch" :model-value="this.isDark" color="#bb86fc"
              prepend-icon="mdi-white-balance-sunny" append-icon="mdi-moon-waning-crescent"></v-switch>
          </div>
          <br>
          <br>
          <br>
          <br>
          <font size="+2">Hello! My name is</font>
          <br>
          <font size="+4">Samuel Nicklaus</font>
          <font color="#bb86fc" size="+4"><b>.</b></font>
          <br>
          <br>
          <br>
          <font size="+1">I am a Computer Science and Engineering major <br> from</font>
          <font size="+1"><a
              href="https://www.google.com/maps/place/Iowa+City,+IA/@41.647599,-91.5407446,13z/data=!3m1!4b1!4m6!3m5!1s0x87e441c16a208817:0x6d711867870582b0!8m2!3d41.6578257!4d-91.5346169!16zL20vMHQwMTU?entry=ttu"
              target="_blank" style="color:#bb86fc"><b> Iowa City, Iowa</b></a></font>
          <font size="+1"> who loves coding, hiking, & video games!</font>
          <br>
          <br>
          <font size="+1">I am currently a student at the <font size="+1"><a href="https://engineering.uiowa.edu/"
                target="_blank" style="color:#bb86fc"><b> University of Iowa</b></a></font> seeking<br> a full time
            position related to digital technology,<br> software engineering, or project management for May/June 2024.
          </font>
          <br>
          <br>
          <font size="+1">You can find my resume <a href="SamuelNicklausResume.pdf" target="_blank"
              style="color:#bb86fc"><b> here!</b></a></font>
        </div>
      </v-sheet>
      <v-sheet id="skillsCard">
        <div style="margin-left: 2.5vw;">
          <div style="margin-top: 2.5vh;">
            <font size="+6" style="color:#bb86fc;"><b>>> Skills</b></font>
            <br>
            <font>What I'm good at</font>
            <br>
            <br>
            <div style="margin-left: 10vw; margin-right:33.33vw;" class="reveal">
              <font size="+2" style="color:#bb86fc;"><b>>> Languages:</b></font>
              <br>
              <v-chip v-for="item in this.languages" size="x-large" color="#bb86fc"
                style="margin-right: 1.5vw; margin-top: 2vh;">
                <b>{{ item.name }}</b>
              </v-chip>
            </div>
            <div style="margin-left: 10vw; margin-right:33.33vw; margin-top: 5vh;" class="reveal">
              <font size="+2" style="color:#bb86fc;"><b>>> Technologies and Frameworks:</b></font>
              <br>
              <v-chip v-for="item in this.frameworks" size="x-large" color="#bb86fc"
                style="margin-right: 1.5vw; margin-top: 2vh;">
                <b>{{ item.name }}</b>
              </v-chip>
            </div>
            <div style="margin-left: 10vw; margin-right:33.33vw; margin-top: 5vh;" class="reveal">
              <font size="+2" style="color:#bb86fc;"><b>>> Developer Tools:</b></font>
              <br>
              <v-chip v-for="item in this.devTools" size="x-large" color="#bb86fc"
                style="margin-right: 1.5vw; margin-top: 2vh;">
                <b>{{ item.name }}</b>
              </v-chip>
            </div>
          </div>
        </div>
      </v-sheet>

    </div>
  </div>
  <div v-else>
    Mobile Sucks LOL
  </div>
</template>

<style>
/* reveal class fades in information on scroll */
.reveal {
  position: relative;
  transform: translateY(200px);
  opacity: 0;
  transition: 2s all ease;
}
/* reveal class that makes div visible */
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}

/* Root variables that can be changed through JS */
:root {
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

/* CSS for linkedin javascript plugins */
#linkedin {
  float: right;
  margin-right: 8vw;
  margin-top: 8vh;
}

/* Div for first card */
#mainCard {
  background-color: var(--scrollbar-track-background);
  min-height: 95vh;
  min-width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  color: var(--bodytext);
}

/* Div for second card below main div */
#skillsCard {
  background-color: var(--skillsBackground);
  min-height: 150vh;
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
