<template>
  <header class="d-md-flex d-xl-flex justify-content-md-center">
    <nav class="navbar navbar-light navbar-expand-md d-md-flex justify-content-md-center">
      <div class="container">
        <img src="../assets/img/header-iphone.png" height="30" />
        <button
          data-toggle="collapse"
          class="navbar-toggler"
          data-target="#navcol-1"
          style="background-color: #fff;"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul class="nav navbar-nav">
            <li class="nav-item" role="presentation">
              <router-link
                to="/"
                :class="$route.path == '/'? 'active' : ''"
                class="nav-link text-uppercase">
                Home
              </router-link>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link text-uppercase"
                href="http://forum.p-rp.mp/"
              >FORUMS</a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link text-uppercase"
                href="#"
              >Donations</a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link text-uppercase"
                href="#"
              >SERVER INFORMATION</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #042E59;
  font-family: Abel, sans-serif;
  margin-bottom: 25px;
}

.nav-link:focus {
  color: #ddd !important;
}

</style>