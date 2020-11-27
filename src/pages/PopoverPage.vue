<template>
  <div>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <s-popover>
      <template v-slot:content>弹出内容</template>
      <s-button>click激活</s-button>
    </s-popover>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <s-popover position="bottom">
      <template v-slot:content>弹出内容</template>
      <s-button>click激活</s-button>
    </s-popover>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <div>
      <span>111111111111111111111111</span>
      <s-popover position="left">
        <template v-slot:content>弹出内容</template>
        <s-button>click激活</s-button>
      </s-popover>
    </div>

    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <s-popover position="right">
      <template v-slot:content>弹出内容</template>
      <s-button>click激活</s-button>
    </s-popover>

    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <h1>1</h1>
    <s-popover trigger="hover" position="right">
      <template v-slot:content>弹出内容</template>
      <s-button>hover激活</s-button>
    </s-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sPopover from '../packages/popover/Popover.vue'
import sButton from '../packages/button/Button.vue'
export default defineComponent({
  setup() {


    return {}
  },
  components: { sPopover, sButton }
})
</script>

<style scoped>
</style>