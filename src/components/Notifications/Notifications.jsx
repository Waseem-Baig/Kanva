import React from "react";
import NotificationsNavbar from "./NotificationsComponents/NotificationsNavbar";
import NotificationsList from "./NotificationsComponents/NotificationsList";

const NotificationsPage = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <NotificationsNavbar />
      <NotificationsList />
    </div>
  );
};

export default NotificationsPage;
