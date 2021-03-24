<template>
  <div>
    <div class="posts" v-for="index in 10" :key="index">
      <b-card>
        <b-card-text>
          <tr>
            <td><img :src="profile_img" class="profile-img" /></td>
            <td class="nameAndDate">
              <b class="puplisher-name">HusseinAlaa</b>
              <br />
              <p class="date">1 يوم</p>
            </td>
          </tr>
          <span class="post-text"> 💩💩💩💩💩 </span>
          <img :src="post" class="post" @click="openImage(post)" />
        </b-card-text>
        <div class="total">
          <span class="total-span">120 تعليق</span>
          <span class="total-span">231 اعجاب</span>
        </div>
        <hr />
        <b-button-group>
          <b-button variant="outline-primary image">
            <b-icon icon="cloud-arrow-up-fill"></b-icon> أرسال
          </b-button>
          <b-button variant="outline-primary video">
            <b-icon icon="share"></b-icon> مشاركة
          </b-button>
          <b-button variant="outline-primary event" @click="showInput(index)">
            <b-icon icon="chat-text"></b-icon> تعليق
          </b-button>
          <b-button variant="outline-primary news">
            <b-icon icon="hand-thumbs-up"></b-icon> اعجاب
          </b-button>
        </b-button-group>

        <div class="comments-2" v-if="chosenId == index">
          <b-form-input
            id="input-2"
            placeholder="اضافة تعليق"
            required
          ></b-form-input>



          <!-- Comments -->
          <div class="comments-list">
            <b-row cols="2" class="comments-row">
              <b-col sm="2" md="2" lg="2">
                <img :src="profile_img" class="commented-avatar" />
              </b-col>
              <b-col sm="10" md="10" lg="10" class="comment">
                <b class="commented-name">HusseinAlaa</b>
                <span class="comment-date">قبل 1 يوم</span>
                <br />
                <span class="comment-text">good job</span>
              </b-col>
            </b-row>
          </div>
          <!-- // Comments -->

          <!-- Comments -->
          <div class="comments-list">
            <b-row cols="2" class="comments-row">
              <b-col sm="2" md="2" lg="2">
                <img :src="profile_img" class="commented-avatar" />
              </b-col>
              <b-col sm="10" md="10" lg="10" class="comment">
                <b class="commented-name">HusseinAlaa</b>
                <span class="comment-date">قبل 1 يوم</span>
                <br />
                <span class="comment-text">good job</span>
              </b-col>
            </b-row>
          </div>
          <!-- // Comments -->
        </div>
      </b-card>
    </div>

    <!-- Image Modal -->

    <b-modal
      ref="my-modal"
      hide-footer
      title="💩💩💩💩💩"
      class="image-modal"
      style="max-width: 100%"
    >
      <div class="d-block text-center">
        <img :src="imageURL" class="show-img" />
      </div>
    </b-modal>

    <!-- // Image Modal -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile_img: this.$store.state.images.profile,
      post: this.$store.state.images.post,
      showModal: false,
      imageURL: null,
      chosenId: null,
      show: false,
    };
  },
  computed: {
    filterStyle() {
      if (this.show) {
        return {
          display: "block",
        };
      } else {
        return "";
      }
    },
  },
  methods: {
    showInput(index) {
      this.chosenId = index;
      console.log(index);
      // if want to make the button to hide input once clicked back
      // this.chosenId = this.chosenId !== index ? index : null;
    },
    openImage(url) {
      this.showModal = true;
      this.imageURL = url;
      this.$refs["my-modal"].show();
    },
  },
};
</script>



<style scoped>
.tr-comment {
  width: 100%;
}
b.commented-name {
  float: right;
}
.comments {
  display: none;
}
span.comment-date {
  float: left;
  font-size: 12px;
  color: #868686;
}
.comment {
  background: #e6e6e6;
  border-radius: 5px 0px 5px 5px;
}
.col-sm-2.col-md-2.col-lg-2 {
  margin: 0;
  padding-left: 0;
}
.comments-row {
  text-align: right;
  margin-top: 10px;
  width: 100%;
}
.commented-avatar {
  width: 44px;
  border-radius: 100%;
  height: 44px;
}
img.show-img {
  width: 100%;
  height: 100%;
}
.modal.show .modal-dialog {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0;
  height: 100%;
}
.profile-img {
  border-radius: 100%;
  width: 44px;
  height: 44px;
  margin-left: 7px;
}
.nameAndDate {
  margin: 0;
  padding: 0 !important;
  text-align: right;
  line-height: 16px;
  width: 100%;
  vertical-align: top;
}
.card {
  margin-top: 1pc;

  border-radius: 10px;
}
.card-body {
  text-align: left;
}
.post {
  width: 100%;
}
.btn-group {
  float: right;
  direction: ltr;
  width: 100%;
}
button.btn.btn-outline-primary {
  border: oldlace;
  color: #504e4e;
  border-radius: 2pc !important;
}
button.btn.btn-outline-primary:hover {
  background: darkgrey;
  border-radius: 2pc !important;
  color: #fff !important;
  transition: 0.5s;
}
.total {
  text-align: right;
  font-size: 12px;
}
.total-span {
  padding: 5px;
}
</style>