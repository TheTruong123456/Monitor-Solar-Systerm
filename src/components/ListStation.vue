<template>
  <div style="background-color: #090e1c">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">List station</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">List station</li>
        </ol>
        <div class="data"></div>
      </div>
    </main>
    <div class="btn-add">
      <router-link class="add" to="/addstation">ADD STATION</router-link>
    </div>
    <div class="container bootstrap snippets bootdey">
      <div class="row">
        <div class="col-md-4" v-for="station in 3" :key="station">
          <router-link class="link" to="/listdevices" @click="this.$store.state.idStation = station.to.id">
            <div class="widget-head-color-box color-bg p-lg text-center">
              <div class="m-b-md">
                <h2 class="font-bold no-margins">Station: {{ station.toName }}</h2>
                <small>Address: Cham, Huong Ho, Huong Tra, TT-Hue</small>
              </div>
              <img
                src="../assets/solar_power.jpg"
                class="circle-border m-b-md size_img"
                alt="profile"
              />
              <div>
                <span>Power: 30Kw</span> | <span>Out put: 963Kwh</span> |
                <span>Active:
                </span>
              </div>
            </div>
          </router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListSation",
  computed: mapState(["token", "idDevice"]),
  data() {
    return {
      listStations: [],
    };
  },
  methods: {
    async getMethod(url) {
      let myHeaders = new Headers();
      myHeaders.append("X-Authorization", `Bearer ${this.token}`);
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      return fetch(url, requestOptions)
        .then((response) => {
          if (response.status == 200) {
            return response.json();
          }
        })
        .catch((error) => console.log("error", error));
    },
    async main() {
      let urlListStations = `http://103.28.32.80:8080/api/relations/info?fromId=55b0dc60-f75f-11eb-8e28-ab9a25a62006&fromType=ASSET`;
      this.listStations = await this.getMethod(urlListStations);
      console.log("token in listStation", this.token)
      console.log("idDevice", this.idDevice)
    },
  },
  mounted() {
    this.main();
  },
};
</script>

<style scoped>
main {
  background-color: #16192f;
  color: white;
}
.container {
  padding: 5px 25px 5px 0;
}
.btn-add {
  display: flex;
  justify-content: flex-end;
  margin: 0 25px;
}
.add {
  background-color: white;
  color: black;
  width: 10%;
  text-align: center;
  padding: 5px;
  text-decoration: none;
  border-radius: 15px;
  font-weight: 600;
}
.link {
  text-decoration: none;
  color: black;
}
.row {
  justify-content: flex-start;
  padding-bottom: 140px;
}
.boot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 25px;
}
.station {
  border: 1px solid black;
  border-radius: 4px;
}
.head_station {
  padding: 15px 15px;
  background-color: #022b64;
}
.head_station p {
  margin: 0;
  font-size: 18px;
  color: white;
}
.body_station {
  background-color: #032657;
}
.parameter {
  padding: 10px 15px;
}
.parameter p {
  margin: 10px;
  font-size: 15px;
  color: white;
}
/* table */
.p-lg {
  padding: 30px;
}

.color-bg {
  background-color: #030446;
  color: #ffffff;
}

.widget-head-color-box {
  border-radius: 5px 5px 0px 0px;
  margin-top: 10px;
}

.m-b-md {
  margin-bottom: 20px;
}

.no-margins {
  margin: 0 !important;
}

.font-bold {
  font-weight: 600;
}

img.circle-border {
  border: 6px solid #ffffff;
}
.size_img {
  width: 90%;
}
.widget-text-box {
  padding: 20px;
  border: 1px solid #e7eaec;
  background: #ffffff;
}

.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
</style>