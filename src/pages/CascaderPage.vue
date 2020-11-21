<template>
  <div>
    <h2>支持清除 clearable</h2>
    <Cascader :source="shcool" v-model:selected="selected" clearable></Cascader>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Cascader from '../packages/cascader/Cascader.vue'
export default defineComponent({
  setup() {
    const shcool = {
      "label": "某学校",
      "value": 10000,
      "children": [{
        "label": "高中部",
        "value": 110000,
        "children": [{
          "label": "一年级",
          "value": 11100,
          "children": [{
            "label": "一班",
            "value": 11101
          },
          {
            "label": "二班",
            "value": 11102
          }
          ]
        }, {
          "label": "二年级",
          "value": 11200,
          "children": [{
            "label": "一班",
            "value": 11201
          }]
        }, {
          "label": "三年级",
          "value": 11300,
          "children": [{
            "label": "一班",
            "value": 11301
          },
          {
            "label": "二班",
            "value": 11302
          },
          {
            "label": "三班",
            "value": 11303
          }
          ]
        }]
      },
      {
        "label": "初中部",
        "value": 120000,
        "children": [{
          "label": "一年级",
          "value": 12100,
          "children": [{
            "label": "一班",
            "value": 12101
          }]
        }, {
          "label": "二年级",
          "value": 12200,
          "children": [{
            "label": "一班",
            "value": 12201
          },
          {
            "label": "二班",
            "value": 12202
          },
          {
            "label": "三班",
            "value": 12203
          }
          ]
        }, {
          "label": "三年级",
          "value": 12300,
          "children": [{
            "label": "一班",
            "value": 12301
          },
          {
            "label": "二班",
            "value": 12302
          }
          ]
        }]
      }
      ]
    }

    const selected = ref(['高中部', '一年级'])

    return { shcool, selected }
  },
  components: { Cascader }
})
</script>

<style scoped>
</style>