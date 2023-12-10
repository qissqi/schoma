<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ "user_id=" + user_id }}</h1>
    <a-button @click="click_btn" type="primary">
      click me
    </a-button>
  </div>
</template>
  
<script>
/* INTRO 2023-12-11: 引入 student 模块的 api */
/* NOTE 2023-12-08: @ 是 /src 的化名 */
import student_api from '@/api/student/student-api'

export default {

  data() {
    return {
      msg: "student home page",
      user_id: ""
    }
  },

  mounted() {
    this.user_id = this.$route.query.user_id /* INTRO 2023-12-11: 获取其他页面传递过来的数据 */
  },

  methods: {
    click_btn() {

      /* 调用 student 模块的 api */
      student_api.hello_world()
      .then(resp => {
        console.log(resp)
        this.msg = resp.data
      })
      .catch(ree => {
        console.error(err)
      })

      /* 调用 student 模块的 api */
      student_api.ice_bee()
      .then(resp => {
        this.$message.info(resp.data)
      })
      .catch(ree => {
        console.error(err)
      })

    }
  }
}
</script>

<style scoped> /* NOTE 2023-12-08: style 添加 scoped 属性以将 CSS 仅限于此组件 */

</style>
