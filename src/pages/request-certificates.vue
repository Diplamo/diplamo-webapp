<script setup lang="ts">
/**
 * This is a Vue Component that will be
 * automatically mapped to a entry on vue-router.
 * Read more about routing:
 * @see /vite.config.ts
 * @see /src/router.ts
 */

import { useHead } from '@vueuse/head'
import { pageTitle } from '/@src/state/navbarLayoutState'

pageTitle.value = 'Request Certificates'
useHead({
  title: 'Request Certificates',
})
</script>

<template>
  <CustomNavbarSearchLayout theme="center">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <CustomFormLayout class="is-navbar" />
    </div>
  </CustomNavbarSearchLayout>
</template>
