import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Presentation Page</title>
          <meta property="og:title" content="Presentation Page" />
        </Head>
        <div data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div className="home-logo"></div>
            <div className="home-links-container">
              <span className="home-link Anchor">About us</span>
              <a href="#contact" className="home-link1 Anchor">
                contact
              </a>
            </div>
            <div className="home-cta-container">
              <button className="home-cta-btn button Anchor">Login</button>
              <div data-role="BurgerMenu" className="home-burger-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
            <div data-role="MobileMenu" className="home-mobile-menu">
              <div className="home-top">
                <img
                  alt="image"
                  src="/playground_assets/default-img.svg"
                  className="home-image"
                />
                <div data-role="CloseMobileMenu" className="home-container1">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-mid">
                <div className="home-links-container1">
                  <span className="home-link2 Anchor">features</span>
                  <span className="home-link3 Anchor">services</span>
                  <a href="#about-us" className="home-link4 Anchor">
                    About Us
                  </a>
                  <a href="#contact" className="home-link5 Anchor">
                    contact
                  </a>
                </div>
                <button className="home-cta-btn1 Anchor button">
                  sTART BUILDING
                </button>
              </div>
              <div className="home-bot">
                <div className="home-social-links-container">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon06"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon08"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading">Learn english in record time.</h1>
            <span className="home-text Section-Text">
              With our advanced methodologies our students learning is
              skyrocketing.
            </span>
            <button className="home-cta-btn2 button Anchor">
              START Learning
            </button>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1619314528204-59477dba78d2?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
            className="home-image1"
          />
        </div>
        <div className="home-section-separator"></div>
        <div id="about-us" className="home-about-us">
          <div className="home-heading-container">
            <h2 className="home-text1">
              An innovative approach to language learning
            </h2>
            <span className="home-secondary-text"></span>
            <button className="home-cta-btn3 button Anchor">
              START BUILDING
            </button>
          </div>
          <div className="home-text-container">
            <span className="home-text2">
              Our methodology is centered around the student.Each learning plan
              is centered around the ability of the student and is augmented by
              our cutting edge research.
            </span>
          </div>
          <button className="home-cta-btn4 button Anchor">
            START BUILDING
          </button>
        </div>
        <div className="home-section-separator1"></div>
        <div id="contact" className="home-contact">
          <div className="home-content-container">
            <h2 className="home-text3 Section-Heading">
              This is where to find us
            </h2>
            <div className="home-locations-container">
              <div className="home-location-2">
                <span className="home-heading1">
                  <span>Vancouver Office</span>
                  <br></br>
                </span>
                <div className="home-adress">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="Section-Text">Address</span>
                </div>
                <div className="home-email">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="Section-Text">E-mail Address</span>
                </div>
                <div className="home-phone">
                  <svg
                    viewBox="0 0 804.5714285714286 1024"
                    className="home-icon14"
                  >
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="Section-Text">Phone Number</span>
                </div>
              </div>
            </div>
            <div className="home-social-links-container1"></div>
          </div>
          <img
            alt="image"
            src="/playground_assets/default-img.svg"
            className="home-image2"
          />
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .home-logo {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .home-link1 {
            text-decoration: none;
          }
          .home-cta-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-cta-btn {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon {
            width: 36px;
            height: 36px;
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .home-top {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image {
            width: 50px;
            object-fit: cover;
          }
          .home-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-mid {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-links-container1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: column;
          }
          .home-link2 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link3 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link4 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link5 {
            text-decoration: none;
          }
          .home-cta-btn1 {
            color: var(--dl-color-gray-white);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-fiveunits);
            border-radius: 34px;
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-100);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-bot {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            margin-top: auto;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-social-links-container {
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-icon04 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-icon08 {
            width: 24px;
            height: 24px;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-hero-text-container {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-left: 50px;
            flex-direction: column;
          }
          .home-heading {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-text {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-cta-btn2 {
            color: var(--dl-color-gray-white);
            align-self: stretch;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-image1 {
            width: 50%;
            object-fit: contain;
          }
          .home-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-about-us {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-heading-container {
            width: 35%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-secondary-text {
            color: var(--dl-color-gray-500);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .home-cta-btn3 {
            color: var(--dl-color-gray-white);
            width: 80%;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-text2 {
            color: var(--dl-color-gray-500);
          }
          .home-cta-btn4 {
            color: var(--dl-color-gray-white);
            width: 80%;
            display: none;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-width: 0px;
            border-radius: 34px;
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-primary-100);
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-700);
          }
          .home-contact {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: flex-start;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
          }
          .home-content-container {
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-fiveunits);
            align-self: stretch;
            align-items: flex-start;
            border-color: var(--dl-color-gray-700);
            border-width: 1px;
            flex-direction: column;
            justify-content: flex-start;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-text3 {
            margin-top: var(--dl-space-space-fiveunits);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-locations-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-location-2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .home-adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-email {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .home-icon14 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .home-social-links-container1 {
            width: 200px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: flex;
            align-self: flex-start;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image2 {
            width: 50%;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column-reverse;
            }
            .home-hero-text-container {
              width: 80%;
            }
            .home-cta-btn2 {
              width: 40%;
            }
            .home-image1 {
              width: 80%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-about-us {
              flex-direction: column;
            }
            .home-heading-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-cta-btn3 {
              width: 40%;
              display: none;
            }
            .home-text-container {
              width: 100%;
            }
            .home-cta-btn4 {
              width: 280px;
              display: block;
              margin-top: var(--dl-space-space-doubleunit);
            }
            .home-locations-container {
              flex-wrap: wrap;
            }
            .home-image2 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-links-container {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-tripleunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .home-icon {
              fill: var(--dl-color-gray-white);
            }
            .home-heading {
              text-align: center;
            }
            .home-text {
              text-align: center;
            }
            .home-about-us {
              align-items: center;
            }
            .home-heading-container {
              align-items: center;
            }
            .home-text1 {
              text-align: center;
            }
            .home-secondary-text {
              text-align: center;
            }
            .home-contact {
              padding-right: var(--dl-space-space-tripleunit);
              flex-direction: column;
            }
            .home-content-container {
              width: 100%;
            }
            .home-image2 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-cta-btn {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-burger-menu {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .home-cta-btn1 {
              font-size: 16px;
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: var(--dl-space-space-doubleunit);
            }
            .home-hero-text-container {
              width: 100%;
            }
            .home-image1 {
              width: 100%;
            }
            .home-secondary-text {
              text-align: center;
            }
            .home-content-container {
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-text3 {
              text-align: center;
            }
            .home-locations-container {
              margin-bottom: 0px;
              justify-content: center;
            }
            .home-social-links-container1 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
