<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@vueuse/head'
import useNotyf from '/@src/composable/useNotyf'

import { isDark, toggleDarkModeHandler } from '/@src/state/darkModeState'
import { useUserSession } from '/@src/stores/userSession'
import sleep from '/@src/utils/sleep'

import Moralis from 'moralis'

const router = useRouter()
const notif = useNotyf()
const userSession = useUserSession()
const isLoading = ref(false)

const username = ref('')
const email = ref('')
const password = ref('')
const passRepeat = ref('')

const isDisabled = computed(() => password.value !== passRepeat.value)

// const isDisabled = ref(password.value == passRepeat.value)

const handleSignup = async () => {
  if (!isLoading.value) {
    isLoading.value = true
    sleep(2000)

    const user = new Moralis.User()
    user.set('username', username.value)
    user.set('password', password.value)
    user.set('email', email.value)
    user.set('role', 'Student')

    try {
      await user.signUp()
      try {
        userSession.setUser(user)
        userSession.setToken(user.getSessionToken())

        notif.dismissAll()
        notif.success('Welcome')
        router.push({ name: 'view-certificates' })
        isLoading.value = false
      } finally {
      }

      // Hooray! Let them use the app now.
    } catch (error) {
      if (error instanceof Error) {
        // Show the error message somewhere and let the user try again.
        alert('Error: ' + error.message)
      }
    }
  }
}

useHead({
  title: 'Diplamo  - Signup',
})
</script>

<template>
  <div class="auth-wrapper-inner is-single">
    <!--Fake navigation-->
    <div class="auth-nav">
      <div class="left"></div>
      <div class="center">
        <RouterLink :to="{ name: 'index' }" class="header-item">
          <img
            src="../../assets/illustrations/diplamo-logo.svg"
            alt=""
            width="38px"
            height="38px"
          />
        </RouterLink>
      </div>
      <div class="right">
        <label class="dark-mode ml-auto">
          <input
            type="checkbox"
            :checked="!isDark"
            @change="toggleDarkModeHandler"
          />
          <span></span>
        </label>
      </div>
    </div>

    <!--Single Centered Form-->
    <div class="single-form-wrap">
      <div class="inner-wrap">
        <!--Form Title-->
        <div class="auth-head">
          <h2>Join Us Now.</h2>
          <p>Start by creating your account</p>
          <RouterLink :to="{ name: 'auth-login' }">
            I already have an account
          </RouterLink>
        </div>

        <!--Form-->
        <div class="form-card">
          <form @submit.prevent="handleSignup">
            <div class="login-form">
              <!-- Input -->
              <VField>
                <VControl icon="feather:user">
                  <input
                    v-model="username"
                    class="input"
                    type="text"
                    placeholder="Name"
                    autocomplete="name"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="feather:mail">
                  <input
                    v-model="email"
                    class="input"
                    type="text"
                    placeholder="Email Address"
                    autocomplete="email"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="feather:lock">
                  <input
                    v-model="password"
                    class="input"
                    type="password"
                    placeholder="Password"
                    autocomplete="new-password"
                  />
                </VControl>
              </VField>
              <!-- Input -->
              <VField>
                <VControl icon="feather:lock">
                  <input
                    v-model="passRepeat"
                    class="input"
                    type="password"
                    placeholder="Repeat Password"
                  />
                </VControl>
              </VField>

              <!-- <VField>
                <VControl class="setting-item">
                  <label for="send-promotional" class="form-switch is-primary">
                    <input
                      id="send-promotional"
                      type="checkbox"
                      class="is-switch"
                    />
                    <i aria-hidden="true"></i>
                  </label>
                  <div class="setting-meta">
                    <label for="send-promotional">
                      <span>Receive promotional offers</span>
                    </label>
                  </div>
                </VControl>
              </VField> -->
              <br />

              <!-- Submit -->
              <VField>
                <VControl class="login">
                  <VButton
                    :loading="isLoading"
                    :disabled="isDisabled"
                    type="submit"
                    color="primary"
                    bold
                    fullwidth
                    raised
                  >
                    Sign Up
                  </VButton>
                </VControl>
              </VField>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
