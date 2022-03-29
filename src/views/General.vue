<template>
  <div class="wrapper">
    <div class="header-icon">
      <div class="kindList" @click="kindVisible">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
      <div class="order" @click="orderList">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-paixu"></use>
        </svg>
      </div>
    </div>
    <NodeList />
  </div>
  <van-popup
    v-model:show="showKind"
    position="left"
    :style="{ height: '100%', width: '40%' }"
    class="showKind"
  >
    <div class="kind">
      <div class="kindItem">
        <a-button type="link" @click="kindVisible">笔记</a-button>
      </div>
      <div class="kindItem" @click="kindVisible">
        <a-button type="link">收藏夹</a-button>
      </div>
      <div class="kindItem" @click="kindVisible">
        <a-button type="link">回收站</a-button>
      </div>
    </div>
  </van-popup>
</template>

<script lang="ts">
import { Popup } from 'vant'
import { defineComponent, ref } from 'vue'
import NodeList from '@/helperComponents/NodeList.vue'

export default defineComponent({
  components: {
    NodeList,
    [Popup.name]: Popup
  },
  setup() {
    const showKind = ref(false)
    const kindVisible = () => {
      showKind.value = !showKind.value
    }
    const orderList = () => {}
    return { kindVisible, orderList, showKind }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 10px;
  .header-icon {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .icon {
      width: 1.5em;
      height: 1.5em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
  .showKind {
    .kind {
      padding-top: 50px;
      .kindItem {
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
