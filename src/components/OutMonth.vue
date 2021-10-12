<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3><i class="far fa-chart-bar icon_chart"></i>Out Put In Month</h3>
    </div>
    <div class="panel-body">
      <canvas id="out-chart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { mapState } from "vuex";
export default {
  name: "OutMonth",
  computed: mapState(["token"]),
  methods: {
    createChart(data, label, id) {
      let elementChart = document.getElementById(id).getContext("2d");
      elementChart.lineCap = 'butt';

      let chart = new Chart(elementChart, {
        data: {
          labels: label,
          datasets: [
            {
              type: "bar",
              label: "Out Put In Month",
              data: data,
              borderColor: "#27293D",
              borderWidth: 2,
              backgroundColor: "#2176C6",
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
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
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
      return chart;
    },
  },
  mounted() {
    this.createChart(
      [
        1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 41, 3, 1, 42, 3, 1, 2, 3, 21, 2, 3, 15,
        2, 3, 21, 41, 3, 1, 42, 3,
      ],
      [
        1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 41, 3, 1, 42, 3, 1, 2, 3, 21, 2, 3, 15,
        2, 3, 21, 41, 3, 1, 42, 3,
      ],
      "out-chart"
    );
  },
};
</script>

<style scoped>
.panel {
  width: 58%;
}
.panel-heading {
  background-color: #16192f;
  padding: 20px;
  display: flex;
  color: rgba(39, 61, 58, 0.904);
  height: 80px;
}
.panel-body {
  height: 250px;
  background-color: #16192f;
}
.icon_chart {
  height: 35px;
  width: 9%;
  margin: auto 10px;
  color: white;
}
h3 {
  margin: 0px auto;
  color: white;
  width: 100%;
  text-align: center;
}
</style>