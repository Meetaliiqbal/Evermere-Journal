/* =========================================================
   EVERMERE JOURNAL — FOOTER
   ========================================================= */

(function () {

  const footerTarget = document.getElementById("footer");

  if (!footerTarget) return;

  /* Reset wrapper so no unwanted spacing/borders appear */
  footerTarget.style.position = "static";
  footerTarget.style.display = "block";
  footerTarget.style.width = "100%";
  footerTarget.style.margin = "0";
  footerTarget.style.padding = "0";
  footerTarget.style.border = "0";
  footerTarget.style.background = "transparent";

  footerTarget.innerHTML = `

    <footer class="evermere-footer">

      <div class="evermere-footer-inner">

        <!-- BRAND -->

        <div class="evermere-footer-brand">

          <a
            href="index.html"
            class="evermere-footer-logo"
          >
            Evermere
          </a>

          <p>
            Evermere Journal is an independent
            editorial space exploring food, travel,
            nature, fashion, thoughtful words,
            and beautiful spaces.
          </p>

        </div>


        <!-- LEGAL -->

        <div class="evermere-footer-legal">

          <div class="evermere-footer-label">
            INFORMATION
          </div>

          <nav aria-label="Legal Navigation">

            <a href="terms.html">
              Terms of Service
            </a>

            <a href="privacy.html">
              Privacy Policy
            </a>

            <a href="disclaimer.html">
              Disclaimer
            </a>

          </nav>

        </div>

      </div>


      <!-- FOOTER BOTTOM -->

      <div class="evermere-footer-bottom">

        <span>
          © ${new Date().getFullYear()} Evermere Journal.
          All rights reserved.
        </span>

        <span>
          Independent Editorial Journal
        </span>

      </div>

    </footer>


    <style>

      /* =====================================================
         FOOTER RESET
      ===================================================== */

      #footer {
        position: static !important;

        width: 100% !important;

        margin: 0 !important;

        padding: 0 !important;

        border: 0 !important;

        background: transparent !important;
      }


      /* =====================================================
         MAIN FOOTER
      ===================================================== */

      .evermere-footer {

        display: block;

        width: 100%;

        margin: 0;

        padding: 78px 0 28px;

        background: #252725;

        color: #F3F1EA;

        border: 0;

      }


      /* =====================================================
         FOOTER INNER
      ===================================================== */

      .evermere-footer-inner {

        width:
          min(1220px, calc(100% - 50px));

        margin: 0 auto;

        padding: 0 0 55px;

        display: grid;

        grid-template-columns: 1fr auto;

        align-items: start;

        gap: 80px;

        border-bottom:
          1px solid rgba(255,255,255,.10);

      }


      /* =====================================================
         BRAND
      ===================================================== */

      .evermere-footer-brand {

        max-width: 430px;

      }


      .evermere-footer-logo {

        display: inline-block;

        margin: 0;

        padding: 0;

        color: #F3F1EA;

        font-family:
          "DM Serif Display",
          Georgia,
          serif;

        font-size: 40px;

        font-weight: 400;

        line-height: 1;

        letter-spacing: -.7px;

        text-decoration: none;

      }


      .evermere-footer-brand p {

        max-width: 390px;

        margin: 19px 0 0;

        padding: 0;

        color: #AEB3AC;

        font-family:
          "DM Sans",
          Arial,
          sans-serif;

        font-size: 12px;

        line-height: 1.85;

      }


      /* =====================================================
         LEGAL AREA
      ===================================================== */

      .evermere-footer-legal {

        min-width: 220px;

        margin: 0;

        padding: 0;

      }


      .evermere-footer-label {

        margin: 0 0 18px;

        padding: 0;

        color: #7F877F;

        font-family:
          "DM Sans",
          Arial,
          sans-serif;

        font-size: 8px;

        font-weight: 600;

        letter-spacing: 2.3px;

        line-height: 1.2;

        text-transform: uppercase;

      }


      .evermere-footer-legal nav {

        display: flex;

        flex-direction: column;

        align-items: flex-start;

        gap: 13px;

        margin: 0;

        padding: 0;

      }


      .evermere-footer-legal a {

        position: relative;

        display: inline-block;

        margin: 0;

        padding: 0;

        color: #D0D4CE;

        font-family:
          "DM Sans",
          Arial,
          sans-serif;

        font-size: 11px;

        font-weight: 500;

        line-height: 1.5;

        text-decoration: none;

        transition:
          color .25s ease;

      }


      .evermere-footer-legal a::after {

        content: "";

        position: absolute;

        left: 0;

        bottom: -3px;

        width: 0;

        height: 1px;

        background: #B9C3B5;

        transition:
          width .25s ease;

      }


      .evermere-footer-legal a:hover {

        color: #FFFFFF;

      }


      .evermere-footer-legal a:hover::after {

        width: 100%;

      }


      /* =====================================================
         BOTTOM BAR
      ===================================================== */

      .evermere-footer-bottom {

        width:
          min(1220px, calc(100% - 50px));

        margin: 22px auto 0;

        padding: 0;

        display: flex;

        align-items: center;

        justify-content: space-between;

        gap: 25px;

        color: #777D77;

        font-family:
          "DM Sans",
          Arial,
          sans-serif;

        font-size: 8.5px;

        line-height: 1.5;

        letter-spacing: .6px;

      }


      /* =====================================================
         TABLET
      ===================================================== */

      @media (max-width: 700px) {

        .evermere-footer {

          padding: 60px 0 25px;

        }


        .evermere-footer-inner {

          width:
            min(100% - 32px, 560px);

          display: block;

          padding-bottom: 38px;

        }


        .evermere-footer-brand {

          max-width: 100%;

        }


        .evermere-footer-logo {

          font-size: 36px;

        }


        .evermere-footer-brand p {

          max-width: 100%;

          margin-top: 17px;

          font-size: 11.5px;

          line-height: 1.8;

        }


        .evermere-footer-legal {

          min-width: 0;

          margin-top: 38px;

        }


        .evermere-footer-label {

          margin-bottom: 17px;

        }


        .evermere-footer-legal nav {

          gap: 14px;

        }


        .evermere-footer-legal a {

          font-size: 11px;

        }


        .evermere-footer-bottom {

          width:
            min(100% - 32px, 560px);

          margin-top: 20px;

          align-items: flex-start;

          flex-direction: column;

          gap: 7px;

          line-height: 1.6;

        }

      }


      /* =====================================================
         SMALL PHONES
      ===================================================== */

      @media (max-width: 375px) {

        .evermere-footer-inner,
        .evermere-footer-bottom {

          width:
            calc(100% - 26px);

        }


        .evermere-footer {

          padding-top: 54px;

        }


        .evermere-footer-logo {

          font-size: 34px;

        }


        .evermere-footer-brand p {

          font-size: 11px;

          line-height: 1.75;

        }


        .evermere-footer-legal {

          margin-top: 34px;

        }


        .evermere-footer-legal a {

          font-size: 10.5px;

        }

      }


      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      @media (prefers-reduced-motion: reduce) {

        .evermere-footer-legal a,
        .evermere-footer-legal a::after {

          transition: none;

        }

      }

    </style>
  `;

})();