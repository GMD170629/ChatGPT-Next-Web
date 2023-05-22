import { useEffect, useState } from "react";
// import {
//     HashRouter as Router,
//     Routes,
//     Route,
//     useLocation,
//   } from "react-router-dom";
import { getLoginCode } from "../api/login";

const Login = () => {
  // const router = Route;
  const [loginCode, setLoginCode] = useState("");

  // useEffect(() => {
  //     // Check if user is already logged in
  //     // If yes, redirect to /chat
  //     const isLoggedIn = false; // Replace with actual check for logged in user
  //     if (isLoggedIn) {
  //         Router.push("/chat");
  //     }
  // }, []);

  useEffect(() => {
    // Fetch login code from API
    const fetchLoginCode = async () => {
      const data = await getLoginCode();
      setLoginCode(data.ticket);
    };
    fetchLoginCode();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {loginCode ? (
        <img
          src={`https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${loginCode}`}
          alt="Login QR Code"
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
};
export default Login;
