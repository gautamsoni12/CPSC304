<template>
  <section class="user-view">
    <div class="content">
      <div class="subsection">
        <form style="margin: 15px 15px;">
            <div style="margin: 10px 0;">
              <span class="user-username">Warehouse-Address: </span>
              <input type="text" :value="w.address" v-model="w.address"></input>
            </div>
        </form>
        <button type="button" class="button--grey" @click="submitUpdate">Update</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  asyncData ({ params, error }) {
    return axios.get('/api/warehouse/' + params.address)
      .then((res) => {
        return { warehouse: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Warehouse not found' })
      })
  },

  data () {
    return {}
  },

  methods: {
    submitUpdate () {
      let self = this

      axios.post('/api/warehouse/update', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
          {
            address: self.w.address
          }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          self.$nuxt.$router.replace({ path: res.data })
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },

  head () {
    return {
      title: `Update Warehouse: ${this.w.address}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-view
  padding-top 0

.content
  position absolute
  width 100%

.subsection
  background-color #fff
  border-radius 2px
  margin 25px 0
  transition all .5s cubic-bezier(.55,0,.1,1)
  padding 10px 30px 10px 30px
  position relative
  line-height 20px
  .subsection-title
    margin 25px 10px
    font-size 26px
    font-weight 500
  .w-address
    font-size 24px
    font-weight 500
    color #707070
  a
    text-decoration underline
    &:hover
      color #515ec4

</style>
