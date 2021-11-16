<template>
  <div class="section has-bg-dots">
    <div class="container">
      <!--Title-->
      <div class="section-title has-text-centered">
        <h2 class="title is-2">Pricing</h2>
        <h4>Made simple</h4>
      </div>

      <!--Wrapper-->
      <div class="pricing-wrapper">
        <!--Pricing plan-->
        <div class="pricing-plan">
          <div class="name">Student</div>
          <img src="/images/logos/logo/logo-platinum.svg" alt="" />
          <div class="price">Free</div>
          <!-- <div class="trial">Forever free</div> -->
          <hr />
          <ul>
            <li>
              <strong>Managed</strong>
              from our website
            </li>
            <li>
              <strong>Free</strong>
              receiving certificates
            </li>
            <li>
              <strong>Free</strong>
              sharing certificates
            </li>
          </ul>
        </div>

        <!--Pricing plan-->
        <div class="pricing-plan">
          <div class="name">University</div>
          <img src="/images/logos/logo/logo-accent.svg" alt="" />
          <div class="price">$5 per certificate</div>
          <!-- <div class="trial">Free 14 day trial</div> -->
          <hr />
          <ul>
            <li>
              <strong>Managed</strong>
              from our website
            </li>
            <li>
              <strong>Logged</strong>
              in the blockchain
            </li>
            <li>
              <strong>Easy</strong>
              adoption
            </li>
            <li>
              <strong>Personal</strong>
              support
            </li>
          </ul>
        </div>
      </div>

      <!--CTA-->
      <div class="cta-block no-border">
        <div class="head-text">
          <h3>Want to get started?</h3>
          <p>Let us know and we will contact your institution.</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <VButton
              class="action-button"
              color="primary"
              rounded
              elevated
              to="#"
            >
              Contact us
            </VButton>
            <a
              to="#"
              target="_blank"
              rel="noopener"
              class="button chat-button is-secondary"
            >
              Schedule a call
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
