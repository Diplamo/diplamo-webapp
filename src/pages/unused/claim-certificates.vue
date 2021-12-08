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

pageTitle.value = 'Claim Certificates'
useHead({
  title: 'Claim Certificates',
})
const openClaim = ref(false)
</script>

<template>
  <CustomNavbarSearchLayout theme="center">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <VCardAdvanced title="" subtitle="">
        <template #header-left> University of Berkeley </template>
        <template #content>
          <l>
            <li>University: University of Berkeley</li>
            <li>Wallet: f89e9a84as02asfaf789dah234093a6sdf6789sdfg8</li>
            <li>Degree: Math BSc</li>
            <li>Dates: 01-07-2018 to 01-05-2021</li>
            <li>Grade: 3.7/4</li>
          </l>
        </template>
        <template #footer-left>
          <VButton color="primary" raised @click="openClaim = true"
            >Claim</VButton
          >
          <VModal
            title="Claim certificate"
            :open="openClaim"
            actions="center"
            cancel-label="Close"
            @close="openClaim = false"
          >
            <template #content>
              <VPlaceholderSection
                title=""
                subtitle="Enter the claim password to claim the certificate. Remember to claim the certificate only after checking that all the fields are correct. If any field is wrong, contact your organization and ask them to send the certificate again."
              />
              <form class="modal-form">
                <div class="field">
                  <label>Claim password *</label>
                  <div class="control">
                    <input
                      type="text"
                      class="input"
                      placeholder="Enter the claim password that your organization sent you"
                    />
                  </div>
                </div>
              </form>
            </template>
            <template #action>
              <VButton color="primary" raised>Claim</VButton>
            </template>
          </VModal>
        </template>
      </VCardAdvanced>
      <br /><br />
      <VCardAdvanced title="" subtitle="">
        <template #header-left>
          Massachusetts Institute of Technology
        </template>
        <template #content>
          <l>
            <li>University: Massachusetts Institute of Technology</li>
            <li>Wallet: z52e9a84as02455b8ab715s4d8093a61b277bafa3</li>
            <li>Degree: Robotis Summer Workshop</li>
            <li>Dates: 01-05-2021 to 15-05-2021</li>
            <li>Grade: 9/10</li>
          </l>
        </template>
        <template #footer-left>
          <VButton color="primary" raised @click="openClaim = true"
            >Claim</VButton
          >
        </template>
      </VCardAdvanced>
    </div>
  </CustomNavbarSearchLayout>
</template>
