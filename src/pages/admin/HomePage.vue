<template>
  <a-layout style="height: 100vh;">
    <a-layout-sider :resize-directions="['right']"
      style="
        max-width: 95%;
        width: auto; /* NOTE 2023-12-14: 使侧栏宽度能恰好容纳子元素内容
        在展开、收起菜单时动态变化宽度，使其能完全展示各选项内容 */
      ">

      <a-menu @menu-item-click="onClickMenuItem" >
        <a-sub-menu key="account">
          <template #title><icon-user />账号管理</template>

          <a-sub-menu key="admin_account">
            <template #title><icon-robot />管理员账号管理</template>
            <a-menu-item key="a_1">a 1</a-menu-item>
            <a-menu-item key="a_2">a 2</a-menu-item>
            <a-menu-item key="a_3">a 3</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="teacher_account">
            <template #title><icon-book />教师账号管理</template>
            <a-menu-item key="t_1">t 1 ssssssssssssssssssssssss</a-menu-item>
            <a-menu-item key="t_2">t 2</a-menu-item>
            <a-menu-item key="t_3">t 3</a-menu-item>
          </a-sub-menu>

          <a-sub-menu key="student_account">
            <template #title><icon-pen />学生账号管理</template>
            <a-menu-item key="s_1">s 1</a-menu-item>
            <a-menu-item key="s_2">s 2</a-menu-item>
            <a-menu-item key="s_3">s 3</a-menu-item>
          </a-sub-menu>

        </a-sub-menu>

        <a-sub-menu key="course">
          <template #title><icon-calendar />课程管理</template>
          <a-menu-item key="c_1">c 1</a-menu-item>
          <a-menu-item key="c_2">c 2</a-menu-item>
          <a-menu-item key="c_3">c 3</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="permission">
          <template #title><icon-lock />权限管理</template>
          <a-menu-item key="p_1">p 1</a-menu-item>
          <a-menu-item key="p_2">p 2</a-menu-item>
          <a-menu-item key="p_3">p 3</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {

  data() {
    return {
    }
  },
  mounted() {
    //this.user_id = this.$route.query.user_id
  },
  methods: {
    onClickMenuItem(key) {
      this.$message.info(key)
    }
  }
}
</script>

<style scoped>

</style>