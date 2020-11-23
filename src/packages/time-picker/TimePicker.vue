<template>
  <div class="s-time-picker">
    <div class="input-wrapper">
      <s-icon name="setting" class="icon prefix" style="pointer-events:none;"></s-icon>
      <input type="text" :value="value" @click="pickerVisible = true" placeholder="选择时间" />
      <s-icon name="error" class="icon clear"></s-icon>
    </div>

    <div class="spread" v-show="pickerVisible">
      <div class="picker-items">

        <div class="item" ref="hourRef">
          <ul class="hour">
            <li v-for="(n,index) in 24" :key="n" @click=" handleClick(index,'hour')" :class="{selected:hour===index}">{{index>9?index:'0'+index}}</li>
          </ul>
        </div>

        <div class="item" ref="minuteRef">
          <ul class="minute">
            <li v-for="(n,index) in 60" :key="n" @click=" handleClick(index,'minute')" :class="{selected:minute===index}">{{index>9?index:'0'+index}}</li>
          </ul>
        </div>

        <div class="item" ref="secondRef">
          <ul class="second">
            <li v-for="(n,index) in 60" :key="n" @click=" handleClick(index,'second')" :class="{selected:second===index}">{{index>9?index:'0'+index}}</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, computed, watch } from 'vue'
import sIcon from '../icon/Icon.vue'
import tweenScroll from '../../utils/tweenScroll'
export default defineComponent({
  name: 'sTimePicker',
  setup() {
    const state = reactive({
      pickerVisible: false,
      hour: 1,
      minute: 1,
      second: 1,
      timerId: null
    })

    const hourRef = ref(null)
    const minuteRef = ref(null)
    const secondRef = ref(null)

    const value = computed(() => {
      if (state.hour >= 0 && state.minute >= 0 && state.second >= 0) {
        return `${state.hour > 9 ? state.hour : '0' + state.hour}:${state.minute > 9 ? state.minute : '0' + state.minute}:${state.second > 9 ? state.second : '0' + state.second}`
      } else {
        return ''
      }
    })

    const handleClick = (index, key) => {
      ['hour', 'minute', 'second'].forEach(item => {
        if (item === key) {
          state[key] = index
        } else {
          state[item] = state[item] === -1 ? 0 : state[item]
        }
      })
    }

    const scroll = (ref, target) => {
      tweenScroll(ref, { x: 0, y: target }, 200)
    }

    watch(() => state.hour, (val) => {
      scroll(hourRef.value, 32 * val)
    })

    watch(() => state.minute, (val) => {
      scroll(minuteRef.value, 32 * val)
    })
    watch(() => state.second, (val) => {
      scroll(secondRef.value, 32 * val)
    })

    return { ...toRefs(state), value, handleClick, hourRef, minuteRef, secondRef }
  },
  components: { sIcon }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-time-picker {
  position: relative;
  width: 180px;
  background: pink;

  > .input-wrapper {
    width: 180px;
    position: relative;

    > input {
      width: 100%;
      height: 32px;
      display: block;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 2px;
      box-shadow: none;
      padding: 0 30px;
      color: rgba(0, 0, 0, 0.65);
      box-sizing: border-box;
      cursor: pointer;
      &:focus {
        outline: none;
        border-color: $p;
      }
      &:hover {
        border-color: $p;
      }
    }

    > .icon {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: $disabled;

      &.prefix {
        left: 5px;
      }

      &.clear {
        opacity: 0;
        right: 5px;
        transition: all 0.2s linear;

        &:hover {
          color: $sub;
        }
      }
    }

    &:hover {
      > .icon {
        &.clear {
          opacity: 1;
        }
      }
    }
  }

  > .spread {
    position: absolute;
    top: 32px;
    box-shadow: 0 2px 12px 0 $border;

    > .picker-items {
      display: flex;
      justify-content: flex-start;
      width: 180px;
      height: 160px;
      // background-color: purple;

      > .item {
        width: 60px;
        height: 160px;
        overflow-x: hidden;
        overflow-y: hidden;
        transition: all 0.3s;

        &:hover {
          overflow-y: scroll;
        }

        > ul {
          list-style: none;
          padding: 0 0 128px 0;
          margin: 0;
          border-left: 1px solid $border;
          transition: all 0.3s;

          &.hour {
            border-left: none;
          }

          > li {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            transition: all 0.3s;

            cursor: pointer;
            user-select: none;
            font-size: 14px;

            &:hover {
              color: $p;
            }
            &.selected {
              background: #f5f5f5;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>