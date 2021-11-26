<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref, watchEffect } from 'vue'
import { isLargeScreen } from '/@src/state/responsiveState'
import VueScrollTo from 'vue-scrollto'

import { isDark } from '/@src/state/darkModeState'
import { useRouter } from 'vue-router'

const isMobileNavOpen = ref(false)
const router = useRouter()
const scrollTo = VueScrollTo.scrollTo

const { y } = useWindowScroll()

const isScrolling = computed(() => {
  return y.value > 30
})

watchEffect(() => {
  if (isLargeScreen.value) {
    isMobileNavOpen.value = false
  }
})
</script>

<template>
  <div class="section">
    <nav
      class="navbar is-fixed-top is-transparent"
      :class="[
        !isScrolling && 'is-docked',
        isMobileNavOpen && 'is-solid',
        isScrolling && '',
      ]"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a href="/" class="navbar-item" @click.prevent="scrollTo('#app', 800)">
          <img
            src="../../../../assets/illustrations/diplamo-logo.svg"
            alt=""
            width="64px"
            height="64px"
          />
        </a>

        <div class="navbar-item">
          <a
            class="nav-link title is-3 is-bold"
            @click.prevent="scrollTo('#app', 800)"
          >
            Diplamo
          </a>
        </div>

        <a
          role="button"
          :class="[isMobileNavOpen && 'is-active']"
          class="navbar-burger burger"
          aria-label="menu"
          tabindex="0"
          aria-expanded="false"
          @click="isMobileNavOpen = !isMobileNavOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="[isMobileNavOpen && 'is-active']">
        <!-- <div class="navbar-start">
        <div class="navbar-item">
          <h1 class="title is-3 is-bold">Diplamo</h1>
          <RouterLink
            :to="{
              name: 'index',
            }"
            class="nav-link"
          >
            Diplamo
          </RouterLink>
        </div>
      </div> -->

        <div class="navbar-end">
          <div class="navbar-item is-theme-toggle">
            <label class="theme-toggle">
              <input
                id="navbar-night-toggle--daynight"
                v-model="isDark"
                type="checkbox"
              />
              <span class="toggler">
                <span class="dark">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:moon"
                  ></i>
                </span>
                <span class="light">
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:sun"
                  ></i>
                </span>
              </span>
            </label>
          </div>
          <div class="navbar-item">
            <RouterLink :to="{ name: 'auth-login' }" class="nav-link">
              Login
            </RouterLink>
          </div>
          <div class="navbar-item">
            <VButton
              :to="{ name: 'auth-onboarding' }"
              color="primary"
              rounded
              raised
            >
              <strong>Sign up</strong>
            </VButton>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
