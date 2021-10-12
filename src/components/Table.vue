<template>
  <div class="card mb-4">
    <div class="card-header">
      <i class="fas fa-table me-1 icon_table"></i>
      <h4>DataTable Warning</h4>
    </div>
    <div class="card-body">
      <table id="datatablesSimple">
        <thead>
          <tr>
            <th>Created Time</th>
            <th>Voltage</th>
            <th>Value</th>
            <th>Current</th>
            <th>Value</th>
            <th>Phase</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in 50" :key="item">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>{{ item }}</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Table",
  computed: mapState(["token"]),
};
</script>

<style scoped>
.card-body {
  background-color: #16192f;
  color: rgb(170, 164, 164);
}
.card-body tbody :hover {
  color: white;
}
.card-header {
  display: flex;
  background-color: #16192f;
  color: white;
}
.icon_table {
  margin: auto 20px;
  height: 30px;
  width: 30px;
  color: white;
}
h4 {
  margin: auto 15px;
  color: white;
  padding: 5px;
}
#datatablesSimple {
  background-color: #16192f;
  color: rgb(155, 151, 151);
}

</style>