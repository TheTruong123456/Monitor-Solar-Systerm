<template>
  <div class="bg-primary">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-7">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header">
                    <h3 class="text-center font-weight-light my-4">
                      Create New Device
                    </h3>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Name Device"
                            />
                            <label>Name Device</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Brand Device"
                            />
                            <label>Brand Device</label>
                          </div>
                        </div>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          type="tetx"
                          placeholder="Detail"
                        />
                        <label>Detail</label>
                      </div>
                      <div class="row mb-3">
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Rated Voltage"
                            />
                            <label>Rated Voltage</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating mb-3 mb-md-0">
                            <input
                              class="form-control"
                              type="text"
                              placeholder="Rated Current"
                            />
                            <label>Rated Current</label>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4 mb-0">
                        <div class="d-grid">
                          <button class="btn btn-primary btn-block" @click="m">
                            Create New Device
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AddDevice",
  computed: mapState(["token"]),
};
</script>

<style scoped>
</style>