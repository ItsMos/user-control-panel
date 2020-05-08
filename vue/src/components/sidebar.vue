<template>
  <div class="sidebar">
    <div v-if="logged" class="userview border rounded-0 shadow">
      <div class="header">
        <h1 class="text-center">WELCOME BACK, {{user.username}}</h1>
      </div>
      <h3>
        <i class="fa fa-clock-o"></i>Hours Played: {{user.stats.totalPlayTime || 0}}
        <br />
      </h3>
      <h3>
        <i class="fa fa-dollar"></i>Pacific Points: N/A
        <br />
      </h3>
      <h3>
        <i class="fa fa-calendar"></i>Member Since: {{user.created | dateStr}}
        <br />
      </h3>
      <hr />
      <a v-if="this.$route.path == '/'" class="btn btn-dark btn-sm d-block border" href='/ucp'>UCP</a>
      <a @click='logout' class="btn btn-dark btn-sm d-block border" href='#'>Logout</a>
    </div>

    <div v-if="!logged" class="border rounded-0 shadow" style="margin-bottom: 15px;">
      <div class="header">
        <h1 class="text-center text-uppercase">Please login OR REGISTER</h1>
      </div>
      <form @submit.prevent="login" style="margin-top: 10px;">
        <div class="form-group">
          <h2 style="font-size: 13px;padding-left: 15px;">
            <i class="fa fa-user"></i>
            <strong>Username</strong>
          </h2>
          <div class="input-group input-group-sm" style="padding-right: 10px;padding-left: 10px;">
            <input
              v-model="username"
              class="border rounded-0 form-control"
              type="text"
              name="username"
              required
              style="margin-top: -5px;"
              placeholder="enter your username "
            />
          </div>
        </div>
        <h2 style="font-size: 13px;padding-left: 15px;margin-top: -7px;">
          <i class="fa fa-lock"></i>
          <strong>Password</strong>
        </h2>
        <div class="form-group" style="margin-top: -5px;">
          <div class="input-group input-group-sm" style="padding-left: 10px;padding-right: 10px;">
            <input
              v-model="password"
              class="border rounded-0 form-control"
              type="password"
              name="password"
              required
              placeholder="enter your password"
              style
            />
          </div>
        </div>
        <label class="text-center" style="display:block; font-size: 13PX;">
          <input type="checkbox" />&nbsp;Log me on automatically each visit
          <br />
        </label>
        <div class="form-group">
          <button
            :disabled="disable"
            class="btn btn-dark btn-block btn-sm border rounded-0 border-light"
            type="submit"
          >Login</button>
        </div>
      </form>
      <hr style="margin-top: -10px;margin-bottom: 0px;" />
      <a href="#" style="color: rgb(0,0,0);font-size: 12px;margin-left: 15px;">
        » Forgot
        your password?
        <br />
      </a>
      <router-link to="register" style="color: rgb(0,0,0);font-size: 12px;margin-left: 15px;">
        » I don't
        have an account, register now
        <br />
      </router-link>
    </div>
    <div class="border rounded-0 shadow">
      <div class="header text-uppercase">
        <h1 class="text-center" style="font-size: 15px;">SOCIAL MEDIA</h1>
      </div>
      <div class="d-flex justify-content-center" style="background-color: #ffffff;">
        <i
          class="fa fa-facebook-official"
          style="font-size: 27px;margin-right: 10px;color: rgb(0,0,0);padding-top: 5px;padding-bottom: 5px;"
        ></i>
        <i
          class="fa fa-instagram"
          style="font-size: 27px;color: rgb(0,0,0);padding-top: 5px;margin-right: 10px;padding-bottom: 5px;"
        ></i>
        <i
          class="fa fa-youtube-play"
          style="font-size: 27px;color: rgb(0,0,0);padding-top: 5px;padding-bottom: 5px;"
        ></i>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  margin-bottom: 25px;
  font-size: 15px;
}

.header, .btn {background-color: #042E59}

.header {
  padding: 1px 0;
  margin-bottom: 8px;
}

.header h1 {
  color: rgb(255,255,255);
  margin-bottom:0;
  font-size: 1em;
  padding: 10px 0;
}

h3 {
  font-size: 0.9em;
  margin-left: 10px;
  padding: 2px 0;
}

.userview {
  margin-bottom: 15px;
}

i.fa {
  margin-right: 5px;
}
</style>

<script>
import VueJwtDecode from "vue-jwt-decode"

export default {
  async created() {
    this.user = this.$user
    if (this.user)
      this.logged = true
  },

  data() {
    return {
      user: null,
      username: "",
      password: "",
      disable: false,
      logged: false
    };
  },

  watch: {
    username() {
      this.username = this.username.trim();
    }
  },

  methods: {
    async login() {
      if (!this.username || this.username.length < 3) {
        return this.$notify({ text: "Invalid username", color: "danger" });
      }
      if (!this.password || this.password.length < 4) {
        return this.$notify({ text: "Invalid password", color: "danger" });
      }

      this.disable = true

      let response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      })

      response = await response.json()
      this.disable = false
      if (response.errors) {
        Object.keys(response.errors).forEach(err => {
          this.$notify({ text: response.errors[err], color: "danger" })
        });

      } else {
        if (response.token) {
          this.$notify({
            text: "Successfully logged in",
            color: "primary"
          })
          localStorage.token = response.token
          this.$user = await VueJwtDecode.decode(response.token)
          this.$user.stats = await ajax('/stats')
          this.logged = true
          this.user = this.$user
          
          if (this.$route.meta && this.$route.meta.guest) {
            this.$router.go()
          }
        }
      }
    },

    logout() {
      delete localStorage.token
      this.$router.go()
    }
  },

  filters: {
    dateStr(time) {
      return new Date(time).toDateString()
    }
  }
};
</script>