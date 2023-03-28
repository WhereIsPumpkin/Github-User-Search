import { useState } from "react";
import styles from "./App.module.scss";
import companyIcon from "./assets/icon-company.svg";
import locationIcon from "./assets/icon-location.svg";
import moonIcon from "./assets/icon-moon.svg";
import searchIcon from "./assets/icon-search.svg";
import sunIcon from "./assets/icon-sun.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import websiteIcon from "./assets/icon-website.svg";

function App() {
  fetch("https://api.github.com/users/whereispumpkin");

  return (
    <>
      <header>
        <h1>devfinder</h1>
        <div className={styles.modeSwitch}>
          <h2>LIGHT</h2>
          <img src={moonIcon} alt="sunIcon" />
        </div>
      </header>

      <section className={styles.searchBar}>
        <img src={searchIcon} alt="searchIcon" />
        <input type="text" className={styles.userSearch} 
        placeholder="Search Github username..."
        />
        <button className={styles.searchButton}>Search</button>
      </section>

      <div className={styles.mainBox}>
        <div className={styles.heading}>
          <img src="#" />
          <div className={styles.headingWrapper}>
            <div className={styles.nameWrapper}>
              <h1>Name</h1>
              <p>@username</p>
            </div>
            <span>Joined 123</span>
          </div>
        </div>

        <div className={styles.contentInfo}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate
            soluta quibusdam molestiae quisquam sapiente voluptatibus incidunt
            ullam suscipit eveniet!
          </p>
          <div className={styles.socialInfo}>
            <div className={styles.repos}>
              <span>Repos</span>
              <p>8</p>
            </div>
            <div className={styles.followers}>
              <span>Followers</span>
              <p>3938</p>
            </div>
            <div className={styles.following}>
              <span>Following</span>
              <p>9</p>
            </div>
          </div>
          <div className={styles.generalInfo}>
            <div className={styles.infoWrapp}>
              <img src={locationIcon} />
              <span>San Francisco</span>
            </div>
            <div className={styles.infoWrapp}>
              <img src={websiteIcon} />
              <span>website.website</span>
            </div>
            <div className={styles.infoWrapp}>
              <img src={twitterIcon} />
              <span>twitterUsername</span>
            </div>
            <div className={styles.infoWrapp}>
              <img src={companyIcon} />
              <span>company</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
