<template>
  <tr v-show="include && !isSelfTransfer">
    <td>{{date }} {{description }} </td>
    <td>{{ammount | abs}}</td>
  </tr>
</template>

<script>
export default {
  props: ["description", "ammount","include","date"],
  computed: {
    isSelfTransfer() {
      return this.description.includes('PRZELEW WŁASNY')
    }
  },
  filters: {
    abs(val) {
      const abs =  Math.abs(Number(val.replace(',','.')))
      
      return String(abs).replace('.',',')
    }
  }
};
</script>


<style scoped>
p {
  margin: 0;
}
.controls {
background: #F2F2F2;
  border-radius: 3px;
  line-height: 1.3;
  box-shadow: 0 0 4px rgba(0,0,0,.5);
  float: left;
  width: 20%;
  min-height: 120px;
}

.control--include {
  margin-top: 1em;
}
.box {
  margin: 0 auto;
  width: 80%;
  float: left;
  min-height: 120px;
}

.record {
  background: #F2F2F2;
  border-radius: 3px;
  border-left: 6px solid #ADCF4F;
  padding: 15px;
  margin-bottom: 15px;
  position: relative;
  color: #ADCF4F;
  line-height: 1.3;
  box-shadow: 0 0 4px rgba(0,0,0,.5);
  min-height: 90px;
}

.record__amount {
  font-size: 32px;
}

.record__caption {
  font-size: 18px;
  color: #2A2C2B;
  font-weight: bold;
}

.record__date {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #B2B2B2;
}

.record__fadeout {
  color: #BDD684;
  font-size: 28px;
}

.record--expense {
  color: #E74C3C;
  border-left-color: #E74C3C;
}

.record--expense .record__fadeout {
  color: #E4B2B8;
}
</style>
