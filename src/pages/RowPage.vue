<template>
  <div>
    <h1>1</h1>
    <s-row class="first">
      <s-col :mobile="{8:0}">8</s-col>
      <s-col :mobile="{8:0}">8</s-col>
      <s-col :mobile="{8:0}">8</s-col>
    </s-row>

    <h1>2</h1>
    <s-row class="second">
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
      <s-col :mobile="{4:0}">4</s-col>
    </s-row>

    <h2>设置间隙</h2>
    <s-row :gutter="20">
      <s-col :mobile="{8:0}">

        <div style="background: red;">间隙20px</div>
      </s-col>

      <s-col :mobile="{8:0}">
        <div>间隙20px</div>
      </s-col>

      <s-col :mobile="{8:0}">
        <div style="background: red;">间隙20px</div>
      </s-col>
    </s-row>
    <s-row>
      <s-col :mobile="{8:0}">
        <div style="background: red;">偏移8</div>
      </s-col>
      <s-col :mobile="{8:8}">
        <div style="background: red;">偏移8</div>
      </s-col>
    </s-row>

    <h2>响应式布局</h2>
    <s-row gutter="10">
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>
      <s-col
        :mobile="{12:0}"
        :npc="{6:0}"
        :wpc="{3:0}">
        内容
      </s-col>

    </s-row>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sRow from '../packages/grid/Row.vue'
import sCol from '../packages/grid/Col.vue'
export default defineComponent({
  setup() {


    return {}
  },
  components: { sRow, sCol }
})
</script>

<style scoped>
.first {
  background-color: pink;
}
</style>