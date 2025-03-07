import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const LinkedInLogin: React.FC = () => {
    const clientId = "7769gw1uz1ow19";
    const redirectUri = "https://aiproresume.com/login";
    const scope = "openid profile email";
    const state = "foobar";

    const searchParams = useSearchParams();
    const code = searchParams.get("code");

    useEffect(() => {
        if (code) {
            exchangeCodeForToken(code);
        }
    }, [code]);

    const handleLinkedInLogin = () => {
        const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&state=${state}&scope=${encodeURIComponent(scope)}`;

        window.location.href = authUrl;
    };

    const exchangeCodeForToken = async (authCode: string) => {
        try {
            const response = await axios.post(
                "https://backend.aiproresume.com/public/api/login/linkedin",
                { code: authCode, redirect_uri: redirectUri }
            );

            console.log("LinkedIn Login Success:", response.data);
        } catch (error: any) {
            console.error("LinkedIn login error:", error.response?.data?.message || error.message);
        }
    };

    return (
        <button
            onClick={handleLinkedInLogin}
            className="w-full border border-solid text-slate-500 border-slate-300 px-2 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-all flex justify-center items-center"
        >
            <img src="/linkedin-logo.png" alt="LinkedIn Logo" width={25} height={25} className="mr-2" />
            Sign-up with LinkedIn
        </button>
    );
};

export default LinkedInLogin;
