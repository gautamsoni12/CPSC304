<template>
  <section class="user-view">
  <div class="content">
    <div class="subsection">
    <form style="margin: 15px 15px;">
      <div style="margin: 10px 0;">
        <span class="customer-fname">Enter Category Name: </span>
        <input type="text" :value="category_name" v-model="category_name"></input>
      </div>
    </form>
    <button type="button" class="button--grey" @click="submitSearch">Get Item Count</button>

    <ul style="list-style-type: none; padding: 0; margin: 0;">
      <li v-for="r in result" style="padding: 10px 20px; margin: 0 25px; position: relative;">
        Number of items in category: {{ ' ' + r.count }}
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
      result: '',
      category_name: 'Search'
    }
  },

  methods: {
    submitSearch () {
      let self = this
      axios.post('/api/items/count', {
        headers:
          {
            'Content-Type': 'application/json'
          },
        data:
        {
          category_name: self.category_name
        }})
        .then((res) => {
          // res.data should contain the url for redirecting... bad practice
          this.result = (res.data)
          console.log(this.result)
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
