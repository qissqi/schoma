<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped>
/* NOTE 2023-12-08: style 添加 scoped 属性以将 CSS 仅限于此组件 */

h1 {
  color: #42b983;
}
</style>
