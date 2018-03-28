<template>
  <section class="users-view">
    <div class="content">
      <div class="subsection">
        <div style="margin: 25px 10px;">
          <span class="subsection-title" style="vertical-align: middle;">Employees in Database</span>
          <nuxt-link class="button--grey" style="padding: 5px 20px; text-decoration: none;" to="/employee/all_warehouses">Warehosues</nuxt-link>

        </div>
        <table style="padding:30px">
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Employee_Sin</th>
            <th>Position</th>
            <th>Address</th>
          </tr>
          <tr v-for="e in employees" >
              <td>
                {{ e.fname + ' '+ e.lname }}
              </td>
              <td>
                {{ e.phone }}
              </td>
              <td>
                {{ e.email }}
              </td>
              <td>
                {{ e.employee_sin }}
              </td>
              <td>
                {{ e.position }}
              </td>
              <td>
                {{ e.address }}
              </td>
            </tr>



        </table>
      </div>
    </div>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/employees')
    return { employees: data }
  },

  head () {
    return {
      title: 'Employee'
    }
  }
}
</script>

<style lang="stylus" scoped>
.users-view
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
    font-size 26px
    font-weight 500
  .title
    font-size 18px
    font-weight 500
  a
    text-decoration underline
    &:hover
      color #515ec4

</style>
