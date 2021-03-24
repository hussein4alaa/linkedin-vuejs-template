<template>
  <b-container dir="rtl">
    <b-row >
      <b-col sm="12" md="12" lg="9">
          <Cover />
          <About />
          <Jobs />
      </b-col>
      <b-col sm="12" md="12" lg="3">
          <Suggestions />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Cover from '../../components/profile/cover'
import About from '../../components/profile/about'
import Jobs from '../../components/profile/jobs'
import Suggestions from '../../components/feeds/suggestions'

export default({
  components: {
    Cover,
    About,
    Jobs,
    Suggestions
  },
    data() {
      return {
          
      }  
    },
})
</script>


<style scoped>
.container {
    padding-top: 5pc;
}
</style>