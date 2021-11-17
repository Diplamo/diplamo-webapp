<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'View Certificates'
useHead({
  title: 'Profile - Ampersand',
})
</script>

<template>
  <div class="page-content-inner">
    <CraftedViewCertificates />
  </div>
</template>
