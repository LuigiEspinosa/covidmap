<template>
  <div class="right-column">
    <div class="logo-area">
      <header>
        <div class="logo-header">
          <a href="#">
            <!-- <img
              class="dark"
              src="./assets/img/logo650x122.png"
              alt="Coronavirus App"
              width="650"
              height="122"
            />
            <img
              class="light"
              src="./assets/img/logo650x122_light.png"
              alt="Coronavirus App"
              width="650"
              height="122"
            /> -->
          </a>
        </div>

        <div class="card nightmode">
          <div class="night-container">
            <div class="toggle-wrapper">
              <label for="chk" class="toggle">
                <input type="checkbox" class="checkbox" id="chk" />
                <div class="toggler round"></div>
              </label>
            </div>
          </div>
        </div>
      </header>

      <div class="statistic">
        <div class="stc-card-container">
          <div class="card">
            <div class="stc-card stc-infect">
              <p class="stc-card-num">10,265,928</p>
              <p class="stc-card-title">Infections</p>
              <p class="stc-card-rate">Mild cases</p>
              <p class="stc-card-percent">
                <i class="fas fa-angle-double-up"></i>95.5%
              </p>
            </div>
          </div>
          <div class="card">
            <div class="stc-card stc-death">
              <p class="stc-card-num">504,759</p>
              <p class="stc-card-title">Deaths</p>
              <p class="stc-card-rate">Death rate</p>
              <p class="stc-card-percent">
                <i class="fas fa-angle-double-up"></i>95.5%
              </p>
            </div>
          </div>
          <div class="card">
            <div class="stc-card stc-recover">
              <p class="stc-card-num">5,361,418</p>
              <p class="stc-card-title">Recoveries</p>
              <p class="stc-card-rate">Recovery Rate</p>
              <p class="stc-card-percent">
                <i class="fas fa-angle-double-up"></i>95.5%
              </p>
            </div>
          </div>
          <div class="card">
            <div class="stc-card stc-active">
              <p class="stc-card-num">26,719</p>
              <p class="stc-card-title">Critical</p>
              <p class="stc-card-rate">Critical cases</p>
              <p class="stc-card-percent">
                <i class="fas fa-angle-double-up"></i>95.5%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card nightmode nightmode-desktop">
      <div class="night-container">
        <div class="toggle-wrapper">
          <label for="chk_desktop" class="toggle">
            <input type="checkbox" class="checkbox" id="chk_desktop" />
            <div class="toggler round"></div>
          </label>
        </div>

        <div class="lang">
          <div class="flag">
            <div class="jp">
              JP
              <!-- <img
                src="./assets/flags/JP.png"
                alt="Japan"
                width="30"
                height="30"
              /> -->
            </div>
            <div class="us">
              US
              <!-- <img
                src="./assets/flags/US.png"
                alt="US"
                width="30"
                height="30"
              /> -->
            </div>
          </div>
          <i class="fas fa-angle-up"></i>
        </div>
      </div>
    </div>

    <div class="card stats">
      <div class="world-cases">
        <h1>Worldwide cases</h1>
        <div class="statistic">
          <div class="stc-card-container">
            <div class="card">
              <div class="stc-card stc-infect">
                <p class="stc-card-num">2,329,651</p>
                <p class="stc-card-title">Infections</p>
              </div>
            </div>
            <div class="card">
              <div class="stc-card stc-death">
                <p class="stc-card-num">160,721</p>
                <p class="stc-card-title">Deaths</p>
              </div>
            </div>
            <div class="card">
              <div class="stc-card stc-recover">
                <p class="stc-card-num">595,433</p>
                <p class="stc-card-title">Recoveries</p>
              </div>
            </div>
            <div class="card">
              <div class="stc-card stc-active">
                <p class="stc-card-num">26,719</p>
                <p class="stc-card-title">Critical</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="us-cases">
        <h1>
          In the united states
          <!-- <img src="./assets/flags/US.png" alt="US" width="30" height="30" /> -->
        </h1>
        <div class="stc-card-container">
          <div class="card">
            <div class="stc-card stc-infect">
              <p class="stc-card-num">740.557</p>
              <p class="stc-card-title">Infections</p>
            </div>
          </div>
          <div class="card">
            <div class="stc-card stc-death">
              <p class="stc-card-num">38.979</p>
              <p class="stc-card-title">Deaths</p>
            </div>
          </div>
        </div>
        <div class="us-sort">
          <input
            type="text"
            autocomplete="off"
            placeholder="Search by the USA States"
            class="search-input"
            value=""
          />
          <div class="sort-by drop-us">
            Sort By
            <i class="fas fa-sort"></i>
            <div class="sort-dropdown us-dropdown">
              <a class="slots active">
                <div class="round"></div>
                <span>New cases</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>New deaths</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Total cases</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Total deaths</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Recoveries</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Critical</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Per 1 million</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Alphabetical</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="japan-cases">
        <h1>
          In Japan
          <!-- <img src="./assets/flags/JP.png" alt="Japan" width="30" height="30" /> -->
        </h1>
        <div class="stc-card-container">
          <div class="card">
            <div class="stc-card stc-infect">
              <p class="stc-card-num">10.437</p>
              <p class="stc-card-title">Infections</p>
            </div>
          </div>
          <div class="card">
            <div class="stc-card stc-death">
              <p class="stc-card-num">63</p>
              <p class="stc-card-title">Deaths</p>
            </div>
          </div>
        </div>
        <div class="japan-sort">
          <input
            type="text"
            autocomplete="off"
            placeholder="Search by Prefecture 県"
            class="search-input"
            value=""
          />
          <div class="sort-by drop-japan">
            Sort By
            <i class="fas fa-sort"></i>
            <div class="sort-dropdown jp-dropdown">
              <a class="slots active">
                <div class="round"></div>
                <span>New cases</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>New deaths</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Total cases</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Total deaths</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Recoveries</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Critical</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Per 1 million</span>
              </a>
              <a class="slots">
                <div class="round"></div>
                <span>Alphabetical</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="countries">
      <div class="search-contry">
        <div class="update">last update 3 hours ago</div>
        <div class="countries-title">
          <span class="title">Covid-19 Cases</span>
          <span class="subtitle">Today's Stats</span>
        </div>
        <input
          type="text"
          autocomplete="off"
          placeholder="Search by Country"
          class="search-input"
          value=""
        />
        <div class="sort-by drop-country">
          Sort By
          <i class="fas fa-sort"></i>
          <div class="sort-dropdown country-dropdown">
            <a class="slots active">
              <div class="round"></div>
              <span>New cases</span>
            </a>
            <a class="slots">
              <div class="round"></div>
              <span>New deaths</span>
            </a>
            <a class="slots">
              <div class="round"></div>
              <span>Total cases</span>
            </a>
            <a class="slots">
              <div class="round"></div>
              <span>Total deaths</span>
            </a>
            <a class="slots">
              <div class="round"></div>
              <span>Recoveries</span>
            </a>
            <a class="slots">
              <div class="round"></div>
              <span>Critical</span>
            </a>
            <a class="slots">
              <div class="round"></div>
              <span>Per 1 million</span>
            </a>
            <a class="slots">
              <div class="round"></div>
              <span>Alphabetical</span>
            </a>
          </div>
        </div>
      </div>

      <div class="country-area">
        <div class="country-item">
          <div class="item-overlay">
            <div class="overlay-blocks overlay-flag">
              <!-- <img
                src="./assets/flags/US.png"
                alt="USA"
                width="30"
                height="30"
              /> -->
              <span class="blocks-subtitle country-name">USA</span>
            </div>
            <div class="overlay-blocks">
              2,653,392
              <span class="blocks-subtitle">Infections</span>
            </div>
            <div class="overlay-blocks">
              128,566
              <span class="blocks-subtitle">Deaths</span>
            </div>
            <div class="overlay-blocks">
              1,099,219
              <span class="blocks-subtitle">Recoveries</span>
            </div>
            <div class="overlay-blocks">
              15,791
              <span class="blocks-subtitle">Critical</span>
            </div>
          </div>

          <div class="item-flag">
            <!-- <img src="./assets/flags/US.png" alt="" width="30" height="30" /> -->
          </div>

          <div class="item-details">
            <div class="details-title">USA</div>
            <div class="details-stats">
              <span class="cases-subtitle">2,653,392 Cases</span>
              <span class="ampers">&</span>
              <span class="death-subtitle">128,566 Deaths</span>
            </div>
          </div>

          <div class="details-update">
            <span class="new-cases">
              +16,315 Cases
              <span class="percent positive"
                ><i class="fas fa-caret-up"></i>98%</span
              >
            </span>

            <span class="new-deaths">
              +129 Deaths
              <span class="percent negative"
                ><i class="fas fa-caret-down"></i>98%</span
              >
            </span>
          </div>
        </div>

        <div class="country-item">
          <div class="item-overlay">
            <div class="overlay-blocks overlay-flag">
              <!-- <img
                src="./assets/flags/US.png"
                alt="USA"
                width="30"
                height="30"
              /> -->
              <span class="blocks-subtitle country-name">USA</span>
            </div>
            <div class="overlay-blocks">
              2,653,392
              <span class="blocks-subtitle">Infections</span>
            </div>
            <div class="overlay-blocks">
              128,566
              <span class="blocks-subtitle">Deaths</span>
            </div>
            <div class="overlay-blocks">
              1,099,219
              <span class="blocks-subtitle">Recoveries</span>
            </div>
            <div class="overlay-blocks">
              15,791
              <span class="blocks-subtitle">Critical</span>
            </div>
          </div>

          <div class="item-flag">
            <!-- <img src="./assets/flags/US.png" alt="" width="30" height="30" /> -->
          </div>

          <div class="item-details">
            <div class="details-title">USA</div>
            <div class="details-stats">
              <span class="cases-subtitle">2,653,392 Cases</span>
              <span class="ampers">&</span>
              <span class="death-subtitle">128,566 Deaths</span>
            </div>
          </div>

          <div class="details-update">
            <span class="new-cases">
              +16,315 Cases
              <span class="percent positive"
                ><i class="fas fa-caret-up"></i>98%</span
              >
            </span>

            <span class="new-deaths">
              +129 Deaths
              <span class="percent negative"
                ><i class="fas fa-caret-down"></i>98%</span
              >
            </span>
          </div>
        </div>

        <div class="country-item">
          <div class="item-overlay">
            <div class="overlay-blocks overlay-flag">
              <!-- <img
                src="./assets/flags/US.png"
                alt="USA"
                width="30"
                height="30"
              /> -->
              <span class="blocks-subtitle country-name">USA</span>
            </div>
            <div class="overlay-blocks">
              2,653,392
              <span class="blocks-subtitle">Infections</span>
            </div>
            <div class="overlay-blocks">
              128,566
              <span class="blocks-subtitle">Deaths</span>
            </div>
            <div class="overlay-blocks">
              1,099,219
              <span class="blocks-subtitle">Recoveries</span>
            </div>
            <div class="overlay-blocks">
              15,791
              <span class="blocks-subtitle">Critical</span>
            </div>
          </div>

          <div class="item-flag">
            <!-- <img src="./assets/flags/US.png" alt="" width="30" height="30" /> -->
          </div>

          <div class="item-details">
            <div class="details-title">USA</div>
            <div class="details-stats">
              <span class="cases-subtitle">2,653,392 Cases</span>
              <span class="ampers">&</span>
              <span class="death-subtitle">128,566 Deaths</span>
            </div>
          </div>

          <div class="details-update">
            <span class="new-cases">
              +16,315 Cases
              <span class="percent positive"
                ><i class="fas fa-caret-up"></i>98%</span
              >
            </span>

            <span class="new-deaths">
              +129 Deaths
              <span class="percent negative"
                ><i class="fas fa-caret-down"></i>98%</span
              >
            </span>
          </div>
        </div>

        <div class="country-item">
          <div class="item-overlay">
            <div class="overlay-blocks overlay-flag">
              <!-- <img
                src="./assets/flags/US.png"
                alt="USA"
                width="30"
                height="30"
              /> -->
              <span class="blocks-subtitle country-name">USA</span>
            </div>
            <div class="overlay-blocks">
              2,653,392
              <span class="blocks-subtitle">Infections</span>
            </div>
            <div class="overlay-blocks">
              128,566
              <span class="blocks-subtitle">Deaths</span>
            </div>
            <div class="overlay-blocks">
              1,099,219
              <span class="blocks-subtitle">Recoveries</span>
            </div>
            <div class="overlay-blocks">
              15,791
              <span class="blocks-subtitle">Critical</span>
            </div>
          </div>

          <div class="item-flag">
            <!-- <img src="./assets/flags/US.png" alt="" width="30" height="30" /> -->
          </div>

          <div class="item-details">
            <div class="details-title">USA</div>
            <div class="details-stats">
              <span class="cases-subtitle">2,653,392 Cases</span>
              <span class="ampers">&</span>
              <span class="death-subtitle">128,566 Deaths</span>
            </div>
          </div>

          <div class="details-update">
            <span class="new-cases">
              +16,315 Cases
              <span class="percent positive"
                ><i class="fas fa-caret-up"></i>98%</span
              >
            </span>

            <span class="new-deaths">
              +129 Deaths
              <span class="percent negative"
                ><i class="fas fa-caret-down"></i>98%</span
              >
            </span>
          </div>
        </div>

        <div class="country-item">
          <div class="item-overlay">
            <div class="overlay-blocks overlay-flag">
              <!-- <img
                src="./assets/flags/US.png"
                alt="USA"
                width="30"
                height="30"
              /> -->
              <span class="blocks-subtitle country-name">USA</span>
            </div>
            <div class="overlay-blocks">
              2,653,392
              <span class="blocks-subtitle">Infections</span>
            </div>
            <div class="overlay-blocks">
              128,566
              <span class="blocks-subtitle">Deaths</span>
            </div>
            <div class="overlay-blocks">
              1,099,219
              <span class="blocks-subtitle">Recoveries</span>
            </div>
            <div class="overlay-blocks">
              15,791
              <span class="blocks-subtitle">Critical</span>
            </div>
          </div>

          <div class="item-flag">
            <!-- <img src="./assets/flags/US.png" alt="" width="30" height="30" /> -->
          </div>

          <div class="item-details">
            <div class="details-title">USA</div>
            <div class="details-stats">
              <span class="cases-subtitle">2,653,392 Cases</span>
              <span class="ampers">&</span>
              <span class="death-subtitle">128,566 Deaths</span>
            </div>
          </div>

          <div class="details-update">
            <span class="new-cases">
              +16,315 Cases
              <span class="percent positive"
                ><i class="fas fa-caret-up"></i>98%</span
              >
            </span>

            <span class="new-deaths">
              +129 Deaths
              <span class="percent negative"
                ><i class="fas fa-caret-down"></i>98%</span
              >
            </span>
          </div>
        </div>

        <div class="country-item">
          <div class="item-overlay">
            <div class="overlay-blocks overlay-flag">
              <!-- <img
                src="./assets/flags/US.png"
                alt="USA"
                width="30"
                height="30"
              /> -->
              <span class="blocks-subtitle country-name">USA</span>
            </div>
            <div class="overlay-blocks">
              2,653,392
              <span class="blocks-subtitle">Infections</span>
            </div>
            <div class="overlay-blocks">
              128,566
              <span class="blocks-subtitle">Deaths</span>
            </div>
            <div class="overlay-blocks">
              1,099,219
              <span class="blocks-subtitle">Recoveries</span>
            </div>
            <div class="overlay-blocks">
              15,791
              <span class="blocks-subtitle">Critical</span>
            </div>
          </div>

          <div class="item-flag">
            <!-- <img src="./assets/flags/US.png" alt="" width="30" height="30" /> -->
          </div>

          <div class="item-details">
            <div class="details-title">USA</div>
            <div class="details-stats">
              <span class="cases-subtitle">2,653,392 Cases</span>
              <span class="ampers">&</span>
              <span class="death-subtitle">128,566 Deaths</span>
            </div>
          </div>

          <div class="details-update">
            <span class="new-cases">
              +16,315 Cases
              <span class="percent positive"
                ><i class="fas fa-caret-up"></i>98%</span
              >
            </span>

            <span class="new-deaths">
              +129 Deaths
              <span class="percent negative"
                ><i class="fas fa-caret-down"></i>98%</span
              >
            </span>
          </div>
        </div>

        <div class="country-item">
          <div class="item-overlay">
            <div class="overlay-blocks overlay-flag">
              <!-- <img
                src="./assets/flags/US.png"
                alt="USA"
                width="30"
                height="30"
              /> -->
              <span class="blocks-subtitle country-name">USA</span>
            </div>
            <div class="overlay-blocks">
              2,653,392
              <span class="blocks-subtitle">Infections</span>
            </div>
            <div class="overlay-blocks">
              128,566
              <span class="blocks-subtitle">Deaths</span>
            </div>
            <div class="overlay-blocks">
              1,099,219
              <span class="blocks-subtitle">Recoveries</span>
            </div>
            <div class="overlay-blocks">
              15,791
              <span class="blocks-subtitle">Critical</span>
            </div>
          </div>

          <div class="item-flag">
            <!-- <img src="./assets/flags/US.png" alt="" width="30" height="30" /> -->
          </div>

          <div class="item-details">
            <div class="details-title">USA</div>
            <div class="details-stats">
              <span class="cases-subtitle">2,653,392 Cases</span>
              <span class="ampers">&</span>
              <span class="death-subtitle">128,566 Deaths</span>
            </div>
          </div>

          <div class="details-update">
            <span class="new-cases">
              +16,315 Cases
              <span class="percent positive"
                ><i class="fas fa-caret-up"></i>98%</span
              >
            </span>

            <span class="new-deaths">
              +129 Deaths
              <span class="percent negative"
                ><i class="fas fa-caret-down"></i>98%</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="card coffe">
      <div class="coffe-container">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <!-- <img
            class="dark"
            src="./assets/img/coffe390x65.png"
            alt="Buy me a coffe, Help keep the project alive | Coronavirusapp.io"
          />
          <img
            class="light"
            src="./assets/img/coffe390x65_light.png"
            alt="Buy me a coffe, Help keep the project alive | Coronavirusapp.io"
          /> -->
        </a>
      </div>
    </div>

    <div class="main-footer">
      <footer class="footer">
        <div class="support">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <!-- <img
              class="dark"
              src="./assets/img/coffe350x79.png"
              alt="Buy me a coffe, Help keep the project alive | Coronavirusapp.io"
            />
            <img
              class="light"
              src="./assets/img/coffe350x79_light.png"
              alt="Buy me a coffe, Help keep the project alive | Coronavirusapp.io"
            /> -->
          </a>
        </div>

        <div class="contact">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">Sources</a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer"
                >Follow us</a
              >
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">Contact</a>
            </li>
          </ul>
        </div>

        <div class="app-link">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-mobile-alt"></i>
            Install our App
          </a>
        </div>

        <div class="social-media">
          <ul>
            <li class="twitter">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
            </li>

            <li class="facebook">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>

            <li class="instagram">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
            </li>

            <li class="dribble">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
          </ul>
          <p>Share our Tracker</p>
        </div>
      </footer>
    </div>
  </div>
</template>
