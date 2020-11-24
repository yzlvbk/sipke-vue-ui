<template>
  <div>
    <TimePicker default-value="12:30:30" @change='change'></TimePicker>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimePicker from '../packages/time-picker/TimePicker.vue'
export default defineComponent({
  setup() {
    const change = (val) => {
      console.log('change', val)

    }

    return { change }
  },
  components: { TimePicker }
})
</script>

<style scoped>
</style>