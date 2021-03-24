<template>
  <b-container dir="rtl">
    <b-row >
      <b-col sm="12" md="12" lg="3">
          <ProfileSide />
      </b-col>
      <b-col sm="12" md="12" lg="6">
          <CreatePost />
          <Post />
      </b-col>
      <b-col sm="12" md="12" lg="3">
          <Suggestions />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProfileSide from '../feeds/profileSide'
import CreatePost from '../feeds/createPost'
import Post from '../feeds/post'
import Suggestions from '../feeds/suggestions'
export default {
    components: {
        ProfileSide,
        CreatePost,
        Post,
        Suggestions,
    }
}
</script>


<style scoped>
.container {
  padding-top: 5pc
}
</style>