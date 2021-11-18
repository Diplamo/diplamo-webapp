<script setup lang="ts">
import { ref } from 'vue'
const centeredActionsOpenShare = ref(false)
const centeredActionsOpenDetails = ref(false)
</script>

<template>
  <VDropdown icon="feather:more-vertical" class="is-pushed-mobile" spaced right>
    <template #content>
      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
        @click="centeredActionsOpenShare = true"
      >
        <div class="icon">
          <i aria-hidden="true" class="fas fa-share-alt"></i>
        </div>
        <div class="meta">
          <span>Share</span>
          <span>Share your certificate</span>
        </div>
        <template>
          <VModal
            title="Share link"
            :open="centeredActionsOpenShare"
            actions="center"
            cancel-label="Close"
            @close="centeredActionsOpenShare = false"
          >
            <template #content>
              <VPlaceholderSection
                title=""
                subtitle="https:\\etherscan.com\iouaprdgjadhjdhf\"
              />
            </template>
          </VModal>
        </template>
      </a>

      <a
        role="menuitem"
        href="#"
        class="dropdown-item is-media"
        @click="centeredActionsOpenDetails = true"
      >
        <div class="icon">
          <i aria-hidden="true" class="fas fa-eye"></i>
        </div>
        <div class="meta">
          <span>View</span>
          <span>View certificate details</span>
        </div>
        <template>
          <VModal
            title="Certificate Details"
            :open="centeredActionsOpenDetails"
            actions="center"
            cancel-label="Close"
            @close="centeredActionsOpenDetails = false"
          >
            <template #content>
              <div class="content">
                <l>
                  <li>University: Massachusetts Institute of Technology</li>
                  <li>Degree: Robotics PhD</li>
                  <li>Date: 2020-2021</li>
                  <li>Grade: 3.7/4.0</li>
                  <li>
                    Transfer hash:
                    0x47102c6wdegt595c99fdaba1a59ddd120ef0635339sfdhhdfsdfdsd8134
                  </li>
                  <li>
                    Creation hash:
                    0x52102c6d31ff7asdgsdagsdgsdg9fdaba1a59ddd120ef0635339dea4210
                  </li>
                </l>
              </div>
            </template>
          </VModal>
        </template>
      </a>
    </template>
  </VDropdown>
</template>
