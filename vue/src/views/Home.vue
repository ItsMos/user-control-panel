<template>
  <div>
    <div v-for="x in 3" class="shadow solidnews topnews" style="margin-bottom: 15px;">
      <h1
        class="text-center"
        style="font-family: Abel, sans-serif;font-size: 30px;margin-left: 5px;"
      >
        <strong>Article Title</strong>
      </h1>
      <h1
        class="text-center"
        style="font-family: Abel, sans-serif;font-size: 15px;margin-left: 5px;margin-top: -10px;margin-bottom: -8px;"
      >
        25th, January, 2020
        <br />
      </h1>
      <hr />
      <h1
        class="text-center"
        style="font-family: Abel, sans-serif;font-size: 10px;margin-top: -20px;"
      >
        Written by Nomesurname
        <br />
      </h1>
      <img
        class="text-center img-thumbnail img-fluid"
        src="@/assets/img/post-image-01.jpg"
        style="height: 300px"
      />
      <div style="font-size: 13;">
        <p
          class="text-left"
          style="font-family: Abel, sans-serif;padding-right: 50px;padding-left: 25px;font-size: 15px;"
        >
          Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Mauris at convallis tortor. Proin porta turpis at
          ipsum accumsan rutrum. Aliquam erat volutpat. Praesent quam massa, faucibus in lacus sit amet,
          porttitor vulputate
          enim. Proin a magna vitae libero posuere imperdiet. Mauris vel dolor ac leo imperdiet aliquam nec
          dictum ex. Etiam pharetra est consectetur semper maximus. Maecenas id quam aliquam, elementum arcu
          quis, tempor nunc.
          Proin sit amet placerat ipsum. Phasellus porta risus metus, eget pretium ligula tempus vel.
          <br />
        </p>
      </div>
      <hr />
      <h1
        class="text-right"
        style="font-family: Abel, sans-serif;font-size: 13px;padding-right: 15px;"
      >
        5 comments
        <br />
        <button
          class="btn btn-dark btn-sm"
          type="button"
          style="font-size: 13;background-color: rgb(4,46,89);margin-top: 5px;"
        >Read More</button>
        <br />
      </h1>
    </div>
    <div class="d-xl-flex justify-content-xl-center pagination" style="margin-bottom: 15px;">
      <a href="#" style="font-family: Abel, sans-serif;">
        «
        <br />
      </a>
      <a class="active" href="#" style="font-family: Abel, sans-serif;">1</a>
      <a href="#" style="font-family: Abel, sans-serif;">2</a>
      <a href="#" style="font-family: Abel, sans-serif;">3</a>
      <a href="#" style="font-family: Abel, sans-serif;">4</a>
      <a href="#" style="font-family: Abel, sans-serif;">5</a>
      <a href="#" style="font-family: Abel, sans-serif;">6</a>
      <a href="#" style="font-family: Abel, sans-serif;">
        »
        <br />
      </a>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding: 4px 0;
}
img {
  display: block;
  margin: auto;
}
</style>