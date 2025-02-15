import React from "react";

const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-gray-200 rounded-sm p-2 cursor-pointer rounded-md">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwlTyKJZQTzAUHm3ClY49pHSKyWFu1a6l7A&s"
              alt="UserProfile"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Vikesh Kumar</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 "></div>
    </div>
  );
};

export default OtherUser;
