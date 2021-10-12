<template>
  <div class="chart_line">
    <div class="chart">
      <div class="chart_head bg_black">
        <i class="fas fa-chart-area me-1 icon_chart"></i>
        <p class="chart_name">Current</p>
        <div class="chart_value">
          <p>U_Phase:   <strong>   3.15V</strong></p>
          <p>V_Phase:   <strong>   3.11V</strong></p>
          <p>W_Phase:   <strong>   2.78V</strong></p>
        </div>
      </div>
      <div class="chart_main">
        <canvas id="chart_current" style="background-color: #16192f"></canvas>
      </div>
    </div>
    <div class="chart">
      <div class="chart_head bg_black">
        <i class="fas fa-chart-area me-1 icon_chart"></i>
        <p class="chart_name">Voltage</p>
        <div class="chart_value">
          <p>U_Phase:   <strong>   3.15V</strong></p>
          <p>V_Phase:   <strong>   3.11V</strong></p>
          <p>W_Phase:   <strong>   2.78V</strong></p>
        </div>
      </div>
      <div class="chart_main" style="background-color: #16192f">
        <canvas id="chart_voltage"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { mapState } from "vuex";
export default {
  name: "ChartComp",
  computed: mapState(["token"]),
  methods: {
    createChart3(data1, data2, data3, label, id) {
      let elementChart = document.getElementById(id).getContext("2d");
      let chart = new Chart(elementChart, {
        type: "line",
        data: {
          labels: label,
          datasets: [
            {
              label: "Phase U",
              data: data1,
              borderColor: "#2176C6",
              borderWidth: 2,
              fill: "start",
            },
            {
              label: "Phase V",
              data: data2,
              borderColor: "red",
              borderWidth: 2,
              fill: "start",
            },
            {
              label: "Phase W",
              data: data3,
              borderColor: "green",
              borderWidth: 2,
              fill: "start",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          title: {
            display: true,
            text: "Voltage Chart",
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false,
                drawOnChartArea: true,
              },
            },
            y: {
              grid: {
                drawBorder: false,
              },
            },
          },
        },
      });
      return chart;
    },
  },
  mounted() {
    this.createChart3(
      [
        1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2,
        3, 15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3,
        21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2,
        3, 1, 2, 3,
      ],
      [
        5, 6, 31, 2, 3, 11, 2, 13, 4, 2, 3, 4, 2, 3, 4, 2, 3, 1, 2, 3, 21, 2, 3,
        15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21,
        2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2, 3,
        1, 2, 3,
      ],
      [
        5, 6, 4, 27, 3, 4, 2, 4, 22, 3, 4, 2, 43, 1, 21, 3, 4, 1, 2, 3, 21, 2,
        3, 15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3,
        21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2,
        3, 1, 2, 3,
      ],
      [
        5, 6, 11, 2, 3, 1, 12, 1, 2, 13, 1, 2, 13, 1, 29, 3, 1, 2, 3, 21, 2, 3,
        15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21,
        2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2, 3,
        1, 2, 3,
      ],
      "chart_current"
    );
    this.createChart3(
      [
        1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2,
        3, 15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3,
        21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2,
        3, 1, 2, 3,
      ],
      [
        5, 6, 31, 2, 3, 11, 2, 13, 4, 2, 3, 4, 2, 3, 4, 2, 3, 1, 2, 3, 21, 2, 3,
        15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21,
        2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2, 3,
        1, 2, 3,
      ],
      [
        5, 6, 4, 27, 3, 4, 2, 4, 22, 3, 4, 2, 43, 1, 21, 3, 4, 1, 2, 3, 21, 2,
        3, 15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3,
        21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2,
        3, 1, 2, 3,
      ],
      [
        5, 6, 11, 2, 3, 1, 12, 1, 2, 13, 1, 2, 13, 1, 29, 3, 1, 2, 3, 21, 2, 3,
        15, 2, 3, 21, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21,
        2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 2, 3, 1, 2, 3,
        1, 2, 3,
      ],
      "chart_voltage"
    );
  },
};
</script>

<style scoped>
.bg_black {
  background-color: #16192f;
}
.icon_chart {
  height: 50px;
  width: 8%;
  margin: auto 25px;
}
.chart_line {
  display: flex;
  justify-content: space-between;
}
.chart {
  width: 49%;
  /* height: 300px; */
  margin: 25px 5px;
}
.chart_head {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 15px 0;
  background-color: #101431;
  border-bottom: 1px solid black;
}
.chart_head p {
  color: white;
}
.chart_name {
  font-size: 32px;
  font-weight: 600;
  color: black;
  text-align: start;
  margin: auto 0;
}
.chart_value {
  width: 50%;
  font-size: 15px;
  margin: auto 5px;
  padding: 0px 10px;
  border-radius: 4px;
  text-align: center;
}
.chart_value p {
  color: #7680ae;
  margin: 0px 10px;
}
strong {
  color: white;
  font-size: 20px;
}
.chart_main {
  width: 100%;
  height: 250px;
}
</style>