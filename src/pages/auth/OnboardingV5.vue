<template>
  <div class="standard-onboarding">
    <div class="title-wrap">
      <p>Welcome</p>
      <h2>Do you represent an individual or an institution?</h2>
    </div>

    <div class="onboarding-wrap">
      <div class="onboarding-wrap-inner">
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set6-1.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set6-1-dark.svg"
            alt=""
          />
          <h3>Individual</h3>
          <p>
            Students and researchers, both from academic institutions and
            independent. tament.
          </p>
          <div class="button-wrap">
            <VButton :to="{ name: 'auth-login-3' }" color="primary" elevated>
              Join
            </VButton>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="/@src/assets/illustrations/onboarding/set6-3.svg"
            alt=""
          />
          <img
            class="dark-image"
            src="/@src/assets/illustrations/onboarding/set6-3-dark.svg"
            alt=""
          />
          <h3>Institution</h3>
          <p>
            Academic institutions, research institutes and educational
            organizations. tament.
          </p>
          <div class="button-wrap">
            <VButton color="primary" elevated> Contact us </VButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../scss/abstracts/_mixins.scss';
@import '../../scss/pages/generic/_onboarding.scss';
</style>
