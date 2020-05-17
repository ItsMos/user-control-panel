<template>
<div class="row justify-content-center">
  <div class="col-sm-4">
    <router-link class='card-link' to="/ucp/characters">
      <div class="card border rounded-0 shadow">
        <i class="fa fa-users"></i>
        <h1 class="text-center" style="font-size: 15px;">
          <strong>My Characters</strong>
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
  <div class="col-sm-4" v-if="$user.role == 'admin'">
    <router-link class='card-link' to="/ucp/admin">
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
</template>