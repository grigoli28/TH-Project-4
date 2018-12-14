import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="sidebar-nav" />
      <div className="login-wrap">
        <div className="login-html">
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            Sign Up
          </label>
          <div className="login-form">
            <div className="sign-in-htm">
              <div className="group">
                <label htmlFor="user" className="login-label">
                  Username
                </label>
                <input id="user" type="text" className="login-input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="login-label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="login-input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="check">
                  <span className="icon" /> Keep me Signed in
                </label>
              </div>
              <div className="group">
                <button
                  type="submit"
                  className="login-btn"
                  defaultValue="Sign In"
                >
                  SUBMIT
                </button>
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div className="sign-up-htm">
              <div className="group">
                <label htmlFor="user" className="login-label">
                  Username
                </label>
                <input id="user" type="text" className="login-input" />
              </div>
              <div className="group">
                <label htmlFor="pass" className="login-label">
                  Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="login-input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="login-label">
                  Repeat Password
                </label>
                <input
                  id="pass"
                  type="password"
                  className="login-input"
                  data-type="password"
                />
              </div>
              <div className="group">
                <label htmlFor="pass" className="login-label">
                  Email Address
                </label>
                <input id="pass" type="text" className="login-input" />
              </div>
              <div className="group">
                <button
                  type="submit"
                  className="login-btn"
                  defaultValue="Sign Up"
                >
                  SUBMIT
                </button>
              </div>
              <div className="hr" />
              <div className="foot-lnk">
                <label htmlFor="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
