import { Link } from "react-router-dom";
import React, {useState} from "react";
import { useInput } from "../Common/Hooks/useInput";
const Login = () => {
    const {
        value: email,
        bind: bindemail,
        reset: resetemail,
      } = useInput("");
      const {
        value: password,
        bind: bindpassword,
        reset: resetpassword,
      } = useInput("");
      const [inProgress,setProgress] = useState(false);
      const handleLogin = (evt) => {
        evt.preventDefault();
        setProgress(true);
        alert(`Submitting Name ${email} and email ${email}`);
        resetemail();
        resetpassword();
        setProgress(false);
    }
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In</h1>
            <p className="text-xs-center">
              <Link to="/register">Need an account?</Link>
            </p>

            <form onSubmit={handleLogin}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    {...bindemail}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    {...bindpassword}
                  />
                </fieldset>

                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={inProgress}
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
