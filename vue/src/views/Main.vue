<template>
  <div class="wrapper">
    <notifications></notifications>
    <navbar></navbar>
    <slideshow/>
    <div class="container shadow" style="background: #fff;">
      <div class="row">
        <main class="col-lg-9 order-2 order-lg-1">
          <router-view></router-view>
        </main>
        <aside class="col order-1 order-lg-2">
          <sidebar></sidebar>
        </aside>
      </div>
    </div>
    <footer>
      <h1 class="text-center" style="font-family: Abel, sans-serif;font-size: 13PX;color: #fff;margin-top: 0px;"><br>Copyright © 2020 Pacific Roleplay - designed by Filip Grzegorz Jurewicz and Developed by Mos. All rights reserved.<br><br></h1>
    </footer>
  </div>
</template>

<script>
import '@/assets/bootstrap/css/bootstrap.min.css'
import '@/assets/fonts/fontawesome-all.min.css'
import '@/assets/fonts/font-awesome.min.css'
import '@/assets/css/styles.css'

import navbar from '@/components/navbar.vue'
import slideshow from '@/components/slideshow.vue'
import sidebar from '@/components/sidebar.vue'

export default {
  components: {
    navbar, slideshow, sidebar
  }
}
</script>