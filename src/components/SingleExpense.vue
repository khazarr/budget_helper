<template>
    <!-- <div class="expense">
        <div class="date">
            <h6>data</h6>
            <p>{{date}}</p>
        </div>
        
        <p class="desc">{{description}}</p>
        <p class="amm">{{ammount}}</p>
    </div> -->
    <div class="main">
        <div class="box">
            <div class="record">
                <div class="record__amount">{{ammount}}<span class="record__fadeout"></span></div>
                <div class="record__caption">{{description}}</div> 
                <div class="record__date">{{date}}</div>
            </div>
        </div>
        <div class="controls">
        
            <div>
              <p>Category</p>
              <select>
                <option v-for="category in categories" :value="category" :key="category">{{category}}</option>
              </select>
            </div>
            <div class="control--include">
              <p>Include?</p>
              <input type="checkbox" name="" id="o" :checked="include">
            </div>
        </div>

    </div>
</template>

<script>
export default {
  props: ["date", "description", "ammount","include"],
  data() {
    return {
      categories: [
        'zakupy spożywcze',
        'bilety MPK'
      ]
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
