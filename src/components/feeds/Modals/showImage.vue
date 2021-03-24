<template>
  <div>
    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
  export default {
      props: [
          'showModal'
      ],
    data() {
        return {
            show: false
        }
    },

  watch: {
          changeModal() {
          if(this.showModal) {
              console.log(this.showModal)
            this.$refs['my-modal'].show()
          }else{
            this.$refs['my-modal'].hide()
          }
          }
            },

methods: {
              changeModal() {
          if(this.showModal) {
              console.log(this.showModal)
            this.$refs['my-modal'].show()
          }else{
            this.$refs['my-modal'].hide()
          }
          }
}

  }
</script>