<template>
  <div>
    <b-card class="mb-2">
        <div class="profile">

        <div class="cover">
            <img :src="profile_img" class="profile-avatar" />

            <div class="btns-group">
        <b-button variant="outline-primary plus">
          <b-icon icon="plus"></b-icon> تواصل
        </b-button>

        <b-button variant="outline-primary plus">
          <b-icon icon="plus"></b-icon> رسالة
        </b-button>

            </div>
        </div>
        <div class="info">
    <h6 class="profile-name">HusseinAlaa</h6>
    <p class="job">Full-stack Developer في Enjaz LLC.</p>
        </div>

        </div>

    </b-card>
  </div>
</template>


<script>
export default {
    data() {
        return {
            profile_img: this.$store.state.images.profile,
        }
    },
}
</script>


<style scoped>
.cover {
    background-image: url(https://static-exp1.licdn.com/sc/h/cpemy7gsm8bzfb5nnbbnswfdm);
    background-position: center;
    background-size: 100%;
    height: 11pc;
}
.card-body {
    padding: 0 !important;
}
.info {
    position: absolute;
    width: 100%;
    background: #fff;
    z-index: 3;
    padding-top: 56px;
    text-align: right;
    padding-right: 1pc;
}
.profile-avatar {
    border-radius: 100%;
    width: 7pc;
    height: 7pc;
    border: 4px solid #fff;
    position: absolute;
    z-index: 4;
    right: 1pc;
    bottom: -3pc;
}
.profile-name {
    font-weight: revert;
        font-family: droid-sans !important;
}
.btns-group {
    position: absolute;
    left: 1pc;
    bottom: -3pc;
    z-index: 8;
}
.plus {
    margin-right: 7px !important;
    border-radius: 8px !important;
    border: 1px solid #5d5d5d !important;
    color: #5d5d5d !important;
}
.plus:hover {
    color: #fff !important;
}

</style>