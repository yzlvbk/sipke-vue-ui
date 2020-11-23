<template>
  <div>
    <DatePicker default-value="2008-10-10" @change="change"></DatePicker>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DatePicker from '../packages/date-picker/DatePicker.vue'
export default defineComponent({
  methods: {
    change(date) {
      console.log('change', date)
    }
  },
  components: { DatePicker }
})
</script>

<style scoped>
</style>