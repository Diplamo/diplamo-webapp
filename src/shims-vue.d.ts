declare module '*.md' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue3-apexcharts'
declare module '@vueform/multiselect'
declare module '@vueform/slider'
declare module 'simple-datatables'
declare module '@ckeditor/ckeditor5-vue'
declare module '@ckeditor/ckeditor5-build-classic'
declare module 'dropzone'
declare module '@intlify/vite-plugin-vue-i18n/messages'
declare module '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js'
declare module 'vue-accessible-color-picker'
