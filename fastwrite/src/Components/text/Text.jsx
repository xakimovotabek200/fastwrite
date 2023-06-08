import React from "react";

function Text() {
  return (
    <div className="mt-[30px]">
      <div className="container m-auto md:w-[75%]">
        <div className="items-center">
          <textarea
            className="outline-none rounded-[6px] border-none bg-[#27374D] text-[#fff] text-[18px] pl-[10px] md: ml-0"
            cols="136"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Text;
