<script setup lang="ts">
import { nextTick, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import VueScrollTo from 'vue-scrollto'
import useNotyf from '/@src/composable/useNotyf'
import sleep from '/@src/utils/sleep'
import Moralis from 'moralis'
import Web3 from 'web3/dist/web3.min.js'

const router = useRouter()
const notyf = useNotyf()
const { scrollTo } = VueScrollTo

const currentStep = ref(0)
const isLoading = ref(false)
const currentHelp = ref(-1)
const controlType = ref('')
const storageType = ref('')
const taxType = ref('')
const taxStatements = ref('')

const initialDate = ref(new Date())
const finalDate = ref(new Date())

const student = ref('')
const title = ref('')
const startDate = ref('')
const completionDate = ref('')
const score = ref('')
const maximumScore = ref('')

// let optionsSingle = ref([])
// onMounted(async () => {
//   const User = Moralis.Object.extend('User')
//   const query = new Moralis.Query(User)
//   query.equalTo('username', 'demouni')
//   optionsSingle = await query.find()
// })
let optionsSingle = ['student123']

console.log('Query results: ', optionsSingle)

const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'previousAdminRole',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'newAdminRole',
        type: 'bytes32',
      },
    ],
    name: 'RoleAdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleGranted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'RoleRevoked',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
    ],
    name: 'getRoleAdmin',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'hasRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'role',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

const options = {
  contractAddress: '0x954933b3a3a47f888bfdb178950a8dbe3cb34065',
  functionName: 'createAmpersand',
  abi: ABI,
  params: {
    receiver: '0x2...45',
    _ampersandURI: 'https://prjlnssh1idr.usemoralis.com/%7Bid%7D.json',
  },
}

const validateStep = async () => {
  if (currentStep.value === 4) {
    if (isLoading.value) {
      return
    }

    let web3 = await Moralis.enableWeb3()

    let currentAddress = await web3.eth.getAccounts()
    await Moralis.link(currentAddress[0], {
      signingMessage: 'Link Wallet To Account',
    })

    const receipt = await Moralis.executeFunction(options)
    console.log(receipt)

    // console.log('User: ', Moralis.User.current())
    // console.log(currentAddress)

    // Moralis.authenticate().then(function (user: any) {
    //   console.log('Eth address: ', user.get('ethAddress'))
    // })

    isLoading.value = true
    notyf.success('Send request was successfully sent to the blockchain')
    await sleep(1000)

    router.push({
      name: 'generate-cert-pass',
    })
    return
  }

  isLoading.value = true
  await sleep(400)
  currentStep.value += 1

  nextTick(() => {
    scrollTo(`#form-step-${currentStep.value}`, 1000)
    isLoading.value = false
  })
}
</script>

