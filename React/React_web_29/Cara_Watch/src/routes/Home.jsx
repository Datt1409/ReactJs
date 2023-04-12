import React from "react";
import "../assets/css/home.css";

export default function Home() {
  return (
    <>
      <section id="banner">
        <h4>New Men Collection</h4>
        <h2>KASHMIR</h2>
        <button>Shop now</button>
      </section>

      {/* Category */}

      <div id="category">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="category-card first">
                <h3>Men's Watch</h3>
                  <i class="fa-regular fa-right-long right-icon"></i>
                {/* <a href="./Men.html">
                </a> */}
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6">
              <div class="category-card second">
                <h3>Women's Watch</h3>
                  <i class="fa-regular fa-right-long right-icon"></i>
                {/* <a href="./women.html">
                </a> */}
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-12">
              <div class="category-card third">
                <h3>Accessories</h3>
                <i class="fa-regular fa-right-long right-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
