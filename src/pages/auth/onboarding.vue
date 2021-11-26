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
            src="../../assets/illustrations/pricing/student.png"
            alt=""
          />
          <img
            class="dark-image"
            src="../../assets/illustrations/pricing/student-white.png"
            alt=""
          />
          <!-- <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->

          <h3>Individual</h3>
          <p>
            Students and researchers, both from academic institutions and
            independent.
          </p>
          <div class="button-wrap">
            <VButton
              :to="{ name: 'auth-signup-student' }"
              color="primary"
              elevated
            >
              Join
            </VButton>
          </div>
        </div>
        <!--Card-->
        <div class="onboarding-card">
          <img
            class="light-image"
            src="../../assets/illustrations/pricing/univeristy.png"
            alt=""
          />
          <img
            class="dark-image"
            src="../../assets/illustrations/pricing/university-white.png"
            alt=""
          />
          <!-- <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->
          <h3>Institution</h3>
          <p>
            Academic institutions, research institutes and educational
            organizations.
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
