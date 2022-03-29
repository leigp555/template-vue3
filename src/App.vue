<template>
  <div class="wrapper">
    <div class="main">
      <router-view></router-view>
    </div>
    <transition name="fade">
      <nav v-if="show">
        <van-tabbar v-model="active" class="nav">
          <van-tabbar-item icon="home-o">笔记</van-tabbar-item>
          <van-tabbar-item icon="todo-list-o">概览</van-tabbar-item>
          <van-tabbar-item icon="search">工具</van-tabbar-item>
          <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
        </van-tabbar>
      </nav>
    </transition>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watchEffect } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  setup() {
    const router = useRouter()
    const routeTable = {
      0: 'nodePage',
      1: 'general',
      2: 'tool',
      3: 'userInfo'
    }
    const active = ref(0)
    watchEffect(() => {
      router.push(routeTable[active.value])
    })

    const show = ref(true)
    const touchStartHeight = ref(0)
    const touchMoveHeight = ref(0)
    onMounted(() => {
      document.body.addEventListener('touchstart', e => {
        touchStartHeight.value = e.changedTouches[0].clientY
      })
      document.body.addEventListener('touchmove', e => {
        touchMoveHeight.value = e.changedTouches[0].clientY
        if (touchMoveHeight.value - touchStartHeight.value > 40) {
          show.value = true
        } else if (touchMoveHeight.value - touchStartHeight.value < -40) {
          show.value = false
        }
      })
    })
    return { active, show }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    width: 100%;
    flex-grow: 10;
  }
  nav {
    height: 60px;
    .nav {
      height: 60px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 250ms;
}
.fade-enter-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
</style>
