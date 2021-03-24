<template>
  <div>

      <div class="publish-group">
      <b-button variant="outline-primary">
          نشر
      </b-button>
      </div>


    <div class="cover" v-if="!cover">
      <label for="hidden">
        <img
          src="https://static-exp1.licdn.com/sc/h/5jgezfckrwfplxzsbikgn74og"
          class="image-icon"
        />
      </label>
    </div>
    <div class="cover-2" v-if="cover">
      <b-button variant="outline-danger remove" v-on:click="cover = null">
        <b-icon icon="trash"></b-icon>
      </b-button>

      <label for="hidden">
        <img
          :src="cover"
          class="image-chose"
        />
      </label>

    </div>
    

      <input type="file" id="hidden" @change="changeCover"/>

    <b-card-group>
      <b-card>
        <div class="container">
          <h6 class="mb-0">
            <input type="text" placeholder="العنوان الرئيسي" class="title" />
          </h6>

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            class="content"
            placeholder="اكتب هتا..."
          ></textarea>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
export default({
    data() {
        return {
            cover: null,
        }
    },

    methods: {
        changeCover(e) {
          const file = e.target.files[0];
          this.cover = URL.createObjectURL(file);
        }
    }
})
</script>



<style scoped>
.publish-group {
        border: 1px solid #9c9c9c;
        margin-top: 3pc;
    background: #fff;
    border-top: 1px solid #f2f2f2;
    padding: 6px 13px;
    float: left;
    width: 100%;
    text-align: left;
}
.remove {
    position: absolute;
    left: 1pc;
    top: 7pc;
    color: #fff;
    background: red;
    border: 0px;
}
#hidden {
  display: none !important;
}
.cover {
  background: #f3f2ef;
  width: 100%;
  line-height: 16pc;
  background: #f3f2ef;
  width: 100%;
}
.image-icon {
  height: 6pc;
}
.image-chose {
  height: 16pc;
}

.content {
  width: 100%;
  direction: rtl;
  border: 0;
}
.card-body {
  padding: 0px 5px 9px 16px;
}
.title {
  width: 100%;
  height: 3pc;
  font-size: 20px;
  direction: rtl;
  border: 0;
}
header.card-header {
  background: #fff;
  border: 0;
}
button.btn.btn-outline-primary {
    background: #007bff;
    color: #fff;
}
</style>