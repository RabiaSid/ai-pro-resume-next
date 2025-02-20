'use client'
import React, { useEffect } from 'react'
import { GoogleLogin } from "react-google-login";
// import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { gapi } from "gapi-script";

const SocialLogin = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: global.google_client_id,
                scope: "",
            });
        }
        gapi.load("client:auth2", start);

        $(".fb_login_btn").html("Sign-In With Facebook");
    }, []);

    return (
        <div>
            <div className="flex flex-col gap-4">
                {/* Google Auth */}
                <div id="signInButton">
                    <GoogleLogin
                        clientId={global.google_client_id}
                        buttonText="Sign-In With Google"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                className="w-[100%] border border-solid text-slate-500 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
                            >
                                <img
                                    src={google_logo}
                                    alt="My Image"
                                    width={25}
                                    height={25}
                                    className="mr-2"
                                />{" "}
                                Sign-in with Google
                            </button>
                        )}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={false}
                    />
                </div>
                {/* FaceBook Auth */}
                {/* <FacebookLogin
                    appId={global.fb_app_id}
                    autoLoad={false}
                    fields="name,email,picture"
                    scope="public_profile,email"
                    // onClick={responseFacebook}
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            className="w-[100%] border border-solid text-slate-500 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
                        >
                            <img
                                src={fb_logo}
                                alt="My Image"
                                width={25}
                                height={25}
                                className="mr-2"
                            />{" "}
                            Sign-in with Facebook
                        </button>
                    )}
                /> */}
                {/* Linkedin Auth */}
                {/* <button
                    onClick={handleLinkedInLogin}
                    className="w-[100%] border border-solid text-slate-500 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
                >
                    <img
                        src={linked}
                        alt="My Image"
                        width={25}
                        height={25}
                        className="mr-2"
                    />{" "}
                    Sign-in with LinkedIn
                </button> */}
            </div>
        </div>
    )
}

export default SocialLogin
