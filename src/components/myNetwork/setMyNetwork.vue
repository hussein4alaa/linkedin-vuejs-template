<template>
  <div>
    <b-card style class="mb-2 new">
      <b-card-text class="padding-r-0">
        <p class="options-p">إدارة شبكتي</p>

        <ul class="options" v-if="showLess">
          <li class="menu" v-for="link in links.slice(0, 1)" :key="link.text">
            <router-link class="link" :to="{ name: link.link, params: { id: link.param } }">
              <span class="icon-list"><b-icon :icon="link.icon"></b-icon></span> {{ link.text }}
            </router-link>
          </li>
        </ul>
        <ul class="options" v-else>
          <li class="menu" v-for="link in links" :key="link.text">
            <router-link class="link" :to="{ name: link.link, params: { id: link.param } }">
              <span class="icon-list"><b-icon :icon="link.icon"></b-icon></span> {{ link.text }}
            </router-link>
          </li>
        </ul>

        <br />
        <p class="options-p" v-if="showLess">
          <button class="seeMore" v-on:click="showLess = false">
            <b-icon icon="arrow-down"></b-icon> عرض اكثر
          </button>
        </p>
        <p class="options-p" v-else>
          <button class="seeMore" v-on:click="showLess = true">
            <b-icon icon="arrow-up"></b-icon> عرض اقل
          </button>
        </p>
        <img :src="ads" class="poster" />

      </b-card-text>

    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile_img: this.$store.state.images.profile,
      ads: this.$store.state.images.ads,
      showLess: false,
      links: [
        {
          text: "زملاء",
          icon: "person-circle",
          link: "myNetworkById",
          param: "Co-workers",
        },
        {
          text: "اعضاء الفريق",
          icon: "person-lines-fill",
          link: "myNetworkById",
          param: "Team-Members",
        },
        {
          text: "جهات اتصال",
          icon: "file-earmark-person-fill",
          link: "myNetworkById",
          param: "Contacts",
        },
        {
          text: "الاشخاص الذين اتابعهم",
          icon: "person-plus-fill",
          link: "myNetworkById",
          param: "Following",
        },
        {
          text: "المناسبات",
          icon: "calendar2-event",
          link: "myNetworkById",
          param: "Invites",
        },
        {
          text: "الصفحات",
          icon: "paperclip",
          link: "myNetworkById",
          param: "Pages",
        },
        {
          text: "النشرات الدورية",
          icon: "newspaper",
          link: "Feed",
          param: "",
        },
        {
          text: "وسومات (هاشتاغ)",
          icon: "hash",
          link: "Feed",
          param: "",
        },
      ],
    };
  },
};
</script>

<style scoped>
span.icon-list {
    font-size: 19px;
}
.poster {
    width: 100%;
    padding: 6px;
    border-top: 1px solid #dadada;
    border-bottom: 1px solid #dadada;
}
.seeMore {
  border: 0;
  color: #000;
  background: #fff;
}
.options-p {
  padding-right: 1pc;
  margin-bottom: 7px;
}
.link {
  padding-right: 1pc;
  color: #737373;
}
.padding-r-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;
}
.options {
  margin: 0;
  padding: 0;
}
.card-body {
  padding: 0;
  text-align: right;
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
.container {
  padding-top: 2pc;
}
.menu {
  padding-top: 6px;
  padding-bottom: 6px;
  transition: 0.5s;
}
.menu:hover {
  background: #efefef;
  transition: 0.5s;
}
</style>