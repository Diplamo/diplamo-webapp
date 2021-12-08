<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import Moralis from 'moralis'
const router = useRouter()

const username = Moralis.User.current().getUsername()
const role = Moralis.User.current().get('role')

const handleLogout = async () => {
  await Moralis.User.logOut()
  router.push({
    name: 'index',
  })
}
</script>

<template>
  <VDropdown right spaced class="user-dropdown profile-dropdown">
    <template #button="{ toggle }">
      <a
        class="is-trigger dropdown-trigger"
        aria-haspopup="true"
        @click="toggle"
      >
        <VAvatar picture="/images/avatars/svg/vuero-1.svg" />
      </a>
    </template>

    <template #content>
      <div class="dropdown-head">
        <VAvatar size="large" picture="/images/avatars/svg/vuero-1.svg" />

        <div class="meta">
          <span>{{ username }}</span>
          <span>{{ role }}</span>
        </div>
      </div>

      <a href="#" role="menuitem" class="dropdown-item is-media">
        <div class="icon">
          <i aria-hidden="true" class="lnil lnil-cog"></i>
        </div>
        <div class="meta">
          <span>Settings</span>
          <span>Account settings</span>
        </div>
      </a>

      <hr class="dropdown-divider" />

      <div class="dropdown-item is-button">
        <VButton
          class="logout-button"
          icon="feather:log-out"
          color="primary"
          role="menuitem"
          raised
          fullwidth
          @click="handleLogout"
        >
          Logout
        </VButton>
      </div>
    </template>
  </VDropdown>
</template>
