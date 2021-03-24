<template>
<!-- Video Modal -->
  <b-modal id="modal-video" title="اختيار فيديو" ref="imageModal" >
      <div class="preview" v-if="imports.video">
          <video :src="imports.video" class="preview" controls></video>
      </div>
      <dir class="content" v-else>
          <center>
      <label for="uploadVideo">تحديد ملفات الفيديو لمشاركتها</label>
      <input type="file" id="uploadVideo" class="hidden" model="imports.video" @change="importVideo" />
          </center>
      </dir>
  </b-modal>
<!-- // Video Modal -->
</template>

<script>
export default ({
    data() {
        return {
            imports: {
                video: null,
            }

        }
    },

    methods: {
        importVideo(e) {
          const file = e.target.files[0];
          this.imports.video = URL.createObjectURL(file);
        }
    }
})
</script>

<style scoped>
.preview {
    width: 100%;
}
.hidden {
    display: none;
}
</style>