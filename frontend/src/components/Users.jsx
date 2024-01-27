import React, { useState } from "react";
import Button from "./Button";

const Users = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Harkirat",
      lastName: "Singh",
      _id: 1,
    },
  ]);
  return (
    <>
      <div className="flex flex-row justify-start ml-5 font-bold text-xl">
        Users
      </div>
      <div className="my-2">
        <input
          type="text"
          placeholder="Search users"
          className="w-full px-1 py-1
          border rounded border-slate-200 ml-5"
        ></input>
        <div>
          {users.map((user) => (
            <User user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

function User({ user }) {
  return (
    <div className="flex justify-between my-2 mx-5">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button label={"Send Money"} />
      </div>
    </div>
  );
}

export default Users;
