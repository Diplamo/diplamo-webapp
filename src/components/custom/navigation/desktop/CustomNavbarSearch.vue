<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'

export type NavbarSearchTheme = 'default' | 'center' | 'fade'

const props = withDefaults(
  defineProps<{
    theme?: NavbarSearchTheme
  }>(),
  {
    theme: 'default',
  }
)

const route = useRoute()
const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})
</script>

<template>
  <div
    class="navbar-navbar-clean"
    :class="[
      isScrolling && 'is-scrolled',
      props.theme === 'fade' && 'is-transparent',
    ]"
  >
    <div class="navbar-navbar-inner">
      <!-- Title slot -->
      <div class="left">
        <slot name="title"> </slot>
      </div>
      <div class="center">
        <slot name="search"></slot>
      </div>
      <div
        :class="[
          props.theme === 'default' && 'left',
          props.theme === 'center' && 'center',
          props.theme === 'fade' && 'center',
        ]"
      >
        <slot name="links">
          <div class="buttons">
            <a href="/" class="button">Homepage</a>
          </div>
        </slot>
      </div>

      <div class="right">
        <!-- Toolbar slot -->
        <slot name="toolbar"></slot>
      </div>
    </div>
    <br />
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/custom/layout/custom_navbar-extension.scss';
@import '../../../../scss/layout/_responsive.scss';
</style>
