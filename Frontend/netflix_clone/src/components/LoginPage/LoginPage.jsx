import React from "react";
// eslint-disable-next-line
import styles from "./LoginPage.css";

export const LoginPage = () => {
  return (
    <div>
      <div>
        <button type="submit" class="btn btn-danger cte">
          Sign In
        </button>

        <div>
          <div class="position-absolute top-50 start-50 translate-middle fgh ">
            <form>
              <div >
                <label for="exampleInputEmail1" class="form-label text-white">
                  Sign In
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                   
                />
              </div>
              <div class="mb-5">
                <label
                  for="exampleInputPassword1"
                  class="form-label text-white"
                ></label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" class="mb-2 btn btn-danger mnc">
                Sign In
              </button>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  
                />

                <label
                  class="form-check-label text-white fw-light vvs"
                  for="exampleCheck1"
                >
                  Remember Me 
                </label>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
