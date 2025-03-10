import FacebookLogin from "@greatsumini/react-facebook-login";
import axios from "axios";
import AppButton from "../common/button/pages";
import Image from "next/image";
import FacebookLogo from "media/assets/fb_logo.webp";

const FBLogin = () => {
    const responseFacebook = async (response: any) => {
        console.log("Sending data111111:", response);

        if (response.name) {
            const userData = {
                name: response.name,
                email: response.email,
                provider: "facebook",
                provider_id: response.id,
            };
            console.log("Sending data2222:", userData);
            try {
                const res = await axios.post(
                    "https://backend.aiproresume.com/public/api/login/social-response",
                    userData
                );
                console.log("Sending data333:", res.data);
            } catch (error: any) {
                console.error("Facebook login error:", error.response?.data?.message || error.message);
            }
        }
    };

    return (
        <FacebookLogin
            appId={process.env.NEXT_PUBLIC_fb_app_id ?? ""}
            onSuccess={responseFacebook}
            onFail={(error) => console.error("Login Failed!", error)}
            render={({ onClick }) => (
                <AppButton title='Sign-in  with Facebook'
                    onClick={onClick}
                    className="w-[100%] border border-solid text-gray-400 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
                    childClassName="sm:tracking-widest relative"
                    leftIcon={
                        <>
                            <Image
                                src={FacebookLogo}
                                alt="My Image"
                                width={25}
                                height={25}
                                className="mr-2"
                            />
                        </>
                    }
                />
            )}
        />
    );
};

export default FBLogin
