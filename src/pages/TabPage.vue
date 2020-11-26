<template>
  <div>
    <s-tab v-model:active-key="activeKey">
      <s-tab-item class="tab-item-doc" key="1" title="学习">学习</s-tab-item>
      <s-tab-item class="tab-item-doc" key="2" title="放映厅">放映厅</s-tab-item>
      <s-tab-item class="tab-item-doc" key="3" title="单机游戏">单机游戏</s-tab-item>
    </s-tab>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import sTab from '../packages/tabs/Tab.vue'
import sTabItem from '../packages/tabs/TabItem.vue'
export default defineComponent({

  setup() {
    const activeKey = ref('2')
    return {
      activeKey
    }
  },
  components: { sTab, sTabItem }
})
</script>

<style scoped>
</style>