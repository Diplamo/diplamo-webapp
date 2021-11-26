<script setup lang="ts">
import { useHead } from '@vueuse/head'
import '@lottiefiles/lottie-player'

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

        <!-- Hero -->
        <div class="hero-body">
          <div class="container">
            <div class="columns is-vcentered">
              <div class="column is-5 pl-5">
                <h1 class="title is-1 is-bold">
                  Let technology solve your paperwork.
                </h1>
                <h3 class="subtitle is-4 pt-2 light-text">
                  Move your certificates to the blockchain.
                </h3>
                <div class="buttons">
                  <VButton
                    :to="{ name: 'auth-onboarding' }"
                    color="primary"
                    bold
                    rounded
                    raised
                  >
                    Join for free
                  </VButton>
                </div>
              </div>
              <div class="column is-7 pl-6">
                <lottie-player
                  v-pre
                  src="hero-animated.json"
                  autoplay
                  background="transparent"
                  controls:false
                  hover:false
                  loop:true
                  speed:1
                  preserveAspectRatio="xMidYMid slice"
                ></lottie-player>
                <!-- <img
                  class="light-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/hero-picture.svg"
                  alt=""
                />
                <img
                  class="dark-image-l hero-mockup"
                  src="/@src/assets/illustrations/landing/hero-picture.svg"
                  alt=""
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Funnel universities cred-->
      <div class="section mt-0 pt-3 pb-0">
        <div class="container">
          <div class="section-title has-text-centered pt-5 pb-3">
            <h2 class="subtitle is-4 light-text">
              Universities that Diplamo could target
            </h2>
          </div>
        </div>
      </div>
      <nav class="level pb-4">
        <div class="level-item">
          <img
            src="../assets/illustrations/landing/uni-logos/MIT.svg"
            alt=""
            style="height: 40px"
          />
        </div>
        <div class="level-item">
          <img
            src="../assets/illustrations/landing/uni-logos/Berkeley.svg"
            alt=""
            style="height: 40px"
          />
        </div>
        <div class="level-item">
          <img
            src="../assets/illustrations/landing/uni-logos/Lausanne.svg"
            alt=""
            style="height: 55px"
          />
        </div>
        <div class="level-item">
          <img
            src="../assets/illustrations/landing/uni-logos/Oviedo.png"
            alt=""
            style="height: 70px"
          />
        </div>
        <div class="level-item">
          <img
            src="../assets/illustrations/landing/uni-logos/Warsaw.svg"
            alt=""
            style="height: 60px"
          />
        </div>
        <div class="level-item">
          <img
            src="../assets/illustrations/landing/uni-logos/Moscow.svg"
            alt=""
            style="height: 85px"
          />
        </div>
        <div class="level-item">
          <img
            src="../assets/illustrations/landing/uni-logos/Mumbai.svg"
            alt=""
            style="height: 60px"
          />
        </div>
      </nav>

      <!--Funnel mockup-->
      <CustomMarketingMockup />

      <!--Funnel features-->
      <CustomMarketingSideFeatures />

      <!-- Funnel companies cred-->
      <div class="section mt-0 pt-3 pb-2">
        <div class="container">
          <div class="section-title has-text-centered pt-5 pb-3">
            <h2 class="subtitle is-4 light-text">
              Made with industry-leading blockchain technologies
            </h2>
          </div>
          <div class="column is-12">
            <nav class="level pb-4">
              <div class="level-left">
                <div class="level-item">
                  <img
                    class="light-image-l"
                    src="../assets/illustrations/landing/org-logos/Chainlink-Logo-Blue.svg"
                    alt=""
                    style="width: 150px"
                  />
                </div>
                <div class="level-item">
                  <img
                    class="dark-image-l"
                    src="../assets/illustrations/landing/org-logos/Chainlink-Logo-White.svg"
                    alt=""
                    style="width: 150px"
                  />
                </div>
              </div>
              <div class="level-item">
                <img
                  class="light-image-l"
                  src="../assets/illustrations/landing/org-logos/polygon-logo.svg"
                  alt=""
                  style="width: 150px"
                />
              </div>
              <div class="level-item">
                <img
                  class="dark-image-l"
                  src="../assets/illustrations/landing/org-logos/polygon-logo-monotone-white.svg"
                  alt=""
                  style="width: 150px"
                />
              </div>
              <div class="level-item">
                <img
                  class="light-image-l"
                  src="../assets/illustrations/landing/org-logos/Moralis_Logo_Dark.svg"
                  alt=""
                  style="width: 150px"
                />
              </div>
              <div class="level-item">
                <img
                  class="dark-image-l"
                  src="../assets/illustrations/landing/org-logos/Moralis_Logo_White.svg"
                  alt=""
                  style="width: 150px"
                />
              </div>
              <div class="level-right">
                <div class="level-item">
                  <img
                    class="light-image-l"
                    src="../assets/illustrations/landing/org-logos/alchemy-logo-blue-gradient.svg"
                    alt=""
                    style="width: 150px"
                  />
                </div>
                <div class="level-item">
                  <img
                    class="dark-image-l"
                    src="../assets/illustrations/landing/org-logos/alchemy-logo-white.svg"
                    alt=""
                    style="width: 150px"
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

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
