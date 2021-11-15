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
        <LandingEmptyNavigation />

        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-5">
                <h1 class="title is-1 is-bold">
                  Send your achievements through the blockchain
                </h1>
                <h3 class="subtitle is-4 pt-2 light-text">
                  Get non-fungible-tokens of your certificates. Share with your
                  peers like never before.
                </h3>
                <div class="buttons">
                  <VButton color="primary" bold rounded raised>
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
