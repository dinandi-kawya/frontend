import React from "react";

const FrameComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h3 className="text-xl font-bold">Achievements</h3>
      <div className="flex flex-row items-center justify-center space-x-6">
      <div className="bg-gray-100 p-6 rounded-xl text-center">
        <div className="text-3xl font-bold mb-4">10 miles</div>
        <div>Longest Distance Run</div>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl text-center">
        <div className="text-3xl font-bold mb-4">75</div>
        <div>Highest number of pushups</div>
      </div>
      <div className="bg-gray-100 p-6 rounded-xl text-center">
        <div className="text-3xl font-bold mb-4">250 lbs</div>
        <div>Highest Weight Lifted</div>
      </div>
    </div>
    </div>
  );
};

export default FrameComponent;
