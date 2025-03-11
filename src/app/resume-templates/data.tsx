const stepsToCreateResume = [
  "Go to the AI pro resume home page.",
  "Click the login button and sign up for your account.",
  "Now go to resume options in the header of the website.",
  "Click and press to resume template and explore the templates.",
  "Select any template you like.",
  "You will head to the next page with the template customization options.",
  "On the right side of the screen, you will find the option to edit your resume.",
  "On the left hand, you will get a preview of your resume.",
];

const FillAllDetails = [
  "Header: Add your name, email, contact information, job position, LinkedIn URL, postal address, country, state, and city name.",
  "Summary: Click on the summary sections and write a small professional summary. When you start writing your summary, AI-based suggestions will automatically appear. If you want to use these suggestions, simply click on them to add them to your summary.",
  "Experience: At the experience sections, click in to add a new section. List your previous job experiences with dates, job titles, and responsibilities. You can use AI-based suggestion features to create incredible job responsibilities. It will appear in the bulb icon on the right corner of the job responses sections. Just click the icon and select your preferred job responsibilities. Once you get it, click on that, and it will appear in the job responsibility section. Make changes to the responsibilities if you want to make it more personalized.",
  "Education: Enter your educational background, including degrees, institutions, grades, and dates.",
  "Technical Skills: Add relevant technical skills; if you want to add a custom skill, type and press enter.",
  "Soft Skills: List interpersonal skills, such as communication, teamwork, or problem-solving.",
  "Certificates: Press add new and include any certifications or professional development courses you have completed.",
  "Honors and Awards: Select Add New and highlight any awards or recognition you have received.",
  "Languages: Mention any languages you speak or write fluently",
  "References: Add references or indicate availability upon request.",
  "Custom Section: If necessary, include any additional information relevant to your career.",
];

const reviewServiceSteps = [
  "Log in to your account and navigate to My Services from the header.",
  "Select the professional resume review or cover letter review service you want.",
  "Click on add to cart, and the checkout option will appear.",
  "Select the checkout button, and you will head to the checkout page.",
  "Upload the resume or cover letter you want our experts to review.",
  "Complete the payment process to confirm your order. You can purchase through coins and by buying the most popular or premium package.",
  "Within 2 days, you will receive an email with detailed suggestions and improvements for your resume or cover letter.",
  "You can also access the reviewed document from the dashboard under My Services, where you will find a download option.",
];

export const ResumeTemplateData = [
  {
    title: (
      <>
        Build Your Perfect Resume with
        <span className="text-[#00caa5] ml-4 text-2xl md:text-3xl">
          Professional Resume Template​
        </span>
      </>
    ),

    description: (
      <>
        AI Pro Resume offers several professional and free resume templates.
        Whether you are a student, fresher, or experienced professional, we have
        the best professional resume templates for you. All our templates are
        customizable; you can modify font, color, and layouts according to your
        needs.
        <br />
        <br />
        All our templates are ATS-friendly. They can pass applicant tracking
        systems. You are in the right place if you do not know how to choose the
        perfect template from the two-column resume template.{" "}
      </>
    ),
  },
  {
    title: <>Steps to Create A Resume With Best Professional Resume Template</>,
    description: (
      <>
        Creating a professional resume takes a lot of time and effort. However,
        with AI Pro Resume, you can easily create a professional resume and
        cover letter. We have everything from two-column resume templates​ to
        clean, simple resume templates, resume portfolio templates, curriculum
        templates​, basic resume templates, and simple modern resume templates
        to meet your needs.
        <br />
        <br />
        Follow the steps below to design a resume that help you in getting your
        dream job.{" "}
      </>
    ),
    steps: stepsToCreateResume,
  },
  {
    title: <> Fill all the details in the following sections:</>,
    steps: FillAllDetails,
  },

  {
    title: "Switch Templates",
    description: (
      <>
        Now, after filling in all the details, if you think it's not the right
        template and want to change it, no worries; you can do it with just a
        single click. Click switch template, and choose the one that suits your
        details best. That’s it. Your complete data will be migrated to the new
        template. You can also change color, font, and layout according to your
        needs. You can even add pictures to your resume, as some of our
        templates have pictures. Now, you have a professionally crafted resume
        with a perfect resume template in no time.
      </>
    ),
  },
];
