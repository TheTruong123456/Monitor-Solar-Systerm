<template>
  <div class="panel-body">
    <canvas id="out-year-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { mapState } from "vuex";

export default {
  name: "OutYear",
  computed: mapState(["token"]),
  data() {
    return {
      time: null,
    };
  },
  methods: {
    createChart(data, label, id) {
      let elementChart = document.getElementById(id).getContext("2d");
      let chart = new Chart(elementChart, {
        type: "bar",
        data: {
          labels: label,
          datasets: [
            {
              label: "Out Put In Year",
              data: data,
              borderWidth: 2,
              fill: "start",
              backgroundColor: "#2D7CF3",
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
          indexAxis: "y",
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
      [1, 2, 3, 21, 2, 3, 15, 2, 3, 21, 41, 3],
      [
        "December",
        "November",
        "October",
        "September",
        "August",
        "July",
        "June",
        "May",
        "April",
        "March",
        "February",
        "January",
      ],
      "out-year-chart"
    );
  },
};
</script>

<style scoped>
.panel-body {
  height: 330px;
  width: 40%;
  background-color: #16192f;
}
</style>