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

pageTitle.value = 'View Certificates'
useHead({
  title: 'View Certificates',
})
</script>

<template>
  <CustomNavbarSearchLayout theme="center">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      Not done. Here the univeristy would be able to browse certificates they
      sent and check if they´ve been claimed. <br /><br />Maybe also be able to
      delete sent certificates that have not been claimed? (Because some details
      were wrong and the university wants to send the certificate again with the
      details right)
    </div>
  </CustomNavbarSearchLayout>
</template>
