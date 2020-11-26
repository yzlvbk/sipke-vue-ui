<template>
  <div style="height: 1000px;">
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <s-sticky :distance="20">
      <div style="text-align: center; background: skyblue; height: 40px;">sticky</div>
    </s-sticky>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sSticky from '../packages/sticky/Stickt.vue'
export default defineComponent({
  setup() {


    return {}
  },
  components: { sSticky }
})
</script>

<style scoped>
</style>