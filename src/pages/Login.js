import React, { useState } from "react";
import * as e from "../helpers/loginErrorMessages";
import { useNavigate } from "react-router-dom";
import pwVisible from "../images/pwVisible.svg";
import pwHidden from "../images/pwHidden.svg";
import loginArt from "../images/loginArt.svg";

function Login() {
	const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [problem, setProblem] = useState("");

	const validateEmail = () => {
		const EMAIL_REGEX = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (!EMAIL_REGEX.test(email)) return setProblem(e.INVALID_EMAIL);
		return true;
	};

	const validatePassword = () => {
		const PASSWORD_REGEX =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,15}$/;
		if (!password.length) return setProblem(e.INVALID_PASSWORD);
		if (password.length < 8) return setProblem(e.SHORT_PASSWORD);
		if (password.length > 15) return setProblem(e.LONG_PASSWORD);
		if(password.search(/[0-9]/) === -1) return setProblem(e.NO_NUMBER_PASSWORD);
		if(password.search(/[A-Z]/) === -1) return setProblem(e.NO_UPPERCASE_PASSWORD);
		if(password.search(/[a-z]/) === -1) return setProblem(e.NO_LOWERCASE_PASSWORD);
		if (!PASSWORD_REGEX.test(password)) return setProblem(e.INVALID_PASSWORD_CHARACTERS);
		return true;
	};

	const validateLogin = () => {
		const validInputs = validateEmail() && validatePassword();
		if (validInputs) navigate("./store");
	};

  return (
		<div className="login">
			<img src={loginArt} alt="Login art." className="login-art" />
			<form className="login-form">
				<label>
					Email
					<input
						type="email"
						value={email}
						maxLength="30"
						onChange={({target}) => setEmail(target.value)}
					/>
				</label>
				<label className="pw-container">
					Password
					<img
						src={showPassword ? pwVisible : pwHidden}
						onClick={() => setShowPassword((prevState) => (!prevState))}
						alt="Toggle password."
						className="toggle-pw"
					/>
					<input
						maxLength="30"
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={({target}) => setPassword(target.value)}
						/>
				</label>
				<div className="login-btn-container">
					<p className="problem">{problem.length > 0 && problem}</p>
					<button type="button" onClick={validateLogin} className="login-btn">Login</button>
				</div>
			</form>
		</div>
  );
}

export default Login;
