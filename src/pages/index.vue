<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Diplamo - Blockchain diplomas',
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
                  Move your certificates into the future. <br />Make paperwork a
                  breeze.
                </h3>
                <div class="buttons">
                  <VButton
                    :to="{ name: 'auth-signup-3' }"
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
      <section class="section has-text-centered has-background-white-bis">
        <h1 class="title">Universities not using Ampersand</h1>
      </section>
      <nav class="level has-background-white-bis pb-4 pt-4">
        <div class="level-item has-text-centered">
          <img src="/uni-logos/MIT.svg" alt="" style="height: 40px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/uni-logos/Berkeley.svg" alt="" style="height: 40px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/uni-logos/Lausanne.svg" alt="" style="height: 55px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/uni-logos/Oviedo.png" alt="" style="height: 70px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/uni-logos/Warsaw.svg" alt="" style="height: 60px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/uni-logos/Moscow.svg" alt="" style="height: 85px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/uni-logos/Mumbai.svg" alt="" style="height: 60px" />
        </div>
      </nav>

      <!--Funnel mockup-->
      <CustomMarketingMockup />

      <!--Funnel features-->
      <CustomMarketingSideFeatures />

      <!-- Funnel universities cred-->
      <section class="section has-text-centered has-background-white-bis">
        <h1 class="title">Featured by industry-leading blockchain companies</h1>
      </section>
      <nav class="level has-background-white-bis pb-4 pt-4">
        <div class="level-item has-text-centered">
          <img src="/org-logos/Chainlink.svg" alt="" style="height: 60px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/org-logos/Polygon.svg" alt="" style="height: 60px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/org-logos/Moralis.svg" alt="" style="height: 60px" />
        </div>
        <div class="level-item has-text-centered">
          <img src="/org-logos/Alchemy.svg" alt="" style="height: 60px" />
        </div>
      </nav>

      <!--Funnel advantages-->
      <a id="features" name="features" aria-label="Features" />
      <CustomMarketingFeaturesIcons />

      <!--Funnel pricing & call to action -->
      <CustomMarketingPricings />

      <!--About section-->
      <CustomMarketingAbout />

      <!-- Footer -->
      <CustomLandingFooter />
    </div>
  </LandingLayout>
</template>

<style lang="scss">
@import '../scss/abstracts/_mixins.scss';
@import '../scss/pages/demo/_landing.scss';
@import '../scss/custom/pages/generic/_marketing.scss';
</style>
