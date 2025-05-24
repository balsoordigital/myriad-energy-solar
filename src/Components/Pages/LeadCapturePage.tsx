import LeadCaptureForm from "../Molecules/LeadCaptureForm";
import MainTemplate from "../Templates/MainTemplate";

const LeadCapturePage = () => {
  return (
    <MainTemplate>
      <div className="flex flex-col p-4 xl:flex-row xl:p-4 xl:mx-auto py-6 mt-12">
        <div className="w-full xl:w-1/2 flex flex-col xl:pl-16">
          <p className="text-[32px] font-bold">
            Schedule a <span className="text-blue-800">FREE consultation</span>{" "}
            with us today!
          </p>
          <p className="text-[18px] mb-8">
            Please fill the form and we will get in touch with you for the
            consultation
          </p>
          <img src="/assets/consultation.jpg" alt="" className="w-full h-[400px] rounded-[20px]"/>
        </div>
        <div className="w-full xl:w-1/2">
          <LeadCaptureForm />
        </div>
      </div>
    </MainTemplate>
  );
};

export default LeadCapturePage;
