<template>
  <div>
    <h1>基础用法</h1>
    <Icon name="success" />
    <Icon name="error" />
    <Icon name="warning" />
    <Icon name="info" />
    <Icon name="power" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../packages/icon/Icon.vue'
export default defineComponent({
  components: {
    Icon
  }
})
</script>

<style scoped>
</style>