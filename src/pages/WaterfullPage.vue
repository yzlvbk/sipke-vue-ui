<template>
  <div>
    <s-waterfall
      :width="150"
      :source="source"
      @scroll-bottom="scrollBottom">
      <template v-slot:default="slotProps">
        <div :style="'height:' + (slotProps.item*20) +'px;' + 'background: skyblue; margin-bottom: 10px; overflow: hidden;' ">
          <div>slot</div>
          <div>宽度{{slotProps.item}}</div>
        </div>
      </template>
    </s-waterfall>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sWaterfall from '../packages/waterfall/Waterfall.vue'
export default defineComponent({
  setup() {
    const source = [1, 2, 5, 8, 3, 13, 7, 4, , 10, 5, 6, 9, 2, 7, 8, 9]

    const scrollBottom = () => {
      console.log('scrollBottom');

    }

    return { source, scrollBottom }
  },
  components: { sWaterfall }
})
</script>

<style scoped>
</style>