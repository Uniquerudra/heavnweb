import React from "react";
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/MidComponentPhone.png";
import MidPhone2 from "../../assets/images/5.png";

const MidComponentParent = () => {
  return (
    <div>
      <div>
        <MidComponentItem
          title="Outside dark. Inside atmospheric."
          text="The indirect light of HEAVN One creates an atmospheric ambience and eliminates the cave feeling of typical desk lamps.

The comfortable room illumination is easy on the eyes when working on a monitor and enhances well-being and concentration when it is already dark outside."
          img={MidPhone1}
          reverse
        ></MidComponentItem>
      </div>
      <div>
        <MidComponentItem
          title="Search by room"
          img={MidPhone2}
        ></MidComponentItem>
      </div>
    </div>
  );
};

export default MidComponentParent;
