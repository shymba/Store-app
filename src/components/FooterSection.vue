<template>
  <div class="footer">
    <div class="footer-section">
      <div class="footer-contacts">
        <address class="contacts">
          <a href="mailto:philipp@funtcoffee.com.ua">
            <span class="email">e-mail: testmail@gmail.com</span>
          </a>
          <a class="tel:+389991112233">
            <span>tel: +38 999 111 22 33</span>
          </a>
        </address>
      </div>
      <div class="footer-social">
        <ul class="social">
          <li class="social-item fb"><a href="#" class="social-link">f</a></li>
          <li class="social-item in"><a href="#" class="social-link">In</a></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "FooterSection"
}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 4rem;
  color: #FFFFFF;

  .footer-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-left: 25px;

    .contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      a {
        text-decoration: none;
        color: #FFFFFF;
      }
    }

    .footer-social {
      margin-right: 20px;
    }

    .social {
      padding: 0;
      list-style: none;
      display: flex;
    }

    .social-item {
      width: 36px;
      height: 36px;
      background-color: #5b5249;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin-left: 10px;
    }

    .social-link {
      text-decoration: none;
      font-size: 16px;
      color: #fff;
    }

  }
}

</style>