<template>
  <div class="slideshow container shadow">
    <div class="row">
      <div class="col" style="margin-top: 14px;">
        <div class="" style="height:232px; max-width:1200px ">
          <img
            v-for='(slide, i) in slides'
            :class="{active: i == activeSlide}"
            class="mySlides" :src="slide" style="width: 100%; height:100%" />
          <div class="w3-container" style="width:100%">
            <div class="left" @click="left">&#10094;</div>
            <div class="right" @click="right">&#10095;</div>
            <span
              v-for='i in 3'
              class='bullet'
              :class="{active: activeSlide == i-1}"
              @click='slide(i-1)'
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <div style="background-color: #042e59;">
            <h1
              class="text-uppercase text-center"
              style="font-size: 13px;color: #ffffff;margin-top: -2px;"
            >
              NOW PLAYING
              0/0 PLAYERS
            </h1>
          </div>
          <hr class="solid" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slideshow {
  background: #fff;
  margin: 0 auto;
  margin-top: 25px;
  user-select: none;
}

.mySlides {
  display: none;
}
.mySlides.active {
  display: block;
}

.w3-container {
  color: #fff;
  text-align: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%,0%);
  padding: 0 40px;
  font-size: 18px;
  margin: 1px 0;
}

.left {float: left;}
.right {float: right;}

.left, .right, .bullet {
  cursor: pointer;
}

.bullet {
  border: 1px solid #fff;
  display: inline-block;
  height: 13px;
  width: 13px;
  margin: 0 4px;
  border-radius: 50%;
}
.bullet.active {background: #fff}
</style>

<script>
import slide1 from '@/assets/img/slideshow-1.jpg'
import slide2 from '@/assets/img/slideshow-2.jpg'
import slide3 from '@/assets/img/slideshow-3.jpg'

export default {
  data() {
    return {
      slides: [slide1, slide2, slide3],
      activeSlide: 0
    }
  },

  methods: {
    slide(i) {
      this.activeSlide = i
    },

    left() {
      this.activeSlide--
      if (this.activeSlide < 0)
        this.activeSlide = 2
    },

    right() {
      this.activeSlide++
      if (this.activeSlide > 2)
        this.activeSlide = 0
    }
  }
}
</script>