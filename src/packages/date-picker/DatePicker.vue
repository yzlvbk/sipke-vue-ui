<template>
  <div class="s-date-picker">
    <div class="input-wrapper">
      <input type="text" autocomplete="off" disabled placeholder="请选择日期">
      <!-- <label class="label">请选择日期</label> -->
      <s-icon name="setting" class="icon prefix"></s-icon>
      <s-icon name="close" class="icon clear"></s-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sIcon from '../icon/Icon.vue'
export default defineComponent({
  setup() {


    return {}
  },
  components: { sIcon }
})
</script>

<style lang="scss" scoped>
@import '../../style/mixni.scss';
.s-date-picker {
  width: 280px;
  // position: relative;

  > .input-wrapper {
    width: 280px;
    height: 32px;
    position: relative;

    > input {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 0 30px;
      box-sizing: border-box;
      border: 1px solid $border;
      border-radius: 2px;
      color: $main;
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
      color: $disabled;

      &.prefix {
        left: 5px;
      }

      &.clear {
        cursor: pointer;
        right: 5px;
      }

      &:hover {
        &.clear {
          color: $main;
        }
      }
    }
  }
}
</style>