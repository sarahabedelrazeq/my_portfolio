import React from "react";
import { CircleLoader, ClipLoader } from "react-spinners";

function Fallback({color = "#dd00b899"}) {
  return (
    <div className="w-100 h-100 ">
      <div className="d-flex w-100 h-100 justify-content-center align-items-center">
        <CircleLoader
          color={color || "#dd00b899"}
          loading={true}
          cssOverride={{}}
          size={150}
          speedMultiplier={1}
        />
      </div>
    </div>
  );
}

export default React.memo(Fallback);
