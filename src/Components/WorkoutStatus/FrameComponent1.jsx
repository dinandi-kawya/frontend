import React, { useState } from "react";
import UpdateWorkoutStatus from "./UpdateWorkoutStatus";

const FrameComponent1 = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <UpdateWorkoutStatus open={open} handleClose={handleClose} />
      <div className="flex flex-row items-center justify-center space-x-6">
        <div className="text-xl font-bold mb-4 ">Latest Workout Status</div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-6">
        <div className="bg-gray-100 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-4">5 miles</div>
          <div>Distance Run</div>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-4">50</div>
          <div>Push Ups</div>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl text-center">
          <div className="text-3xl font-bold mb-4">200 lbs</div>
          <div>Weight Lifted</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
