<template>
  <div>
    <HelloWorld msg="home"/>
  </div>
</template>

<script>
/* NOTE 2023-12-08: @ 是 /src 的化名 */
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>
