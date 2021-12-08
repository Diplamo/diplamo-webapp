<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

export type NavbarSearchTheme = 'default' | 'center' | 'fade'

const props = withDefaults(
  defineProps<{
    theme?: NavbarSearchTheme
    nowrap?: boolean
  }>(),
  {
    theme: 'default',
  }
)

const route = useRoute()
const isMobileSidebarOpen = ref(false)
const filter = ref('')

watch(
  () => route.fullPath,
  () => {
    isMobileSidebarOpen.value = false
  }
)
</script>

<template>
  <div class="navbar-layout navbar-layout-search">
    <div class="app-overlay"></div>

    <!-- Mobile navigation -->
    <MobileNavbar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #brand>
        <RouterLink :to="{ name: 'index' }" class="navbar-item is-brand">
          <img
            src="../../assets/illustrations/diplamo-logo.svg"
            alt=""
            width="38px"
            height="38px"
          />
        </RouterLink>

        <div class="brand-end">
          <CustomUserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <CustomMobileSidebar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #links>
        <li>
          <VButton bold outlined :to="{ name: 'student-view-certificates' }">
            View
          </VButton>
        </li>
        <li>
          <VButton bold outlined :to="{ name: 'student-faq-student' }">
            Help
          </VButton>
        </li>
      </template>
      <template #bottom-links> </template>
    </CustomMobileSidebar>

    <!-- Desktop navigation -->
    <CustomNavbarSearch :theme="props.theme">
      <!-- Custom navbar title -->
      <template #title>
        <RouterLink :to="{ name: 'student-view-certificates' }" class="brand">
          <img
            src="../../assets/illustrations/diplamo-logo.svg"
            alt=""
            width="38px"
            height="38px"
          />
        </RouterLink>
        <div class="navbar-item">
          <a class="nav-link title is-3 is-bold"> Diplamo </a>
        </div>
      </template>

      <!-- Custom navbar toolbar -->
      <template #toolbar>
        <CustomToolbar class="desktop-toolbar">
          <!-- <ToolbarNotification /> -->
        </CustomToolbar>

        <LayoutSwitcher />
        <CustomUserProfileDropdown />
      </template>

      <!-- Desktop navigation -->
      <template #links>
        <VButtons>
          <VButton bold outlined :to="{ name: 'student-view-certificates' }">
            View Certificates
          </VButton>
          <VButton bold outlined :to="{ name: 'student-faq-student' }">
            Help
          </VButton>
        </VButtons>
      </template>
    </CustomNavbarSearch>

    <CustomLanguagesPanel />
    <!-- <ActivityPanel /> -->
    <!-- <TaskPanel /> -->

    <div class="view-wrapper has-top-nav">
      <div class="page-content-wrapper">
        <template v-if="props.nowrap">
          <slot></slot>
        </template>
        <div v-else class="page-content is-relative">
          <div class="is-navbar-lg">
            <div class="page-title has-text-centered">
              <!-- Mobile Page Title -->
              <div class="title-wrap">
                <h1 class="title is-4">{{ pageTitle }}</h1>
              </div>
              <CustomToolbar class="mobile-toolbar">
                <!-- <ToolbarNotification /> -->
              </CustomToolbar>
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar-layout-search {
  ::v-deep(.view-wrapper.has-top-nav) {
    margin-top: 20px;
    min-height: calc(100vh - 20px);

    .is-stuck {
      top: 100px;
    }
  }
}
</style>
