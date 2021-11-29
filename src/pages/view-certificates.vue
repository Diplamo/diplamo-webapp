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
import { onMounted } from 'vue'
import sleep from '/@src/utils/sleep'
import Moralis from 'moralis'
import Web3 from 'web3/dist/web3.min.js'

onMounted(async () => {
  let web3 = await Moralis.enableWeb3()
  let currentAddress = await web3.eth.getAccounts()
  await Moralis.link(currentAddress[0], {
    signingMessage: 'Link Wallet To Account',
  })
})

pageTitle.value = 'View Certificates'
useHead({
  title: 'View Certificates',
})

const data = [
  {
    id: 0,
    university: 'Massachusetts Institute of Technology',
    degree: 'Robotics PhD',
    date: '2020-2021',
    grade: '3.7/4.0',
    verified: 'Yes',
  },
  {
    id: 1,
    university: 'University of Berkeley',
    degree: 'Bachelors in Math',
    date: '2017-2020',
    grade: '3.5/4.0',
    verified: 'Yes',
  },
]
</script>

<template>
  <CustomNavbarSearchLayoutStudent theme="center">
    <!-- Content Wrapper -->
    <div class="page-content-inner">
      <!--VFlexTable-->
      <CustomVFlexTable compact>
        <template #header>
          <div class="flex-table-header">
            <span>University</span>
            <span>Degree</span>
            <span>Date</span>
            <span>Grade</span>
            <span>Verified University</span>
            <span class="cell-end">Actions</span>
          </div>
        </template>
        <template #body>
          <CustomVFlexTableRowBase :rows="data" />
        </template>
      </CustomVFlexTable>

      <!--Table Pagination-->
      <VFlexPagination
        :item-per-page="10"
        :total-items="50"
        :current-page="1"
        :max-links-displayed="1"
      />
    </div>
  </CustomNavbarSearchLayoutStudent>
</template>
