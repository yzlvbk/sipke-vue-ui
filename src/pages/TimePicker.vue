<template>
  <div>
    <TimePicker></TimePicker>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimePicker from '../packages/time-picker/TimePicker.vue'
export default defineComponent({
  setup() {


    return {}
  },
  components: { TimePicker }
})
</script>

<style scoped>
</style>