import React from "react";
import Button from "./../components/button";
import Img_1 from "./../assets/pic_1.png";
import Img_2 from "./../assets/pic_2.jpg";
import Img_3 from "./../assets/pic_3.png";
import Img_4 from "./../assets/pic_4.jpg";
import Img_5 from "./../assets/pic_5.webp";
import Img_6 from "./../assets/pic_6.webp";
import Img_7 from "./../assets/pic_7.png";
import Img_8 from "./../assets/pic_8.1.webp";
import Img_9 from "./../assets/pic_9.jpg";
import Img_10 from "./../assets/pic_9 (1).png";
import Img_11 from "./../assets/pic_8.jpg";
import Img_12 from "./../assets/pic_12.jpg";
import Img_13 from "./../assets/pic_13.jpg";
import Img_14 from "./../assets/pic_15.jpg";
import Img_15 from "./../assets/pic_10.png";
import Img_16 from "./../assets/pic_17.jpg";
import Img_17 from "./../assets/pic_19.jpg";
import Img_18 from "./../assets/pic_20.jpg";
import Img_19 from "./../assets/pic_21.jpg";
import Img_20 from "./../assets/pic_22.jpg";
import Spinner from "./../components/spinner";
import navigate from "./../inc/scripts/utilities";
import { db } from "./../backend/app_backend";
import Swal from "sweetalert2";
import jQuery from "jquery";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '../inc/styles/homeSlider.css';
const Home = () => {
  const customBtnStyle = {
    fontSize: "18px",
  };

  function click() {
    /**
     * Default App page
     * The user wouldn't be redirected here on next visit
     *
     */

    Swal.fire({
      title: "Default Location",
      html: "<input type='text' placeholder='Enter location' class='form-control border-1 p-3 brand-small-text w-100' id='defaultLocation'>",
      confirmButtonText: "Save Location",
      confirmButtonColor: "rgb(83, 166, 250)",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    }).then((willProceed) => {
      if (willProceed.isConfirmed) {
        jQuery(($) => {
          $.noConflict();
          const $defaultLocation = $("#defaultLocation").val().trim();

          if ($defaultLocation === undefined || $defaultLocation == "") {
            Swal.fire({
              title: "Invalid Location!",
              html: "<p class=' text-center text-danger'>Please enter a valid location</p>",
              confirmButtonColor: "rgb(83, 166, 250)",
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              timer: 4000,
            });
          } else {
            Swal.fire({
              text: "Location saved successfully!",
              icon: "success",
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 3000,
            });

            //create a database attribute and save it
            db.create("HOME_PAGE_SEEN", true);
            db.create("USER_DEFAULT_LOCATION", $defaultLocation);
            db.create("TRACK_SAVED_LOCATION_WEATHER",false);
            db.create("WEATHER_UNIT","metric");
            navigate("weather");
          }
        });
      }
    });
  }

  return (
    <React.Fragment>
      <Spinner />
      <div className="weather-preloader container-fluid d-flex align-items-center flex-column">
        <main className="my-5 preloader-weather-heading">
          <h2 className="text-center text-capitalize m-auto fw-bold fs-2">
            How's today's weather?
          </h2>
        </main>
        
        <section
          className="m-auto text-center col-md-6 my-md-4 my-3"
          id="img-container"
        >
          <Splide
        options={{
          type       : 'loop',  // Optional: Type of transition (fade, loop, slide, etc.)
          heightRatio: 0.5,     // Optional: Adjust height ratio
          pagination: true,     // Show pagination (dots)
          arrows     : true,    // Show navigation arrows
          autoplay  : true,     // Enable autoplay
          interval  : 3000,     // Set autoplay interval in milliseconds (3 seconds)
        }}
      >
        <SplideSlide>
        <img
            src={Img_1}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 1 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_2}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 2 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_3}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 3 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_4}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 4 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_5}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 5 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_6}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_7}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_8}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_9}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_10}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_11}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_12}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_13}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_14}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_16}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_17}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_18}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_19}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        <SplideSlide>
        <img
            src={Img_20}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          />
          {/* 6 */}
        </SplideSlide>
        {/* <SplideSlide>
        <img
            src={Img_21}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          /> */}
          {/* 6 */}
        {/* </SplideSlide> */}
        {/* <SplideSlide>
        <img
            src={Img_22}
            className="img-fluid m-auto preloader-img"
            height="700"
            width="550"
            alt="current-weather-status"
          /> */}
          {/* 6 */}
        {/* </SplideSlide> */}
        {/* Add more slides as needed */}
      </Splide>
        </section>

        <br />
        <br />
        <br />
        <br />
        <br />

        <Button
          text="today's weather"
          style={customBtnStyle}
          className="brand-btn m-auto my-5 width-toggle"
          onClick={(event) => {
            click(event);
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;