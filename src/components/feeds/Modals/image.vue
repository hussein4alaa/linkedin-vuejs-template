<template>
<!-- Image Modal -->
  <b-modal id="modal-image" title="تحرير صورتك" ref="imageModal" >
      <div class="preview" v-if="imports.image">
          <img :src="imports.image" class="preview" />
      </div>
      <dir class="content" v-else>
          <center>
      <label for="uploadImage">تحديد الصورة لمشاركتها</label>
      <input type="file" id="uploadImage" class="hidden" model="imports.image" @change="importVideo" />
          </center>
      </dir>
  </b-modal>
<!-- // Image Modal -->
</template>

<script>
export default ({
    data() {
        return {
            imports: {
                image: null,
            }

        }
    },

    methods: {
        importVideo(e) {
          const file = e.target.files[0];
          this.imports.image = URL.createObjectURL(file);
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