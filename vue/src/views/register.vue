<template>
  <div class="registeration shadow solidnews topnews" style="margin-bottom: 15px;">
    <h2 class="text-left mt-2" style="font-size: 20px;margin-left: 15px;">
      <strong>
        <router-link to="/">Home</router-link> » Register
      </strong>
    </h2>
    <hr />

    <div
      v-if='!submitted'
      class="alert border rounded-0 d-xl-flex justify-content-between align-items-center"
      style="background-color: rgba(187,187,187,0.2);"
    >
      <i class="fa fa-info-circle"></i>
      <p>
        <br />Make sure to enter a valid email that you have access to, you will recive the confirmation email, and every other notifications delivered to your e-mail.
      </p>
    </div>
    <!-- end alert -->

    <h2 v-if='done'>We sent a confirmation email to {{email}}</h2>
    <h2 v-if='submitted'>Loading ...</h2>

    <form v-if='!submitted' @submit.prevent="register" style="margin-top: 10px;">
      <div class="form-group">
        <label for="username">
          <i class="fa fa-user"></i>
          <strong>Username</strong>
        </label>
        <div class="input-group input-group-sm" style="padding-right: 10px;padding-left: 10px;">
          <input
            v-model="username"
            class="border rounded-0 form-control"
            type="text"
            name="username"
            id="username"
            required
            placeholder="Pick a username"
            minlength='3'
          />
        </div>
      </div>
      <div class="form-group" style="margin-top: -5px;">
        <label for="password">
          <i class="fa fa-lock"></i>
          <strong>Password</strong>
        </label>
        <div class="input-group input-group-sm" style="padding-left: 10px;padding-right: 10px;">
          <input
            id="password"
            v-model="password"
            class="border rounded-0 form-control"
            type="password"
            name="password"
            required
            placeholder="Pick a password"
            minlength='8'
          />
        </div>
      </div>
      <div class="form-group" style="margin-top: -5px;">
        <label for="password2">
          <i class="fa fa-lock"></i>
          <strong>Confirm Password</strong>
        </label>
        <div class="input-group input-group-sm" style="padding-left: 10px;padding-right: 10px;">
          <input
            id="password2"
            v-model="password2"
            class="border rounded-0 form-control"
            type="password"
            name="password2"
            required
            placeholder="Re enter the password"
          />
        </div>
      </div>
      <div class="form-group" style="margin-top: -5px;">
        <label for="email">
          <i class="fa fa-envelope"></i>
          <strong>E-mail</strong>
        </label>
        <div class="input-group input-group-sm" style="padding-left: 10px;padding-right: 10px;">
          <input
            id="email"
            v-model="email"
            class="border rounded-0 form-control"
            type="email"
            name="password"
            required
            placeholder="Enter your e-mail"
            minlength='7'
          />
        </div>
      </div>
      <hr />
      <button
        :disabled='submitted'
        class="btn btn-dark btn-block border rounded-0 border-light"
        type='submit'
        style="background-color: rgb(4,46,89);margin-bottom: 15px;"
      >Submit</button>
    </form>

  </div>
</template>

<style scoped>
.registeration {
  padding: 20px 20px 0;
}
.alert {position: relative;}
.alert .fa {
  color: #042E59;
  font-size: 60px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.alert p {
  margin-left: 60px;
}

.form-group label {
  font-size: 1.1em;
}
.form-group label i {
  padding: 0 10px;
}

form {
  font-size: 1em !important;
}
</style>

<script>
export default {
  methods: {
    async register() {
      if (this.username.length < 3)
        return this.$notify({text: 'invalid username', color: 'danger'})
      if (this.password.length < 8)
        return this.$notify({text: 'invalid password', color: 'danger'})
      if (this.password !== this.password2)
        return this.$notify({text: 'Passwords dont match', color: 'danger'})
      if (this.email.length < 7)
        return this.$notify({text: 'Invalid E-mail', color: 'danger'})

      this.submitted = true
      
      let response = await fetch('/register', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email
        })
      })

      // created
      if (response.status == 201) {
        this.$notify({ text: 'Successfully registered an account!', color: 'success', timeout: 10000})
        this.$notify({ text: 'Check your email to verify your account', color: 'primary', timeout: 20000})
        
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.submitted = true
          this.done = true
        }, 4000)

      } else {
        response = await response.json()
        if (response.errors) {
          Object.keys(response.errors).forEach(err => {
            this.$notify({ text: response.errors[err], color: "danger" })
          })
        }

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.submitted = false
        }, 4000)
      }
    }
  },

  data() {
    return {
      username: '',
      password: '',
      password2: '',
      email: '',
      submitted: false,
      done: false,
      timeout: null
    }
  },

  watch: {
    username(){ this.username =  this.username.trim()},
    email(){this.email =  this.email.trim()}
  }
}
</script>