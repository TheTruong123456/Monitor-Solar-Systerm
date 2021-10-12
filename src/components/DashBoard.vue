<template>
  <div style="background-color: #090e1c">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </div>
    </main>
    <div class="time-sun">
      <div class="sun-item">
        <i class="fas fa-sun icon-weather yellow"></i>
        <div>
          <strong>Sunrise: </strong>
          <p>
            {{ weather.sunrise }}
          </p>
        </div>
      </div>
      <div class="sun-item">
        <i class="fas fa-sun icon-weather yellow"></i>
        <div>
          <strong style="font-size: 29px">Sunset: </strong>
          <p>{{ weather.sunset }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-md-5">
        <div class="card bg-primary text-white mb-4">
          <div class="card-body">
            <i class="fas fa-temperature-low icon-weather"></i>
            <div class="data-weather">
              <div class="name-weather">Temperature</div>
              <p>Temp: {{ weather.temp }}</p>
              <p>pressure: {{ weather.tempmax }}</p>
            </div>
          </div>

          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" v-bind:href="urlWeather"
              >View Details</a
            >
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-5">
        <div class="card bg-warning text-white mb-4">
          <div class="card-body">
            <i class="fas fa-tint icon-weather"></i>
            <div class="data-weather">
              <div class="name-weather">Humidity</div>
              <p>Humidity: {{ weather.humidity }}</p>
              <p>Pressure: {{ weather.pressure }}</p>
            </div>
          </div>

          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" v-bind:href="urlWeather"
              >View Details</a
            >
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-5">
        <div class="card bg-success text-white mb-4">
          <div class="card-body">
            <i class="fas fa-wind icon-weather"></i>
            <div class="data-weather">
              <div class="name-weather">Wind</div>
              <p>Speed: {{ weather.windspeed }} m/s</p>
              <p>Deg: {{ weather.winddeg }}</p>
            </div>
          </div>

          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" v-bind:href="urlWeather"
              >View Details</a
            >
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-5">
        <div class="card bg-danger text-white mb-4">
          <div class="card-body">
            <i class="fas fa-water icon-weather"></i>
            <div class="data-weather">
              <div class="name-weather">Weather</div>
              <p>{{ weather.weather }}</p>
              <p>visibility: {{ weather.visibility }}</p>
            </div>
          </div>

          <div
            class="
              card-footer
              d-flex
              align-items-center
              justify-content-between
            "
          >
            <a class="small text-white stretched-link" v-bind:href="urlWeather"
              >View Details</a
            >
            <div class="small text-white">
              <i class="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DashBoard",
  computed: mapState(["token"]),
  data() {
    return {
      apiKey: "a2f8942d41f1a33f4935b2efd4b475a3",
      weather: {},
    };
  },
  methods: {
    getApiWeather(city) {
      let urlWeather =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey;
      return fetch(urlWeather).then((response) => {
        if (!response.ok) {
          alert("No weather found.");
        }
        return response.json();
      });
    },
    performSignIn() {
      let headers = new Headers();

      headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
      headers.append("Access-Control-Allow-Credentials", "true");
      let url = `https://api.solcast.com.au/world_radiation/forecasts?latitude=16.432835&longitude=107.592783&hours=168&format=json`;

      fetch(url, {
        mode: "cors",
        credentials: "include",
        method: "POST",
        headers: headers,
      })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch((error) =>
          console.log("Authorization failed : " + error.message)
        );
    },
    async main() {
      // let weather = await this.getApiWeather("Hue");
      // this.weather = {
      //   weather: weather.weather[0].main,
      //   visibility: weather.visibility,
      //   windspeed: weather.wind.speed,
      //   winddeg: weather.wind.deg,
      //   temp: weather.main.temp,
      //   tempmax: weather.main.temp_max,
      //   pressure: weather.main.pressure,
      //   humidity: weather.main.humidity,
      //   sunrise: new Date(weather.sys.sunrise * 1000).toLocaleTimeString(),
      //   sunset: new Date(weather.sys.sunset * 1000).toLocaleTimeString(),
      // };

      // let data = await this.getMethod();
      console.log(window.location.href);
    },
  },
  mounted() {
    this.main();
  },
};
</script>

<style scoped>
.time-sun {
  height: 90px;
  background-color: #16192f;
  display: flex;
  justify-content: space-between;
}
.sun-item {
  display: flex;
  margin: auto 50px;
}
.sun-item strong {
  font-size: 25px;
  color: white;
  margin: auto 20px;
}
.sun-item p {
  font-size: 20px;
  margin: auto 20px;
  color: white;
}
.yellow {
  color: yellow;
}
.name-weather {
  font-size: 23px;
  font-weight: 600;
}
.icon-weather {
  width: 50px;
  height: 70px;
}
.card-body {
  display: flex;
  justify-content: space-around;
}
.card-body p {
  font-size: 16px;
  margin: 0;
  color: #ffffff;
}

main {
  background-color: #16192f;
  color: white;
}
.header-content {
  text-align: center;
}
.header-content p {
  margin: 2px;
}
.row {
  margin: 20px 0px;
  background-color: #090e1c;
  height: 500px;
}
.col-md-6 {
  margin: 20px 0;
}
.bg-white {
  background-color: white;
}
</style>