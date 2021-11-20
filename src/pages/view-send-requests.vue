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
import { ref } from 'vue'

pageTitle.value = 'View Certificates'
useHead({
  title: 'View Certificates',
})

const openClaim = ref(false)
</script>

<template>
  <CustomNavbarSearchLayout theme="center">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <VCardAdvanced title="Greta K." subtitle="Sales Manager">
        <template #header-left> Konrad Kovalski </template>
        <template #content>
          <l>
            <li>Degree: Math BSc</li>
            <li>Dates: 01-07-2018 to 01-05-2021</li>
            <li>Wallet: b32e9a84as0b45b8ab715e4df793a61b277bafa3</li>
          </l>
        </template>
        <template #footer-left>
          <VButton color="primary" raised :to="{ name: 'send-certificates' }"
            >Send</VButton
          >
        </template>
      </VCardAdvanced>
      <br /><br />
      <VCardAdvanced title="Greta K." subtitle="Sales Manager">
        <template #header-left> Konrad Kovalski </template>
        <template #content>
          <l>
            <li>Degree: Robotis Summer Workshop</li>
            <li>Dates: 01-05-2021 to 15-05-2021</li>
            <li>Wallet: b32e9a84as0b45b8 ab715e4df793a61b277bafa3</li>
          </l>
        </template>
        <template #footer-left>
          <VButton color="primary" raised :to="{ name: 'send-certificates' }"
            >Send</VButton
          >
        </template>
      </VCardAdvanced>
    </div>
  </CustomNavbarSearchLayout>
</template>
