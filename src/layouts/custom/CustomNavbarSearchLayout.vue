<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import type {
  VAvatarProps,
  VAvatarColor,
} from '/@src/components/base/avatar/VAvatar.vue'
import type { UserPopover } from '/@src/models/users'
import { popovers } from '/@src/data/users/userPopovers'
import { pageTitle } from '/@src/state/navbarLayoutState'
import { activePanel } from '/@src/state/activePanelState'

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
const activeMobileSubsidebar = ref('dashboard')
const filter = ref('')

const users: VAvatarProps[] = [
  {
    picture: '/demo/avatars/12.jpg',
    initials: 'JS',
    color: 'info',
  },
  {
    picture: '/demo/avatars/22.jpg',
    initials: 'JH',
    color: 'info',
  },
  {
    picture: '/demo/avatars/40.jpg',
    initials: 'SM',
    color: 'h-purple',
  },
]

function getAvatarData(user: UserPopover): VAvatarProps {
  return {
    picture: user.avatar,
    initials: user.initials,
    color: user.color as VAvatarColor,
  }
}

const filteredData = computed(() => {
  if (!filter.value) {
    return []
  }

  return Object.values(popovers).filter((user) => {
    return (
      user.fullName.match(new RegExp(filter.value, 'i')) ||
      user.position.match(new RegExp(filter.value, 'i'))
    )
  })
})

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
          <NotificationsMobileDropdown />
          <UserProfileDropdown />
        </div>
      </template>
    </MobileNavbar>

    <!-- Mobile sidebar links -->
    <MobileSidebar
      :is-open="isMobileSidebarOpen"
      @toggle="isMobileSidebarOpen = !isMobileSidebarOpen"
    >
      <template #links>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'dashboard' && 'is-active']"
            @click="activeMobileSubsidebar = 'dashboard'"
          >
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:activity"
            ></i>
          </a>
        </li>
        <li>
          <a
            :class="[activeMobileSubsidebar === 'layout' && 'is-active']"
            @click="activeMobileSubsidebar = 'layout'"
          >
            <i aria-hidden="true" class="iconify" data-icon="feather:grid"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'elements' && 'is-active']"
          @click="activeMobileSubsidebar = 'elements'"
        >
          <a>
            <i aria-hidden="true" class="iconify" data-icon="feather:box"></i>
          </a>
        </li>
        <li
          :class="[activeMobileSubsidebar === 'components' && 'is-active']"
          @click="activeMobileSubsidebar = 'components'"
        >
          <a>
            <i aria-hidden="true" class="iconify" data-icon="feather:cpu"></i>
          </a>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:message-circle"
            ></i>
          </RouterLink>
        </li>
      </template>

      <template #bottom-links>
        <li>
          <a @click="activePanel = 'search'">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:search"
            ></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i
              aria-hidden="true"
              class="iconify"
              data-icon="feather:settings"
            ></i>
          </a>
        </li>
      </template>
    </MobileSidebar>

    <!-- Mobile subsidebar links -->
    <transition name="slide-x">
      <LayoutsMobileSubsidebar
        v-if="isMobileSidebarOpen && activeMobileSubsidebar === 'layout'"
      />
      <DashboardsMobileSubsidebar
        v-else-if="
          isMobileSidebarOpen && activeMobileSubsidebar === 'dashboard'
        "
      />
      <ComponentsMobileSubsidebar
        v-else-if="
          isMobileSidebarOpen && activeMobileSubsidebar === 'components'
        "
      />
      <ElementsMobileSubsidebar
        v-else-if="isMobileSidebarOpen && activeMobileSubsidebar === 'elements'"
      />
    </transition>

    <!-- Desktop navigation -->
    <CustomNavbarSearch :theme="props.theme">
      <!-- Custom navbar title -->
      <template #title>
        <RouterLink :to="{ name: 'view-certificates' }" class="brand">
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

        <!-- <LayoutSwitcher /> -->
        <CustomUserProfileDropdown />
      </template>

      <!-- Desktop navigation -->
      <template #links>
        <VButtons>
          <VButton color="primary" :to="{ name: 'view-certificates' }">
            View/Share Certificates (s)
          </VButton>
          <VButton color="primary" :to="{ name: 'request-certificates' }">
            Request Certificates (s)
          </VButton>
          <VButton color="primary" :to="{ name: 'claim-certificates' }">
            Claim Certificates (s)
          </VButton>
          <VButton color="primary" :to="{ name: 'view-send-requests' }">
            View Certificate Requests (u)
          </VButton>
          <VButton color="primary" :to="{ name: 'view-certificates-sent' }">
            View Certificates Sent (u)
          </VButton>
          <VButton color="primary" :to="{ name: 'faq' }">
            Help (u and s)</VButton
          >
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
