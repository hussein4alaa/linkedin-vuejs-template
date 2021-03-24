<template>
<div>

    <b-card footer-tag="footer">
      <b-card-text>
          <tr>
              <td><img :src="profile_img" class="profile-img" /></td>
              <td class="w100">
                    <b-form-input
                    id="input-2"
                    placeholder="بدء منشور"
                    required
                    ></b-form-input>

              </td>
          </tr>
      </b-card-text>
      <template #footer>
    <b-button-group>
      <b-button variant="outline-primary image" v-b-modal.modal-image>
        <b-icon icon="card-image"></b-icon> صورة
      </b-button>
      <b-button variant="outline-primary video" v-b-modal.modal-video>
        <b-icon icon="camera-video"></b-icon> فيديو
      </b-button>
      <b-button variant="outline-primary event" v-b-modal.modal-event>
        <b-icon icon="calendar2-event"></b-icon> مناسبة
      </b-button>
      <router-link :to="{ name: 'newPost'}" tag="button" class="outline-primary news">
      <b-icon icon="newspaper"></b-icon> كتابة مقال
      </router-link>
    </b-button-group>

      </template>
    </b-card>

<ImageModal />
<VideoModal />
<EventModal />

</div>
</template>

<script>
import VideoModal from './Modals/video'
import ImageModal from './Modals/image'
import EventModal from './Modals/event'
export default {
    components: {
        VideoModal,
        ImageModal,
        EventModal,
    },
    data() {
        return {
            profile_img: this.$store.state.images.profile,
            imports: {
                image: null,
                video: null,
            }
        }
    },


    methods: {
        importImage(e) {
          const file = e.target.files[0];
          this.imports.image = URL.createObjectURL(file);
        },
    }
}
</script>

<style scoped>
.preview {
    width: 100%;
}
.hidden {
    display: none;
}
.content {
    line-height: 4pc;
}
.profile-img {
border-radius: 100%;
    width: 44px;
    height: 44px;
    margin-left: 7px;
}

.w100 {
    width: 100%;
}
footer.card-footer {
    background: #fff;
    border: 0;
}
.image {
    color: #70b5f9 !important;
}
.video {
    color: #7fc15e !important;
}
.event {
    color: #e7a33e !important;
}
.news {
    color: #f5987e !important;
    margin-right: 18px;
    border: 0;
    transition: 0.5s;
    border-radius: 2pc !important;
    background: #fff;
}
.news:hover {
    background: darkgrey;
    border-radius: 2pc !important;
    color: #fff !important;
        transition: 0.5s;

}
.card {
        border-radius: 10px;
}
button.btn.btn-outline-primary {
    margin-right: 18px;
    border: 0;
        transition: 0.5s;
        border-radius: 2pc !important;

}
button.btn.btn-outline-primary:hover {
    background: darkgrey;
    border-radius: 2pc !important;
    color: #fff !important;
        transition: 0.5s;
}
</style>