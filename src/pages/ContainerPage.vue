<template>
  <div>
    <h1>普通上中下三栏布局</h1>
    <s-container style="height: 300px;">
      <!-- s-header 默认height 60px -->
      <s-header style="background: red;">header</s-header>
      <s-main>main</s-main>
      <!-- s-footer 默认height 60px -->
      <s-footer style="background: red;">footer</s-footer>
    </s-container>

    <h1>上中下三栏布局，主体部分带侧边栏</h1>
    <s-container>
      <s-header style="background: red;">header</s-header>
      <s-container>
        <!-- s-slider 默认width 300px -->
        <s-sider width="100px" style="background: gray;">sider</s-sider>
        <s-main>main</s-main>
      </s-container>
      <s-footer style="background: red;">footer</s-footer>
    </s-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sContainer from '../packages/container/Container.vue'
import sFooter from '../packages/container/Footer.vue'
import sHeader from '../packages/container/Header.vue'
import sMain from '../packages/container/Main.vue'
import sSider from '../packages/container/Sider.vue'
export default defineComponent({
  setup() {


    return {}
  },
  components: { sContainer, sFooter, sHeader, sMain, sSider }
})
</script>

<style scoped>
</style>