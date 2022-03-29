<template>
  <div class="wrapper">
    <header>
      <h2>{{ article.title }}</h2>
    </header>
    <main>
      <div class="showArticle">
        <Markdown
          id="markdownArticleImg"
          :source="article.body"
          typographer
          :plugins="markDownPlugins"
          breaks
          linkify
        ></Markdown>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { NavBar } from 'vant'
// @ts-ignore
import Markdown from 'vue3-markdown-it'
import { defineComponent, toRefs } from 'vue'
import { markDownPlugins } from '@/utils/markdownPlug'

export default defineComponent({
  components: {
    [NavBar.name]: NavBar,
    Markdown
  },
  props: {
    article: {
      title: String,
      body: String
    }
  },
  setup(props) {
    const { article } = toRefs(props)
    // eslint-disable-next-line vue/no-dupe-keys
    return { markDownPlugins, article }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 20px;
  padding: 10px 15px;
  header {
    h2 {
      padding-top: 10px;
      font-size: 1.5em;
      text-align: center;
      font-family: Georgia, 'Nimbus Roman No9 L', 'Songti SC',
        'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif CN',
        STSong, 'AR PL New Sung', 'AR PL SungtiL GB', NSimSun, SimSun,
        'TW\-Sung', 'WenQuanYi Bitmap Song', 'AR PL UMing CN', 'AR PL UMing HK',
        'AR PL UMing TW', 'AR PL UMing TW MBE', PMingLiU, MingLiU, serif;
    }
  }
  main {
    padding: 10px 0 20px 0;
  }
}
</style>
<style lang="scss">
#markdownArticleImg {
  img {
    max-width: 100px;
  }
}
</style>
