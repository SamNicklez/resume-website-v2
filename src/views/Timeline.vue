<script>
export default {
  data() {
    return {
      isDark: true,
      events: [{icon: '', title: 'Carousel Motors', date: 'Spring 2020-Spring 2022', description: 'Part time job at a local car dealership, worked summers and part time during school year.', innerDesc: '<i>Responsibilities:</i><br><br><ul><li>Supported the new and used car department in everyday activities</li><li>Maintained an organized car lot consisting of over 300 vehicles</li><li>Continually inspected cars and made sure they met factory certified or certified pre-owned standards</li><li>Effectively handled vehicle trades between different dealerships across multiple states</li><li>Effectively handled vehicle trades between different dealerships across multiple states</li></ul>'},{icon: '', title: 'Kirkwood Community College', date: 'Fall 2019-Summer 2022', description: 'Classes taken throug a local community college during high school and summers of college.', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>COMPOSITION I</li><li>COMPOSITION II</li><li>FUNDEMENTALS OF ORAL COMMUNICATION</li><li>GENERAL CHEMISTRY I</li><li>CLASSICAL PHYSICS II</li></ul>'},{icon: '', title: 'Univeristy of Iowa', date: 'Fall 2020', description: 'Coursework for Fall 2020 at the University of Iowa', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>ENGR:1300 Introduction to Engineering Computing</li><li>MATH:1550 Engineer Math I Single Variable Calculus</li><li>CSI:1600 Success at Iowa</li><li>PHYS:1611 Introductory Physics I</li><li>ENGR:1000 Engineering Success for First-Year Students</li></ul>'},{icon: '', title: 'Univeristy of Iowa', date: 'Spring 2021', description: 'Coursework for Spring 2021 at the University of Iowa', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>MATH:1560 Engineer Math II: Multivariable Calculus</li><li>COMM:1170 Communication Theory in Everyday Life</li><li>CS:1210 Computer Science I: Fundamentals</li><li>PHYS:1611 Introductory Physics I</li><li>MATH:2550 Engineering Math III: Matrix Algebra</li><li>ENGR:2110 Engineering Fundamentals I: Statics</li></ul>'},{icon: '', title: 'Univeristy of Iowa', date: 'Fall 2021', description: 'Coursework for Fall 2021 at the University of Iowa', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>MUS:1160 University Band</li><li>ENGR:2120 Electrical Circuits</li><li>ENGR:2130 Thermodynamics</li><li>ENGR:2730 Computers in Engineering</li><li>CS:2210 Discrete Structures</li>'},{icon: '', title: 'Univeristy of Iowa', date: 'Spring 2022', description: 'Coursework for Spring 2022 at the University of Iowa', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>ECE:2410 Principles of Electronic Instrumentation</li><li>ECE:3330 Introduction to Software Design</li><li>ECE:2400 Linear Systems I</li><li>CS:2230 Computer Science II: Data Structures</li>'},{icon: '', title: 'Collins Aerospace', date: 'Summer 2022', description: 'Software Engineering Intern for the summer of 2022, after summer ended I worked part time (20 hours a week) until May of 2023', innerDesc: '<i>Responsibilities:</i><br><br><ul><li>Led in migrating critical server information containing transaction history from a local machine to a virtual machine off-site. Resulting in improved reliability and speed</li><li>Developed data-focused software to pull relevant inventory data for display, generate Excel reports, and automatically order and track materials in a warehouse. Enhancing overall warehouse efficiency</li><li>Created a multi-threaded file synchronization software deployed across over thirty machines. Allowing for greater reliability of data transfer between computers, keeping backups of files changed</li><li>Built a user-facing web application, logging and displaying specific user data for managers and employees to view</li>'},{icon: '', title: 'Univeristy of Iowa', date: 'Fall 2022', description: 'Coursework for Fall 2022 at the University of Iowa', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>CS:5990 Individual Research or Programming Project</li><li>ECE:3540 Communication Networks</li><li>ECE:3320 Introduction to Digital Design</li><li>CS:3820 Programming Language Concepts</li><li>CS:3330 Algorithms</li><li>STAT:2020 Probability & Stats for Engr & Phys Sci</li><li>ECE:3000 ECE Professional Seminar</li>'},{icon: '', title: 'Univeristy of Iowa', date: 'Sping 2023', description: 'Coursework for Spring 2023 at the University of Iowa', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>ARTS:1520 Design Fundamentals</li><li>ECE:5550 Internet of Things</li><li>ECE:3350 Computer Architecture and Organization</li><li>MATH:3650 Engineering Math V: Vector Calculus</li><li>ECE:3360 Embedded Systems</li>'},{icon: '', title: 'Raytheon Technologies', date: 'Summer 2023', description: 'Intern at RTX Corporate divison through Raytheons Digital Leadership Development Program as a Project Manager', innerDesc: '<i>Responsibilities:</i><br><br><ul><li>Coordinated the updating and condensing of knowledge-based articles used by employees for troubleshooting purposes. Resulting in increased accessibility and effectiveness of articles</li><li>Planned and programmed a software add-in for Microsoft Outlook that would automatically fill in meeting details for a given user. Allowing managers to create more efficent and clear meetings.</li>'},{icon: '', title: 'Univeristy of Iowa', date: 'Fall 2023', description: 'Coursework for Fall 2023 at the University of Iowa', innerDesc: '<i>Classes Taken:</i><br><br><ul><li>ECE:4880 Prin of Electrical and Compr Eng Design</li><li>ECE:5450 Machine Learning</li><li>ECE:5820 Software Engineering Languages and Tools</li><li>ECE:5845 Modern Databases</li><li>ECE:5995 Generative AI Tools: ChatGPT and Beyond</li><li>ENTR:1350 Foundations in Entrepreneurship</li>'}],
      dialog: false,
      dialogTitle: '',
      dialogDesc: '',
    }
  },
  created() {
    window.scrollTo(0, 0)
  },
  mounted() {
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
    grabColor() {
      if (this.isDark) {
        return '#E6E6E6'
      }
      else {
        return '#2c2c2c'
      }
    },
    route(index) {
      this.$router.push({ path: index })
    },
    showDialog(entry){
      this.dialogTitle = entry.title
      this.dialogDesc = entry.innerDesc
      this.dialog = true;
    }
  },
}
</script>
<template>
  <div id="mainContainer">
  <div id="mainDiv">
    <div style="float:left; margin-left: 2.5vw;">
      <v-switch @click="colorSwitch" :model-value="this.isDark" color="#bb86fc" prepend-icon="mdi-white-balance-sunny"
        append-icon="mdi-moon-waning-crescent"></v-switch>
          <v-btn v-on:click="route('/')">Home</v-btn>
    </div>
    <div id="timelineDiv">
      <v-timeline align="start" line-color="#bb86fc">
      <v-timeline-item v-for="item in this.events" :dot-color="grabColor()" :icon="item.icon"
        fill-dot >
        <v-card>
          <v-card-title :class="['text-h6', `bg-${grabColor()}`]">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ item.date }}
          </v-card-subtitle>
          <v-card-text>
            <p v-html="item.description"></p>
              <br>
            <v-btn color="#bb86fc" variant="outlined" @click="showDialog(item)">
              <b>More Info</b>
            </v-btn>
          </v-card-text>  
        </v-card>
      </v-timeline-item>
    </v-timeline>
    </div>
  </div>
  <v-dialog v-model="dialog" persistent max-width="40vw">
      <v-card>
        <v-card-title class="headline">{{ this.dialogTitle }}</v-card-title>
        <v-card-text><p v-html="this.dialogDesc" style="margin-left: 1vw;"></p></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">Return</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    
</div>
</template>


<style>
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

/* Main div ID */
#mainDiv {
  min-width: 100vw;
  min-height: 100vh;
  padding-left: 5vw;
  padding-right: 5vw;
  position: absolute;
  left: 0;
  top: 0;
  background-color: var(--scrollbar-track-background);
  color: var(--bodytext);
}
#mainContainer{
  font-family: 'Exo';
  display: flex;
}
#timelineDiv{
  display: flex;
  align-items: center;
  margin-top: 25vh;
  margin-left: 2.5vw;
  margin-right: 2.5vw;
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

/* Makes highlighting purple */
::selection {
    background: #bb86fc;
    /* WebKit/Blink Browsers */
}

::-moz-selection {
    background: #bb86fc;
    /* Gecko Browsers */
}

/* Makes underlines purple */
a {
    color: #bb86fc;
}
</style>
