import { clearSessionAndStorages, handleSetToken, handleSetUser } from "@/redux/slices/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const GoogleLogin = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, token } = useSelector((state: RootState) => state.auth);

    const onSuccess = async (res: any) => {
        console.log(res, "OnSuccess 11");

        try {
            const userInfo = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
                headers: { Authorization: `Bearer ${res.access_token}` },
            });

            console.log(userInfo, "OnSuccess 22");
            const article = {
                name: userInfo.data.name,
                email: userInfo.data.email,
                provider: "google",
                provider_id: userInfo.data.sub,
            };
            console.log(article, "OnSuccess 33");

            const response = await axios.post("https://backend.aiproresume.com/public/api/login/social-response", article);
            console.log(response, "OnSuccess 44");
            dispatch(clearSessionAndStorages());
            dispatch(handleSetUser(response?.data?.data));
            dispatch(handleSetToken(response?.data?.data?.token));
        } catch (error: any) {
            console.error("Error during login:", error);
        }
    };

    const onFailure = () => {
        console.log("Login Failed");
    };

    const login = useGoogleLogin({
        onSuccess,
        onError: onFailure,
    });

    return (
        <div className="grid space-y-3">
            <button
                onClick={() => login()}
                className="w-[100%] border border-solid text-slate-500 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white ease-in transition-all flex justify-center items-center"
            >
                Sign-up with Google
            </button>
        </div>
    );
};

export default GoogleLogin;
