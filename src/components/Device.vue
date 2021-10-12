<template>
  <div style="background-color: #090E1C">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Device</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Name Device</li>
        </ol>
      </div>
    </main>
    <div class="time" v-on:keyup.enter="getDataChooseTime">
      <div class="choose">
        <div class="para">Choose day you want to show detail data</div>
        <div class="time-choose">
          <input type="text" placeholder="Day" />
          <input type="text" placeholder="Month" />
          <input type="text" placeholder="Year" />
        </div>
      </div>
      <div class="alertTimeShowed">
        {{ alertTimeShowed }}
      </div>
      <div class="time-now">
        Today:
        <div>
          {{ timeDefault }}
        </div>
      </div>
    </div>
    <div class="chart_area">
      <div class="out-chart">
        <out-month-comp />
        <out-year-comp />
      </div>
      <chart-comp/>
      <table-comp />
    </div>
  </div>
</template>

<script>
import ChartComp from "./CurVol_Chart.vue";
import TableComp from "./Table.vue";
import OutMonthComp from "./OutMonth.vue";
import OutYearComp from "./OutYear.vue";
import { mapState } from "vuex";

export default {
  name: "Device",
  components: { ChartComp, TableComp, OutMonthComp, OutYearComp },
  computed: mapState(["token", "idDevice"]),
  data() {
    return {
      timeDefault: null,
      alertTimeShowed: null,
    };
  },
  methods: {
    getTime() {
      let time = new Date(Date.now());
      this.timeDefault = time.toDateString();
      let timeDefault = [];
      for (let index = 0; index < 3; index++) {
        let elementTimeDefault = time.toLocaleDateString().split("/");
        timeDefault.push(elementTimeDefault[index]);
        // month day year
      }
      this.alertTimeShowed =
        "Show data in day " +
        timeDefault[1] +
        " month " +
        timeDefault[0] +
        " year " +
        timeDefault[2];
    },
    getDataChooseTime() {
      let timeChoose = [];
      for (let index = 0; index < 3; index++) {
        let elementTime = document.getElementsByTagName("input")[index];
        timeChoose.push(elementTime.value);
      }

      if (
        timeChoose[0] > 31 ||
        timeChoose[0] <= 0 ||
        timeChoose[1] > 12 ||
        timeChoose[1] <= 0 ||
        timeChoose[2] < 2021
      ) {
        alert("You should choose time again");
      } else {
        this.alertTimeShowed =
          "Show data in day " +
          timeChoose[0] +
          " month " +
          timeChoose[1] +
          " year " +
          timeChoose[2];
        console.log(timeChoose[0], timeChoose[1], timeChoose[2]);
      }
      for (let index = 0; index < 3; index++) {
        let elementTime = document.getElementsByTagName("input")[index];
        elementTime.value = "";
      }
    },
  },
  mounted() {
    this.getTime();
    // console.log("this.idDevice", this.idDevice)
  },
};
</script>

<style scoped>
main {
  background-color: #16192f;
  color: white;
}
.mt-4 {
  margin-top: 0px;
}
.time {
  display: flex;
  justify-content: space-between;
  border: 1px solid #1b0249;
  padding: 10px 0;
  background-color: #16192f;
  color: white;
  margin-bottom: 25px;
}
.choose {
  width: 30%;
}
.para {
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
  margin: 5px 25px;
  font-style: italic;
  font-weight: 100;
  color: #7680AE;
}
.time-choose {
  display: flex;
  
}
.alertTimeShowed {
  font-size: 28px;
  line-height: 60px;
  font-weight: 600;
}
.time-now {
  margin: auto 30px;
  text-align: center;
  font-size: 20px;
    color: #7680AE;

}
input {
  margin: auto 20px;
  width: 50%;
}
.out-chart {
  display: flex;
  justify-content: space-between;
}
</style>