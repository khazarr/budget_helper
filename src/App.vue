<template>
  <div id="app">
    <div class="">

      <section id="file-form">
        <form  enctype="multipart/form-data">
          <h1>Budget helper</h1>
      
            <!-- <input id="csv" type="file" /> -->
            <div class="custom-file-input">
            <span>{{displayFileName}}</span>
            <span>Browse<input @change="onFileInputChange" id="csv" type="file"/></span>
          </div>

        </form>
      </section>

      <table v-show="getUploadedData">
        <tr>
          <th>Description</th>
          <th>Ammount</th>
        </tr>
        <SingleExpenseTabled 
          v-for="(data, index) in getUploadedData"
          :key = index
          :date = data.date
          :description = data.description
          :ammount = data.ammount
          :include = data.include
        />
      </table>
      <table v-show="ingParsedData">
        <tr>
          <th>Description</th>
          <th>Ammount</th>
        </tr>
        <SingleExpenseTabledIng 
          v-for="(data, index) in ingParsedData"
          :key = index
          :date = data.date
          :description = data.description
          :ammount = data.ammount
          :include = data.include
        />
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import SingleExpense from "./components/SingleExpense.vue";
import SingleExpenseTabled from "./components/SingleExpenseTabled.vue";
import SingleExpenseTabledIng from "./components/SingleExpenseTabledIng.vue";
import Papa from 'papaparse';
import { mapGetters } from 'vuex'

export default {
  name: "app",
  components: {
    SingleExpense,
    SingleExpenseTabled,
    SingleExpenseTabledIng
  },
  data () {
    return {
      displayFileName: '',
      ingParsedData: null
    }
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
      'getUploadedData'
    ])
  },
  methods: {
    onFileInputChange(e) {
      console.log('czendż')
      const fileToManipulate = e.target.files[0]
      this.displayFileName = fileToManipulate.name
      console.log(fileToManipulate)

      if (fileToManipulate.type.includes('html')) {
        this.onProcessHtmlFile()
      }

      if (fileToManipulate.type.includes('ms-excel')) {
        console.log('wchodze t')
        this.onProcessCSVFile()
      }
    },
    onProcessCSVFile() {
      var that = this
      const csvInput = document.querySelector("#csv");
      const fileToLoad = csvInput.files[0];
      console.log(Papa.parse(fileToLoad, {
        before() {
          console.log('startuje')
        },
        complete(result) {
          console.log('koniecz')
          // console.log(result)
          console.log(result.data.slice(21))
          const dataSliced = result.data.slice(21)
          const ingOutput = []
          dataSliced.map(dataChunk => {
            // ["description", "ammount","include","date"]
            ingOutput.push({
              // description: `${dataChunk[2]} | ${dataChunk[3]}`,
              description: `${dataChunk[2]}`,
              ammount: dataChunk[8] ? dataChunk[8] : dataChunk[10],
              include: true,
              date: dataChunk[0]
            })
          })
          console.log(ingOutput)
          that.ingParsedData = ingOutput
          
        }
      }))
    },
    onProcessHtmlFile() {
      var that = this
      const csvInput = document.querySelector("#csv");
      const fileToLoad = csvInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
        const textFromFileLoaded = fileLoadedEvent.target.result;
        const mbankHTML =  document.createElement("html");
        mbankHTML.innerHTML = textFromFileLoaded;
        const nodes = mbankHTML.querySelectorAll(
          "table > tbody > tr:nth-child(1) > td > table:nth-child(15) tr"
        );
        const dataArray = [];
        nodes.forEach(node => {
          if (node.children.length == 5 && node.className != "head") {
            var tds = node.querySelectorAll("td");
            var obj = {
              date: tds[0].innerText,
              description: tds[2].innerText,
              ammount: tds[3].innerText,
              include: true
            };
            dataArray.push(obj);
          }
          that.$store.commit("setUploadedData", dataArray)
        });

      };

      fileReader.readAsText(fileToLoad, "UTF-8");
    }
  }
};
</script>

<style>

#file-form {
  background: #516476;
  width: 100%;
  padding: 60px 0;
  margin-bottom: 2em;
  box-shadow:0 0 3px black,0 0 10px black;
}

@media (max-width: 500px;) {
.custom-file-input {
  max-width: 250px;
  min-width: 100px;
}
}
/* file input start */
.custom-file-input {
  display:inline-block;
  position:relative;
  width:500px;
  height:30px;
  background-color:black;
  color:white;
  font:normal normal 13px/30px Helmet,FreeSans,Sans-Serif;
  border-radius:3px;
  overflow:hidden;
  cursor:text;
}

.custom-file-input input {
  /* sembunyikan dengan `opacity:0` */
  opacity:0;
  filter:alpha(opacity=0);
  /* pastikan elemen ini selalu berada di sebelah atas */
  display:block;
  position:absolute;
  top:0;
  right:0;
  margin:0;
  padding:0;
  font-size:2000%;
  z-index:4;
  cursor:pointer;
}

.custom-file-input span {
  display:block;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  padding:0 10px;
  overflow:hidden;
}

.custom-file-input span + span {
  left:auto;
  background-color:#234;
  border-radius:0 3px 3px 0;
  padding:0 15px;
  box-shadow:0 0 3px black,0 0 10px black;
}

/* file input end */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 100px; /* minimum height */
  position: relative;
  cursor: pointer;
}
.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}

.wrapper {
  width: 70%;
  margin: auto;
}

table {
    border-collapse: collapse;
    margin: auto;
    color: #000;
}

table, th, td {
    border: 1px solid black;
}
</style>
