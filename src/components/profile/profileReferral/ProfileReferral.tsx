import React from "react";
import { HiClipboardCheck } from "react-icons/hi";

const ProfileReferral = () => {
  return (
    <>
      <p className="font-Lexend text-md  text-[#A7A7A7]  mt-8">Referral Link</p>
      <div className="text-[#343434] text-sm font-Lexend  mt-2">
        <div>
          <span className="text-muted flex flex-wrap justify-between items-center">
            <div
              className=" font-Lexend text-md  text-[#343434] flex items-center "
              // ref={divRef}
              style={{ overflowWrap: "anywhere" }}
            >
              <span className="max-w-[270px] truncate">
                https://aiproresume.com/register/cjhzxgcjccgjgcjhcjh
              </span>

              <button className="mr_heading btn_copy">
                <HiClipboardCheck className="shareiconmy" size={20} />
              </button>
            </div>
            <div className="flex justify-center items-center w-full gap-4 mt-4">
              {/* facebook gogle whatsapp */}
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileReferral;
