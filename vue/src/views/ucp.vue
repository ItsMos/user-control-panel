<template>
  <div class="shadow solidnews topnews" style="margin-bottom: 15px;">
    <h2 class="text-left mt-2" style="font-size: 20px;margin-left: 15px;">
      <strong>
        <router-link to='/'>Home</router-link> »
        {{this.$route.name}}
      </strong>
    </h2>
    <hr />
    <div style="margin: 0 15px;">
      <div class="row">
        <div class="col-sm-4">
          <router-link class='card-link' to="/ucp/characters">
            <div class="card border rounded-0 shadow">
              <i class="fa fa-users"></i>
              <h1 class="text-center" style="font-size: 15px;">
                <strong>Manage Characters</strong>
              </h1>
              <button
                class="btn btn-light btn-block btn-sm"
                type="button"
                style="background-color: #042E59;color: #fff;"
              >SELECT</button>
            </div>
          </router-link>
        </div>
        <div class="col-sm-4">
          <router-link class='card-link' to="#">
            <div class="card border rounded-0 shadow">
              <i class="fas fa-cog"></i>
              <h1 class="text-center" style="font-size: 15px;">
                <strong>Account Settings</strong>
              </h1>
              <button
                class="btn btn-light btn-block btn-sm"
                type="button"
                style="background-color: #042E59;color: #fff;"
              >SELECT</button>
            </div>
          </router-link>
        </div>
        <div class="col-sm-4">
          <router-link class='card-link' to="#">
            <div class="card border rounded-0 shadow">
              <i class="fa fa-shield"></i>
              <h1 class="text-center" style="font-size: 15px;">
                <strong>Admin Central</strong>
              </h1>
              <button
                class="btn btn-light btn-block btn-sm"
                type="button"
                style="background-color: #042E59;color: #fff;"
              >SELECT</button>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  mounted() {
    this.user = this.$user
  }
}
</script>