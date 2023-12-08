<template>
  <div class="main">
    <div>
      <input type="text" v-model.lazy="user_id">
      <br>
      <input type="password" v-model.lazy="passwd">
    </div>
    
    {{ user_id }}
    {{ passwd }}
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      user_id: "",
      passwd: ""
    };
  },
  methods: {

  }
}
</script>

<style scoped>
.main {
  background-color: aqua;
}
</style>