<template>
  <div>
    <div class="mobile-steps is-active">
      <ul class="steps has-content-centered is-thin is-horizontal is-short">
        <li :class="[currentStep === 0 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 0 &&
                scrollTo('#form-step-0', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 1</p>
          </a>
        </li>

        <li :class="[currentStep === 1 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 1 &&
                scrollTo('#form-step-1', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 2</p>
          </a>
        </li>

        <li :class="[currentStep === 2 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 2 &&
                scrollTo('#form-step-2', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 3</p>
          </a>
        </li>

        <li :class="[currentStep === 3 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 3 &&
                scrollTo('#form-step-3', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 4</p>
          </a>
        </li>

        <li :class="[currentStep === 4 && 'is-active']" class="steps-segment">
          <span class="steps-marker"></span>
          <a
            href="#"
            class="steps-content"
            @click.prevent="
              currentStep >= 4 &&
                scrollTo('#form-step-4', 800, { offset: -150 })
            "
          >
            <p class="step-number">Step 5</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="stepper-form">
      <div class="form-sections">
        <div
          v-if="currentStep >= 0"
          id="form-step-0"
          class="form-section is-active"
        >
          <h3 class="form-section-title">
            <span>Student</span>
          </h3>

          <div class="form-section-inner">
            <VField class="is-autocomplete-select">
              <VControl icon="feather:search">
                <Multiselect
                  v-model="student"
                  :options="optionsSingle"
                  placeholder="Search students..."
                  :searchable="true"
                />
              </VControl>
            </VField>
            <!-- <VField>
              Name: Konrad Kovalsky <br />Wallet:
              b32e9a84as0b45b8ab715e4df793a61b277bafa3
            </VField> -->
          </div>
        </div>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 1"
            id="form-step-1"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Degree</span>
            </h3>

            <div class="form-section-inner">
              <VField>
                <label>Title</label>
                <VControl>
                  <input
                    v-model="title"
                    type="text"
                    class="input"
                    placeholder="Enter the degree title as it will be shown in the certificate"
                  />
                </VControl>
              </VField>
            </div>
          </div>
        </transition>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 2"
            id="form-step-2"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Dates</span>
              <button
                class="help-button"
                @click="
                  currentHelp === 1 ? (currentHelp = -1) : (currentHelp = 1)
                "
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
              </button>
            </h3>
            <div class="form-section-inner">
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
                        <label>Completion date</label>
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
        </transition>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 3"
            id="form-step-3"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Grade</span>
              <button
                class="help-button"
                @click="
                  currentHelp === 2 ? (currentHelp = -1) : (currentHelp = 2)
                "
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
              </button>
            </h3>

            <div class="form-section-inner">
              <div class="columns">
                <div class="column is-6">
                  <VField>
                    <label>Score</label>
                    <VControl>
                      <input
                        v-model="score"
                        type="text"
                        class="input"
                        placeholder="Score"
                      />
                    </VControl>
                  </VField>
                </div>
                <div class="column is-6">
                  <VField>
                    <label>Maximum score</label>
                    <VControl>
                      <input
                        v-model="maximumScore"
                        type="text"
                        class="input"
                        placeholder="Maximum possible score"
                      />
                    </VControl>
                  </VField>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <transition name="fade-slow">
          <div
            v-if="currentStep >= 4"
            id="form-step-4"
            class="form-section is-active"
          >
            <h3 class="form-section-title">
              <span>Validation</span>
              <button
                class="help-button"
                @click="
                  currentHelp === 4 ? (currentHelp = -1) : (currentHelp = 4)
                "
              >
                <i
                  aria-hidden="true"
                  class="iconify"
                  data-icon="feather:help-circle"
                ></i>
              </button>
            </h3>
            <div class="form-section-inner">
              <div class="validation-box">
                <div class="box-content">
                  <h3>Validate</h3>
                  <p>
                    Before submitting the form, make sure you've filled all the
                    required fields. Once you check that all the fields are
                    correct, confirm and proceed to pay:
                  </p>
                  <br />
                  <l>
                    <li>Student: {{ student }}</li>
                    <li>Degree: {{ title }}</li>
                    <li>Dates: {{ initialDate }} to {{ finalDate }}</li>
                    <li>Grade: {{ score }}/{{ maximumScore }}</li>
                  </l>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="navigation-buttons">
          <div class="buttons is-right">
            <VButton
              color="primary"
              bold
              :loading="isLoading"
              @click="validateStep"
            >
              Continue
            </VButton>
          </div>
        </div>
      </div>
      <div class="form-stepper">
        <ul
          v-if="currentHelp === -1"
          class="steps is-vertical is-thin is-short"
        >
          <li
            id="step-segment-0"
            :class="[currentStep === 0 && 'is-active']"
            class="steps-segment"
            @click.prevent="
              currentStep >= 0 && scrollTo('#form-step-0', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 1</p>
              <p class="step-info">Student Info</p>
            </div>
          </li>
          <li
            id="step-segment-1"
            :class="[currentStep === 1 && 'is-active']"
            class="steps-segment"
            @click.prevent="
              currentStep >= 1 && scrollTo('#form-step-1', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 2</p>
              <p class="step-info">Degree</p>
            </div>
          </li>
          <li
            id="step-segment-2"
            :class="[currentStep === 2 && 'is-active']"
            class="steps-segment"
            @click.prevent="
              currentStep >= 2 && scrollTo('#form-step-2', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 3</p>
              <p class="step-info">Dates</p>
            </div>
          </li>
          <li
            id="step-segment-3"
            :class="[currentStep === 3 && 'is-active']"
            class="steps-segment"
            @click.prevent="
              currentStep >= 3 && scrollTo('#form-step-3', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 4</p>
              <p class="step-info">Grade</p>
            </div>
          </li>
          <li
            id="step-segment-4"
            :class="[currentStep === 4 && 'is-active']"
            class="steps-segment"
            @click.prevent="
              currentStep >= 4 && scrollTo('#form-step-4', 800, { offset: -20 })
            "
          >
            <a href="#" class="steps-marker"></a>
            <div class="steps-content">
              <p class="step-number">STEP 5</p>
              <p class="step-info">Validation</p>
            </div>
          </li>
        </ul>
        <div v-else class="form-help">
          <div
            v-if="currentHelp === 0"
            id="help-section-0"
            class="form-help-inner is-active"
          >
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Student</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere
              etiam humano apparet.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 1"
            id="help-section-1"
            class="form-help-inner is-active"
          >
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Degree</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 2"
            id="help-section-2"
            class="form-help-inner is-active"
          >
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Dates</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere
              etiam humano apparet.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 3"
            id="help-section-3"
            class="form-help-inner is-active"
          >
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Grades</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="currentHelp === 4"
            id="help-section-4"
            class="form-help-inner is-active"
          >
            <button class="close-help-button" @click="currentHelp = -1">
              <i aria-hidden="true" class="iconify" data-icon="feather:x"></i>
            </button>
            <h3>Validation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quod
              proximum fuit non vidit. Quantum Aristoxeni ingenium consumptum
              videmus in musicis? An eiusdem modi? Quae similitudo in genere.
            </p>
            <div class="list-wrap">
              <ul>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
                <li>
                  <i
                    aria-hidden="true"
                    class="iconify"
                    data-icon="feather:check"
                  ></i>
                  <span>Some nice list item</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../../scss/abstracts/_mixins.scss';
@import '../../../../../scss/pages/generic/_forms-stepper.scss';
</style>
