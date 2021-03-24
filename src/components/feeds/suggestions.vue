<template>
  <div>
    <b-card header-tag="header" footer-tag="footer">
      <template #header> اقتراحات </template>

      <b-card-text v-for="suggestion in suggestions" :key="suggestion.name">
        <b-row cols="2">
          <b-col class="img-col">
            <img :src="suggestion.img" class="profile-img" />
          </b-col>
          <b-col>
            <b class="name-title" v-text="suggestion.name"></b>
            <p class="job-title" v-text="suggestion.job"></p>
          </b-col>
        </b-row>

        <b-button variant="outline-primary plus">
          <b-icon icon="plus"></b-icon> متابعة
        </b-button>
      </b-card-text>

      <br>
    </b-card>
  </div>
</template>


<script>
export default {
  data() {
    return {
      profile_img: this.$store.state.images.profile,
      suggestions: this.$store.state.suggestions,
    };
  },
};
</script>


<style scoped>
button.btn.btn-outline-primary.plus:hover {
    color: #fff;
}
img.profile-img {
  width: 3pc;
  height: 3pc;
  border-radius: 3pc;
}
.card-body {
  padding: 4px 1px 3px 1px;
}
.img-col.col {
  max-width: 6pc;
  padding: 0;
}
.job-title {
  font-size: 11px;
  color: gray;
}
.name-title {
  font-size: 13px;
}
.card {
        border-radius: 10px;
}
button.btn.btn-outline-primary.plus {
  color: #525252;
  border: 1px solid #7d7d7d;
  border-radius: 9px;
}
footer.card-footer {
  margin: 0;
  padding: 0;
  border: 0;
  background: #fff;
  padding-bottom: 1pc;
}
</style>