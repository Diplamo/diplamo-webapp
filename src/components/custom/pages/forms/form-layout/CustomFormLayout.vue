<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
import { computed, ref } from 'vue'
import useNotyf from '/@src/composable/useNotyf'

const notyf = useNotyf()

const companySize = ref('')
const businessType = ref('')
const productToDemo = ref('')
const date = ref(new Date())

const { y } = useWindowScroll()

const initialDate = ref(new Date())
const finalDate = ref(new Date())

const isStuck = computed(() => {
  return y.value > 30
})

const confirmation = async () => {
  notyf.success('Request sent!')
}
</script>

<template>
  <form class="form-layout" @submit.prevent>
    <div class="form-outer">
      <div :class="[isStuck && 'is-stuck']" class="form-header stuck-header">
        <div class="form-header-inner">
          <div class="left">
            <h3>Request a Certificate</h3>
          </div>
          <div class="right">
            <div class="buttons">
              <VButton
                icon="lnir lnir-arrow-left rem-100"
                :to="{ name: 'view-certificates' }"
                light
                dark-outlined
              >
                Back
              </VButton>
              <VButton color="primary" raised @click="confirmation">
                Request
              </VButton>
            </div>
          </div>
        </div>
      </div>
      <div class="form-body">
        <!--Fieldset-->
        <div class="form-fieldset">
          <div class="fieldset-heading">
            <h4>Request details</h4>
            <p>
              The request will be sent to the organization, along with your name
              and wallet address. The request is orientative. The organization
              might specify its own details when and if sending the certificate.
            </p>
          </div>

          <div>
            <VField>
              <label>Degree</label>
              <VControl icon="feather:user">
                <input
                  type="text"
                  class="input"
                  placeholder="Enter the title of the degree that you are requesting"
                  autocomplete="given-name"
                />
              </VControl>
            </VField>
            <VField>
              <label>Organization</label>
              <VControl>
                <Multiselect
                  v-model="companySize"
                  placeholder="Select a University"
                  :options="[
                    'Massachusetts Institute of Technology',
                    'University of Berkeley',
                    'Université de Lausanne',
                    'University of Warsaw',
                    'University of Mumbai',
                  ]"
                />
              </VControl>
            </VField>
            <div class="columns">
              <div class="column is-6">
                <v-date-picker v-model="initialDate" color="green" trim-weeks>
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <label>Start date</label>
                      <VControl icon="feather:calendar">
                        <input
                          class="input"
                          type="text"
                          placeholder="Select a date"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </VControl>
                    </VField>
                  </template>
                </v-date-picker>
              </div>
              <div class="column is-6">
                <v-date-picker v-model="finalDate" color="green" trim-weeks>
                  <template #default="{ inputValue, inputEvents }">
                    <VField>
                      <label>End date</label>
                      <VControl icon="feather:calendar">
                        <input
                          class="input"
                          type="text"
                          placeholder="Select a date"
                          :value="inputValue"
                          v-on="inputEvents"
                        />
                      </VControl>
                    </VField>
                  </template>
                </v-date-picker>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss">
@import '../../../../../scss/abstracts/_mixins.scss';
@import '../../../../../scss/pages/generic/_forms.scss';
</style>
