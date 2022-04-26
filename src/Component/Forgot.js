import React from "react";

export const Forgot = () => {
  const reset = () => {
    alert("Password is sent to your email");
  };
  return (
    <div>
      <h4>Write your email</h4>
      <div className="form-group row">
        <div className=" offset-md-5">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="email"
          />
        </div>
      </div>
      <button className="btn btn-info" onClick={reset}>
        Reset Password
      </button>
    </div>
  );
};
