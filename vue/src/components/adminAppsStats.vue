<template>
<transition name='fade'>
  <div class="row" v-if="stats.users != null">
    <div class="col-sm-3">
      <router-link to='/ucp/admin' class="card text-light">
        <div class="card-body">
          <h5 class="card-title">Registered Players</h5>
          <h1 class="card-text">{{stats.users}}
            <i class="icon fa fa-users"></i>
          </h1>
        </div>
      </router-link>
    </div>

    <div class="col-sm-3">
      <router-link to='/ucp/admin/apps?v=Pending' class="card text-light blue">
        <div class="card-body">
          <h5 class="card-title">Pending Applications</h5>
          <h1 class="card-text">{{stats.apps}}
            <i class="icon fa fa-clock"></i>
          </h1>
        </div>
      </router-link>
    </div>
    
    <div class="col-sm-3">
      <router-link to='/ucp/admin/apps?v=Accepted' class="card text-light green">
        <div class="card-body">
          <h5 class="card-title">Accepted Applications</h5>
          <h1 class="card-text">{{stats.acceptedApps}}
            <i class="icon fa fa-check"></i>
          </h1>
        </div>
      </router-link>
    </div>
    
    <div class="col-sm-3">
      <router-link to='/ucp/admin/apps?v=Denied' class="card text-light red">
        <div class="card-body">
          <h5 class="card-title">Denied Applications</h5>
          <h1 class="card-text">{{stats.deniedApps}}
            <i class="icon fa fa-times"></i>
          </h1>
        </div>
      </router-link>
    </div>

  </div>
</transition>
</template>

<script>
export default {
  async created() {
    let res = await ajax('/admin?stats=1')
    this.stats = res.stats
  },

  data() {
    return {
      stats: {}
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

a.card {
  background: #042E59;
}
a.card.red {background: rgba(139, 0, 0, 0.8)}
a.card.green {background: rgba(128, 128, 0, 0.8)}
a.card.blue {background: rgba(6, 85, 171, 0.88)}
a.card {text-decoration: none;}

a.card .icon {
  font-size: 1em;
  float: right;
}
</style>