import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersFromAPI } from "../actions/users";

import UserContext from "../context/UserContext";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getUsers = async () => {
      await dispatch(getAllUsersFromAPI());
    };
    if (currentUser) {
      getUsers();
    }
  }, [dispatch, currentUser]);

  return (
    <div>
      hi
      {users.userList &&
        users.userList.map((e, i) => <div key={i}>{e.email}</div>)}
    </div>
  );
};
