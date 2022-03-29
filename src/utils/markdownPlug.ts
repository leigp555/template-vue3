import { reactive } from 'vue'
import MarkdownItEmoji from 'markdown-it-emoji'
// @ts-ignore
import MarkdownItDeflist from 'markdown-it-deflist'
// @ts-ignore
import MarkdownItSub from 'markdown-it-sub'
// @ts-ignore
import MarkdownItSup from 'markdown-it-sup'
// @ts-ignore
import MarkdownItAbbr from 'markdown-it-abbr'

// eslint-disable-next-line import/prefer-default-export
export const markDownPlugins = reactive([
  {
    plugin: MarkdownItAbbr
  },
  {
    plugin: MarkdownItSub
  },
  {
    plugin: MarkdownItSup
  },
  {
    plugin: MarkdownItDeflist
  },
  {
    plugin: MarkdownItEmoji
  }
])
