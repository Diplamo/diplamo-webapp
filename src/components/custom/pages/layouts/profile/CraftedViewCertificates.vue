<script setup lang="ts">
import { useViaPlaceholderError } from '/@src/composable/useViaPlaceholderError'
</script>

<template>
  <div class="profile-wrapper">
    <div class="profile-header has-text-centered">
      <h3 class="title is-4 is-narrow is-thin"><br />Erik Kovalsky</h3>
    </div>

    <div class="profile-body">
      <div class="columns">
        <div class="column is-12">
          <div class="profile-card">
            <div class="profile-card-section">
              <VFlexTable>
                <template #header>
                  <div class="flex-table-header">
                    <span>University</span>
                    <span>Title</span>
                    <span>Date</span>
                    <span>Grade</span>
                    <span class="cell-end">Details</span>
                  </div>
                </template>
                <template #body>
                  <VFlexTableRowBase :rows="data" />
                </template>
              </VFlexTable>

              <!--Table Pagination-->
              <VFlexPagination
                :item-per-page="10"
                :total-items="30"
                :current-page="2"
                :max-links-displayed="5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../scss/abstracts/_mixins.scss';
@import '../../../../../scss/pages/profile/_user-profile.scss';

.is-dark {
  .icon-wrap,
  .icon-wrap.is-placeholder {
    background: var(--dark-sidebar-light-2) !important;
    border-color: var(--dark-sidebar-light-12) !important;
  }
}
</style>
