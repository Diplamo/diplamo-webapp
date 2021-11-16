<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Vuero - A complete Vue 3 design system',
})
</script>

<template>
  <LandingLayout theme="light">
    <div class="landing-page-wrapper">
      <!-- Hero and Navbar -->
      <div
        id="Vuero-marketing"
        class="hero marketing-hero is-left is-fullheight"
      >
        <!-- Navbar partial -->
        <CustomLandingEmptyNavigation />

        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <h1 class="title is-1 is-bold">
                  Show your achievements through the blockchain
                </h1>
                <h3 class="subtitle is-4 pt-2 light-text">
                  Move your certificates into the future. <br />Share them like
                  never before.
                </h3>
                <div class="buttons">
                  <VButton
                    :to="{ name: 'auth-login-3' }"
                    color="primary"
                    bold
                    rounded
                    raised
                  >
                    Join for free
                  </VButton>
                </div>
              </div>
              <div class="column is-7">
                <img
                  class="light-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/hero-picture.svg"
                  alt=""
                />
                <img
                  class="dark-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/hero-picture.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Funnel universities cred-->
      <p><br />/p></p>
      <div class="section-title has-text-centered">
        <h2 class="title is-3">Universtities using Ampersand</h2>
      </div>

      <div class="boxed-features is-flat pb-6">
        <div class="flex-card light-bordered hover-inset">
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/vuejs-solo.svg" alt="" />
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/typescript-square.svg" alt="" />
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/vite.svg" alt="" />
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/vscode.svg" alt="" />
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/eslint.svg" alt="" />
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/prettier.svg" alt="" />
          </div>
          <div class="flex-cell">
            <img
              class="light-image-block-l"
              src="/images/icons/stacks/stylelint.svg"
              alt=""
            /><img
              class="dark-image-block-l"
              src="/images/icons/stacks/stylelint-reverse.svg"
              alt=""
            />
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/iconify.svg" alt="" />
          </div>
        </div>
      </div>

      <!--Funnel mockup-->
      <CustomMarketingMockup />

      <!--Funnel features-->
      <CustomMarketingSideFeatures />

      <!-- Funnel companies cred-->
      <p><br />/p></p>
      <div class="section-title has-text-centered">
        <h2 class="title is-3">
          Featured by industry-leading blockchain companies
        </h2>
      </div>

      <div class="boxed-features is-flat pb-6">
        <div class="flex-card light-bordered hover-inset">
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/vuejs-solo.svg" alt="" />
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/typescript-square.svg" alt="" />
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/vite.svg" alt="" />
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/vscode.svg" alt="" />
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/eslint.svg" alt="" />
          </div>
          <div class="flex-cell is-bordered">
            <img src="/images/icons/stacks/prettier.svg" alt="" />
          </div>
          <div class="flex-cell">
            <img
              class="light-image-block-l"
              src="/images/icons/stacks/stylelint.svg"
              alt=""
            /><img
              class="dark-image-block-l"
              src="/images/icons/stacks/stylelint-reverse.svg"
              alt=""
            />
          </div>
          <div class="flex-cell">
            <img src="/images/icons/stacks/iconify.svg" alt="" />
          </div>
        </div>
      </div>

      <!--Funnel advantages-->
      <CustomMarketingFeaturesIcons />

      <!--Funnel pricing & call to action -->
      <CustomMarketingPricings />

      <!--About section-->
      <CustomMarketingAbout />

      <!--Feature boxes section-->
      <a id="features" name="features" aria-label="Features" />
      <MarketingFeaturesIcons />

      <!--Pricing section-->
      <MarketingPricings />

      <!--Mockup Section-->
      <MarketingMockup />

      <!--Side Features Section-->
      <MarketingSideFeatures />

      <!--About section-->
      <MarketingAbout />

      <!-- Footer -->
      <LandingFooter />

      <!-- Back To Top Button -->
      <div id="backtotop">
        <a href="#" aria-label="back to top">
          <i aria-hidden="true" class="fas fa-angle-up"></i>
        </a>
      </div>
    </div>
  </LandingLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_landing.scss';
@import '../scss/custom/pages/generic/_marketing.scss';
</style>
