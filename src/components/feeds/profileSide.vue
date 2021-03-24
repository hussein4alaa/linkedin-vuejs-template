<template>
    <div>
  <b-card
    style="max-width: 20rem;"
    class="mb-2"
  >
  <div class="cover">
      <img :src="profile_img" class="profile-img-side">

  </div>
  <br />
    <b-card-text>
        <b><router-link :to="{ name: 'Profile', params: { id: 'HusseinAlaa'} }">HusseinAlaa</router-link></b>
        <p class="current-job">Full-Stack Developer في Enjaz LLC</p>
        <hr>
        <tr>
            <td class="td-title">من زار ملفك الشخصي من الزملاء</td>
            <td class="font-size-12">27</td>
        </tr>
    </b-card-text>

  </b-card>


  <b-card
    style="max-width: 20rem;"
    class="mb-2 new"
  >
<p>حديث</p>
  <br />
    <b-card-text>
        <p>#الاتصال اللاسلكي</p>
        <p>#الطاقة_البديلة</p>
        <p>#الهندسة</p>
    </b-card-text>

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
    background-size: 462px;
    height: 3pc;
        border-radius: 10px 10px 0px 0px;
}
.card-body {
    padding: 0;
}
.card {
        border-radius: 10px;
}
img.profile-img-side {
    border-radius: 100%;
    margin: 17px;
    width: 4pc;
    border: 3px solid #fff;
}
p.card-text {
    padding: 24px;
}
p.current-job {
    font-size: 12px;
    color: gray;
}
.td-title {
    width: 70%;
        text-align: right;
    font-size: 12px;
}
.font-size-12 {
    font-size: 12px;
}
</style>