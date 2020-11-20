<template>
  <div>
    <h2>基础用法</h2>
    <Radio :options="options"></Radio>
    <h2>默认选中</h2>
    <Radio :options="options" :defaultIndex="1" @value-change="changeValue"></Radio>
    <h2>垂直</h2>
    <Radio :options="options" :defaultIndex="0" vertical></Radio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Radio from '../packages/radio/Radio.vue'
import Option from '../packages/radio/Option.vue'
export default defineComponent({
  setup() {
    const options = [
      { label: '苹果', value: 'Apple' },
      { label: '梨', value: 'Pear' },
      { label: '橘子', value: 'Orange' }
    ]

    const changeValue = (value) => {
      console.log('changevalue', value)

    }

    return { options, changeValue }
  },
  components: { Radio, Option }
})
</script>

<style scoped>
</style>