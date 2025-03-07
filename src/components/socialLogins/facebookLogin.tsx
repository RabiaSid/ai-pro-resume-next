import FacebookLogin from "@greatsumini/react-facebook-login";
import axios from "axios";

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

                // console.log("Login Successful:", res.data);

                // if (res.data.data.is_admin === 0) {
                //     console.log("User is not admin, navigating to dashboard...");
                // } else {
                //     console.log("User is admin, navigating to admin dashboard...");
                // }
            } catch (error: any) {
                console.error("Facebook login error:", error.response?.data?.message || error.message);
            }
        }
    };

    return (
        <FacebookLogin
            appId="1613981572684330"
            onSuccess={responseFacebook}
            onFail={(error) => console.error("Login Failed!", error)}
            render={({ onClick }) => (
                <button
                    onClick={onClick}
                    className="w-full border border-solid text-slate-500 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-all flex justify-center items-center"
                >
                    <img src="/facebook-logo.png" alt="Facebook Logo" width={25} height={25} className="mr-2" />
                    Sign-up with Facebook
                </button>
            )}
        />
    );
};

export default FBLogin
