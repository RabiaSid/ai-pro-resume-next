import React from "react";

const ServiceContent = () => {
  const stepsToGetService = [
    "Go to the home page of AI Pro Resume and log in to your account.",
    "Now, head to the service page present in the header of the website.",
    "You will notice the Resume and Cover Letter Writing Service on that page.",
    "Choose the service you want and click on add to cart.",
    "The checkout button appears next to it. Click on it.",
    "On the checkout page, you must upload your resume or cover letter.",
    "You will find the upload option beside the delete option.",
    "Once you are done with the file upload.",
    "Mark the checkbox and proceed to checkout.",
    "Once your resume or cover letter is ready, you will receive it via email within 2 days.",
    "You can also download your completed resume or cover letter directly from the dashboard.",
    "Go to the dashboard and click on My Services to access your file.",
  ];

  const revisionSteps = [
    "Log in to your account and navigate to the dashboard.",
    "You will see four headings: All Services, In Progress, Delivered, and Revisions.",
    "Click on Delivered and locate the Revision icon (a round arrow) next to your completed document.",
    "Click the icon to open a small text box.",
    "Enter the changes or updates you want to make and click Okay.",
    "Once the revised document is ready, it will appear under the Revisions section. You can download it directly from there.",
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

  const Section = ({
    title,
    description,
    steps,
  }: {
    title: string;
    description?: string;
    steps: string[];
  }) => (
    <div className="mb-6">
      <h3 className="text-[#0072b1] font-Lexend font-bold text-xl md:text-2xl px-0 mb-3">
        {title}
      </h3>
      {description && (
        <p className="font-Lexend text-base mb-2">{description}</p>
      )}
      <ul className="font-Lexend text-base">
        {steps.map((step, index) => (
          <li key={index} className="mb-1 list-disc list-inside">
            {step}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className="px-4 container lg:px-10 my-10">
        <Section
          title="Steps To Get Our Professional Resume and Cover Letter Writing Service"
          description="If you want to use our professional resume writing services and professional cover letter writing services, then follow the steps below:"
          steps={stepsToGetService}
        />

        <Section
          title="Revision Process"
          description="We offer two free revisions for each premium service. If you need updates to your document after delivery, follow these steps:"
          steps={revisionSteps}
        />
        <p className="font-Lexend text-base mb-2">
          <strong>Tip: </strong> Each service includes two revision tokens. Once
          you have used both, you must repurchase the service or package for
          additional changes.
        </p>

        <Section
          title="Steps to Get a Professional Resume or Cover Letter Review Service"
          steps={reviewServiceSteps}
        />
      </div>
    </>
  );
};

export default ServiceContent;
