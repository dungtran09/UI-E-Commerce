import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { useStateContext } from "../../../contexts/ContextProvider";
import Button from "../Button/Button";

const Notification = () => {
  const { currentColor } = useStateContext();

  const chatData = [
    {
      image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
      message: "Roman Joined the Team!",
      desc: "Congratulate him",
      time: "9:08 AM",
    },
    {
      image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
      message: "New message received",
      desc: "Salma sent you new message",
      time: "11:56 AM",
    },
    {
      image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
      message: "New Payment received",
      desc: "Check your earnings",
      time: "4:39 AM",
    },
    {
      image: "https://semantic-ui.com/images/avatar2/large/matthew.png",
      message: "Jolly completed tasks",
      desc: "Assign her new tasks",
      time: "1:12 AM",
    },
  ];

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 divide-gray-100 border border-gray-100 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">
            Notifications
          </p>
          <button
            type="button"
            className="text-white text-xs rounded p-1 px-2 bg-orange-theme "
          >
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
