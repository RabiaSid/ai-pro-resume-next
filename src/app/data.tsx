import MainSliderImage1 from "media/assets/home_slider/slider_1.webp";
import MainSliderImage2 from "media/assets/home_slider/slider_2.webp";
import MainSliderImage3 from "media/assets/home_slider/slider_3.webp";
import MainSliderImage4 from "media/assets/home_slider/slider_4.webp";
import MainSliderImage5 from "media/assets/home_slider/slider_5.webp";

const images = [
  MainSliderImage1,
  MainSliderImage2,
  MainSliderImage3,
  MainSliderImage4,
  MainSliderImage5,
];

export const BannerData = {
  user: { token: "exampleToken" },
  title: "Let AI Build the Resume",
  subtitle: [
    "That Builds Your Career",
    "Your Future Starts Here",
    "Create the Best Resume",
  ],
  description: (
    <>
      Build a <b>professional resume</b> with our outstanding{" "}
      <b>resume maker </b>
      in no time. AI Pro Resume is an easy, fast, free,{" "}
      <b>creative resume-building</b> platform with incredible features and
      services. You can create a professional, eye-catching resume with custom
      colors and fonts. Our <b>ATS Friendly templates </b> ensure you get a
      notice from the employer. Get incredible{" "}
      <b>resume and cover letter writing services</b> to level up your game. Our
      smart AI-based cover letter and suggestions increase your chances of
      landing your dream interview. Make a big move with our resume parser and
      open global job opportunities effortlessly. Let’s get started!
    </>
  ),
  button1: {
    title: "IMPORT RESUME",
    mainColor: "#0072b1",
    sliderColor: "#fff59c",
    mainTextColor: "#FFFFFF",
    hoverTextColor: "#0072b1",
    authLink: "/import-resume",
    guestLink: "/login",
  },
  button2: {
    title: "CREATE RESUME",
    mainColor: "#0072b1",
    sliderColor: "#fff59c",
    mainTextColor: "#FFFFFF",
    hoverTextColor: "#0072b1",
    authLink: "/resume-templates",
    guestLink: "/login",
  },
  images: images,
};

export const ResumeTemplateData = {
  title: (
    <>
      <span className="text-primaryGreen">Try Out Our Professional </span>{" "}
      Resume Templates Now!
    </>
  ),
  description: (
    <>
      Our best AI resume builder allows you to <b>create resumes</b> in minutes.
      Our <b>professional resume templates</b> are based on what employers look
      for in a candidate. We also offer{" "}
      <b>professional cover letter templates</b> that allow you to write amazing
      pitches to get your dream job. <b>Generate resume</b> summaries and
      incredible cover letters with our AI-based suggestions to avoid errors and
      boring text. You can use our pre-written <b>professional resume</b> and{" "}
      <b>cover letter examples</b> to kick-start your career. Let's get started!
    </>
  ),
};

export const ClientData = {
  title: (
    <>
      Our <span className="text-primaryGreen">Client </span>
    </>
  ),
};

export const ReviewData = {
  title: (
    <>
      Recommended by Experts & <span className="text-[#00caa5]">Community</span>
    </>
  ),
  description: (
    <>
      Community-reviewed, professional-trusted resume builder for career success
      and confidence{" "}
    </>
  ),
};

export const FeaturesData = {
  title: (
    <>
      Features Designed To
      <br />
      Help You Win
      <br />
      <span
        style={{ color: "#0072b1" }}
        className="bg-no-repeat bg-cover pt-4 pb-2 leading-[2] font-lexend font-bold"
      >
        Your Dream Job
      </span>
    </>
  ),
  description: (
    <>
      Make a resume by using our incredible features to stand out from the rest.
    </>
  ),
};

export const CareersBannerData = {
  title: (
    <>
      Innovate Your{" "}
      <span
        style={{ color: "#00caa5" }}
        className="bg-no-repeat bg-cover leading-[1.5] font-lexend font-bold"
      >
        Career Path
      </span>{" "}
      Explore Rewarding opportunities with AI Pro Resume
    </>
  ),
  description: (
    <>
      Join our dynamic team at AI Pro Resume and be at the forefront
      ofartificial intelligence innovation. With cutting-edge technology and a
      collaborative, forward-thinking work atmosphere, you can shape the future
      of resumes and job success.
    </>
  ),
};

export const ApplyNowBannerData = {
  title: (
    <>
      Walk towards Your Future with{" "}
      <span
        style={{ color: "#00caa5" }}
        className="bg-no-repeat bg-cover leading-[1.5] font-lexend font-bold"
      >
        AI Professional Resume
      </span>{" "}
      Career Opportunities
    </>
  ),
  description: (
    <>
      Embark on a transformative career journey with our AI Pro Resume team.
      Your next career move starts here, apply now and elevate your expertise in
      the world of AI-driven resumes!
    </>
  ),
};

export const ContactUsBannerData = {
  title: (
    <>
      Contact Us-Connect with a{" "}
      <span
        style={{ color: "#00caa5" }}
        className="bg-no-repeat bg-cover leading-[1.5] font-lexend font-bold"
      >
        AI Resume Builder
      </span>{" "}
      for Personalized Career Help
    </>
  ),
  description: <></>,
};
