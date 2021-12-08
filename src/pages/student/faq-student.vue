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
// import { useRouter } from 'vue-router'

// const router = useRouter()

pageTitle.value = 'FAQ'
useHead({
  title: 'FAQ',
})

const data = [
  {
    title: 'What if I lose my password?',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title: 'I claimed a certificate that I wanted to get rid of. What do I do?',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title: 'Can I delete a certificate?',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title:
      'How do I confirm that I´m sending the certificate to the correct student?',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title: 'What if ... ?',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title: 'What if ... ?',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
  {
    title: 'What if ... ?',
    content: 'Sed ut perspiciatis unde omnis iste ...',
  },
]
</script>

<template>
  <CustomNavbarSearchLayoutStudent theme="center">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <VCollapse :items="data" with-chevron />
    </div>
    <div class="centered">
      <VButtons>
        <VButton color="info" icon="lnir lnir-support" elevated center>
          Ask support
        </VButton>
      </VButtons>
    </div>
  </CustomNavbarSearchLayoutStudent>
</template>
