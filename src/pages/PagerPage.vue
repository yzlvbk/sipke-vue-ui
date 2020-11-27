<template>
  <div>
    <h1>页数较少时完全显示</h1>
    <s-pager :total="7" v-model:current="current1"></s-pager>

    <h1>页数较多时非连续页之间显示分隔符</h1>
    <s-pager :total="50" v-model:current="current2"></s-pager>

    <h1>simple 属性开启简洁样式</h1>
    <s-pager :total="50" v-model:current="current3" simple></s-pager>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import sPager from '../packages/pager/Pager.vue'
export default defineComponent({
  setup() {
    const current1 = ref(1)

    const current2 = ref(10)

    const current3 = ref(22)

    return { current1, current2, current3 }
  },
  components: { sPager }
})
</script>

<style scoped>
</style>