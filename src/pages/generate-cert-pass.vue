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
      <div class="container">
        <VCard radius="smooth">
          <h3 class="title is-5 mb-2">
            student claim password: klfsj135akljsfg23
          </h3>
          <br />
          <p>
            Send the "student claim password" to the student in order for him to
            claim the certificate. <br /><br />
            An email has been sent to the student notifying him that he will be
            able to claim the certificate once your organization sends him the
            "student claim password". <br /><br />
            *Lillup, the company behind Ampersand, does not keep 'Know Your
            Customer' data on students. In this way, in order to fulfill
            security measures and verify that the student is in fact the person
            claiming the certificate, the University must comunicate the
            "student claim password" to the student through their own channels.
          </p>
        </VCard>
      </div>
      <br />
      <VButtons>
        <VButton color="primary" elevated center> Back to main page </VButton>
      </VButtons>
    </div>
  </CustomNavbarSearchLayout>
</template>
