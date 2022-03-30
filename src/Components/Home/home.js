import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import "./home.css";

function Home() {
  const { signInWithGoogle, currentUser } = useAuth();

  const location = useLocation();
  const history = useHistory();

  function handleRedirectToOrBack() {
    history.replace(location.state?.from ?? "/profile");
  }

  return (
    <div>
      <section className="container-fluid home">
        <h1 className="text-center">Welcome to Blockbuster Mini</h1>
        <h3 className="text-center sub-title">
          <section className="carousel-bar">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://howchoo.com/media/nz/c0/zj/blockbuster.jpeg"
                    class="d-block w-100"
                    alt=""
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.cnet.com/a/img/resize/f35c4615f96b37a2ff80c448480bff909d8a96ee/2013/11/12/08d40326-67d7-11e3-a665-14feb5ca9861/blockbuster.jpg?auto=webp&fit=crop&height=675&width=1200"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://live.staticflickr.com/8207/8279723788_353ee6d14a_b.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </section>
          Let's take it back to the good ol' days!
        </h3>
        <div className="container">
          <div className="row">
            <div className="text-center login-bb">
              {currentUser ? (
                ""
              ) : (
                <button
                  className="login-button ui button col-2"
                  onClick={() =>
                    signInWithGoogle()
                      .then((user) => {
                        handleRedirectToOrBack();
                      })
                      .catch((e) => console.log(e.message))
                  }
                >
                  Login with Google
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
