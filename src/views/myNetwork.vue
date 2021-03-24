<template>
  <b-container dir="rtl">
    <b-row>
      <b-col sm="3" md="12" offset-md="12" lg="3" offset-lg="0">
          <SetMyNetwork />
      </b-col>
      <b-col sm="9" md="12" offset-md="12" lg="9" offset-lg="0">
          <List />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SetMyNetwork from '../components/myNetwork/setMyNetwork'
import List from '../components/myNetwork/list'

export default ({
    components: {
        SetMyNetwork,
        List,
    },
    data() {
        return {

        }
    },
})
</script>


<style scoped>
    .container {
  padding-top: 5pc
    
    }
</style>