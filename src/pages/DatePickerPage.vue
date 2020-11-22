<template>
  <div>
    <DatePicker></DatePicker>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DatePicker from '../packages/date-picker/DatePicker.vue'
export default defineComponent({
  setup() {


    return {}
  },
  components: { DatePicker }
})
</script>

<style scoped>
</style>