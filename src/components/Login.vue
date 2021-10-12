<template>
  <div class="bg-primary" v-on:keyup.enter="main">
    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                  <div class="card-header">
                    <h2 class="text-center font-weight-light my-4">Login</h2>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="inputEmail"
                          type="email"
                          placeholder="name@example.com"
                        />
                        <label for="inputEmail">Email address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input
                          class="form-control"
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                        />
                        <label for="inputPassword">Password</label>
                      </div>
                      <div
                        class="
                          d-flex
                          align-items-center
                          justify-content-between
                          mt-4
                          mb-0
                        "
                      >
                        <router-link
                          class="btn btn-primary"
                          to="/dashboard"
                        >
                          Login
                        </router-link>
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
export default {
  name: "Login",
  methods: {
    postLogin(email, password) {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      let raw = JSON.stringify({
        username: email,
        password: password,
      });
      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      let url = `http://103.28.32.80:8080/api/auth/login`
      return fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          return result;
        })
        .catch((error) => console.log("error", error));
    },
    getDataForm() {
      let elementInput = document.getElementsByTagName("input");
      let email = elementInput[0].value;
      let password = elementInput[1].value;
      let infor = [email, password];
      return infor;
    },
    async main() {
      let infor = this.getDataForm();
      let result = await this.postLogin(infor[0], infor[1]);
      let token = JSON.parse(result).token;
      this.$store.state.token = token;
      console.log("token in login", token)
    },
  },
  mounted() {
    
  },
};
</script>

<style sccoped>
</style>