// // import { useState } from "react";
// // import { addUser } from "../features/Users";
// // import { useDispatch } from "react-redux";

// // import { TextField } from "@mui/material";
// // import { Button } from "react-materialize";

// // export default function AddUser() {
// //   const dispatch = useDispatch();
// //   const [name, setName] = useState("");
// //   const [username, setUsername] = useState("");

// //   return (
// //     <>
// //       <TextField
// //         label="Name"
// //         name="name"
// //         value={name}
// //         onChange={(event) => {
// //           setName(event.target.value);
// //         }}
// //       />
// //       <TextField
// //         name="username"
// //         label="Username"
// //         value={username}
// //         onChange={(event) => {
// //           setUsername(event.target.value);
// //         }}
// //       />
// //       <Button
// //         onClick={() => {
// //           dispatch(addUser({ id: 0, name: name, username: username }));
// //         }}
// //       >
// //         Add user
// //       </Button>
// //     </>
// //   );
// // }
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "./UserSlice";

// const AddUser = () => {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatch(addUser({ id: 0, name, username }));

//     setName("");
//     setUsername("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         name="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Username"
//         name="username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button type="submit">Add user</button>
//     </form>
//   );
// };

// export default AddUser;
import { useState } from "react";
import { addUser } from "./UserSlice";
import { useDispatch } from "react-redux";
import { Button } from "react-materialize";
import { TextField } from "@mui/material";

export default function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState(0);
  return (
    <>
      <TextField
        label="Name"
        name="name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <TextField
        name="username"
        label="Username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <Button
        onClick={() => {
          dispatch(
            addUser({ id: setId(id + 1), name: name, username: username })
          );
        }}
      >
        Add user
      </Button>
    </>
  );
}
