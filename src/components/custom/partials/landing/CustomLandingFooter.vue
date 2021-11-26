<template>
  <footer class="vuero-footer">
    <div class="container">
      <div class="footer-head">
        <div class="head-text">
          <h3>Ready to join the future?</h3>
          <p>Sign up and see how the app works</p>
        </div>
        <div class="head-action">
          <div class="buttons">
            <VButton
              :to="{ name: 'auth-onboarding' }"
              color="primary"
              bold
              rounded
              raised
            >
              Sign up
            </VButton>
            <a to="#" class="button chat-button"> Contact us </a>
          </div>
        </div>
      </div>
      <div class="columns footer-body">
        <!-- Column -->
        <div class="column is-4">
          <div class="p-t-10 p-b-10">
            <!-- <AnimatedLogo width="36px" height="36px" /> -->
            <img
              src="../../../../assets/illustrations/diplamo-logo.svg"
              alt=""
              width="64px"
              height="64px"
            />
            <div class="footer-description p-t-10 p-b-10">
              Diplamo is built for students and institutions alike. It's
              intuitive design makes issuing and sharing certificates a breeze.
            </div>
          </div>
          <div>
            <!-- <span class="moto">
              By Lillup 2021. Reshaping the way we live
              <i aria-hidden="true" class="fas fa-heart text-danger"></i>
            </span> -->
            <div class="social-links p-t-10 p-b-10">
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-facebook"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-twitter"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-linkedin"></i>
                </span>
              </a>
              <a href="#">
                <span class="icon">
                  <i aria-hidden="true" class="fab fa-github"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- Column -->
        <div class="column is-6 is-offset-2">
          <div class="columns is-flex-tablet-p">
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Diplamo</li>
                <li class="column-item"><a href="#">Our values</a></li>
                <li class="column-item"><a href="#">Contact us</a></li>
                <li class="column-item"><a href="#">Schedule a call</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Support</li>
                <li class="column-item"><a href="#">Frequent questions</a></li>
                <li class="column-item"><a href="#">Support center</a></li>
              </ul>
            </div>
            <!-- Column -->
            <div class="column">
              <ul class="footer-column">
                <li class="column-header">Terms</li>
                <li class="column-item"><a href="#">Terms of Service</a></li>
                <li class="column-item"><a href="#">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright has-text-centered">
        <p>&copy; 2021 | <a to="#">Diplamo</a></p>
      </div>
    </div>
  </footer>
  <!-- /Simple light footer -->
</template>
