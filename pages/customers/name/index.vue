<template>
  <section class="user-view">
  <div class="content">
    <div class="subsection">
    <form style="margin: 15px 15px;">
      <div style="margin: 10px 0;">
        <span class="customer-fname">Enter Name: </span>
        <input type="text" :value="fname" v-model="fname"></input>
      </div>
    </form>
    <button type="button" class="button--grey" @click="submitSearch">Search Customer</button>

    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li v-for="customer in customers" style="padding: 10px 20px; margin: 0 25px; position: relative;">
      {{ customer.name + '&nbsp&nbsp&nbsp&nbsp' + customer.phone + '&nbsp&nbsp&nbsp&nbsp' + customer.address }}
      </li>
    </ul>

    </div>
  </div>
  </section>


</template>
<script>
import axios from '~/plugins/axios'

export default {

  data () {
    return {
      customers: '',
      fname: 'Search'
    }
  },

  // async asyncData () {
  //   let { data } = await axios.get('/api/customers/name')
  //   return { customers: data }
  // },

  methods: {
    submitSearch () {
      let self = this
      axios.post('/api/customers/name', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
        {
          name: self.fname
        }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          this.customers = (res.data)
          console.log(this.customers)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  },

  head () {
    return {
      title: `Search`
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
  .user-username
    font-size 24px
    font-weight 500
    color #707070
  .user-password
    font-size 24px
    font-weight 500
    color #707070
  a
    text-decoration underline
  &:hover
    color #515ec4

</style>
