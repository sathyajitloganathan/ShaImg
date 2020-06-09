import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      image:
        "https://www.xing.com/image/b_c_5_1c5bc902b_36904223_1/sathyajit-loganathan-foto.1024x1024.jpg",
      name: "Sathyajit Loganathan",
      places: 4
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
