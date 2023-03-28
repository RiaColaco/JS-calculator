import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/learning/Desktop/learning/JS-calculator/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}