<template>
  <div>
    <section>
      <button @click="visible1 = !visible1">纵向展开/收起</button>
      <s-spread :visible="visible1" horizontal>
        <div style="padding: 10px; width: 300px; height:200px; background: pink;"></div>
      </s-spread>
    </section>

    <section>
      <button @click="visible2 = !visible2">横向展开/收起</button>
      <s-spread :visible="visible2">
        <div style="padding: 10px; width: 300px; height:200px; background: red;"></div>
      </s-spread>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import sSpread from '../packages/spread/Spread.vue'
export default defineComponent({
  setup() {
    const visible1 = ref(true)

    const visible2 = ref(true)

    return { visible1, visible2 }
  },
  components: { sSpread }
})
</script>

<style scoped>
</style>