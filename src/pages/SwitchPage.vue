<template>
  <div>
    <h1>基础用法</h1>
    <Switch v-model:value="check1" @onChange="change"></Switch>
    <Switch v-model:value="check2" disabled></Switch>
    <Switch v-model:value="check3" false-color="black" true-color="pink"></Switch>
    <Switch v-model:value="check4" false-color="black" true-color="pink" false-text="按月付费" true-text="按年付费"></Switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Switch from '../packages/switch/Switch.vue'
export default defineComponent({
  setup() {
    const check1 = ref(false)
    const check2 = ref(true)
    const check3 = ref(true)
    const check4 = ref(true)

    const change = (value) => {
      console.log('change', value)
    }
    return {
      check1,
      check2,
      check3,
      check4,
      change
    }
  },

  components: { Switch }
})
</script>
