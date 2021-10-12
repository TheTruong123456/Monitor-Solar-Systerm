<template>
  <div style="background-color: #090e1c">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">List Devices In Station</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Nam Station</li>
        </ol>
      </div>
    </main>
    <div class="btn-add">
      <router-link class="add" to="/adddevice">ADD DEVICE</router-link>
    </div>
    <div class="container">
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name Device</th>
              <th>Type</th>
              <th>Brand</th>
              <th>Power</th>
              <th>Out Put</th>
              <th>Active</th>
              <th>WARNING</th>
            </tr>
          </thead>
          <tbody id="myTable" v-for="device in 4" :key="device" >
            <!-- <tr>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)" >{{ device.index }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)" >{{ device.toName }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">{{ device.to.entityType }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">{{ device.attribute[1].value }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">{{ device.attribute[0].value  }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">{{ device.lastTotalEnergy }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">{{ device.lastStatus }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">table cell</router-link>
              </td>
            </tr> -->
            <tr>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)" >{{ device }}</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)" >Inverter1</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">Device</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">Siemen</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">30Kwh</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">3064556w</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">Nomal</router-link>
              </td>
              <td>
                <router-link class="link" to="/device" v-on:click="updateIdDevice(device.to.id)">None</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListDevice",
  computed: mapState(["token", "idStation"]),
  data() {
    return {
      dataListDevices: {},
      listDevices:{},
    }
  },
  methods: {
    getMethod(url) {
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
    updateIdDevice(idDevice) {
      this.$store.state.idDevice = idDevice
    },
    async getAttributes(listIdDevices) {
      let listAttributes = []

      for (let index = 0; index < listIdDevices.length; index++) {
        let urlAtttributes = `http://103.28.32.80:8080/api/plugins/telemetry/DEVICE/${listIdDevices[index]}/values/attributes?keys=brand,power
`
        let attribute = await this.getMethod(urlAtttributes)
        listAttributes.push(attribute)
      }
      return listAttributes
    },
    async getLastData(listIdDevices) {
      let listLastData = []
      for (let index = 0; index < listIdDevices.length; index++) {
        let urlLastTotalEnergy = `http://103.28.32.80:8080/api/plugins/telemetry/DEVICE/${listIdDevices[index]}/values/timeseries?keys=Total_Energy,Device_Status&useStrictDataTypes=false`
        let lastTotalEnergy = await this.getMethod(urlLastTotalEnergy)
        let status = true
        if (lastTotalEnergy.Device_Status[0].value == 0) {
          status = false
        }
        listLastData.push([lastTotalEnergy.Total_Energy[0].value, status])
      }
      return listLastData
    },
    async main() {
      // get list devices
      let urlListDevice = `http://103.28.32.80:8080/api/relations/info?fromId=${this.idStation}&fromType=ASSET`
      let listDevices = await this.getMethod(urlListDevice)

      // get list id device
      let listIdDevices = listDevices.map((device) => {
        return device.to.id
      })

      // get attribute of each device
      let listAttributes = await this.getAttributes(listIdDevices)

      // get last Total Energy
      let listLastData = await this.getLastData(listIdDevices)

      // cat data and attribute
      this.listDevices = listDevices.map((device, index) => {
        device["attribute"] = listAttributes[index]
        device["lastTotalEnergy"] = listLastData[index][0]
        device["lastStatus"] = listLastData[index][1]
        device["index"] = index + 1
        return device
      })

      console.log("this.listDevices" ,this.listDevices)

    }
  },
  mounted() {
    this.main()

  },
};
</script>

<style scoped>
main {
  background-color: #16192f;
  color: white;
}
.btn-add {
  display: flex;
  justify-content: flex-end;
  margin: 0 25px 15px;
}
.add {
  background-color: rgb(4, 167, 4);
  color: black;
  width: 10%;
  text-align: center;
  padding: 5px;
  text-decoration: none;
  border-radius: 15px;
  font-weight: 600;
  margin: 0 25px;
  background-color: white;
}
.container {
  height: 445px;
  padding: 5px 25px 5px 0;
}
.table-responsive {
  height: 300px;
  background-color: #16192f;
}
.table {
  color: white;
}
.link {
  text-decoration: none;
  color: white;
}
</style>