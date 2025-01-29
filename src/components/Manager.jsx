import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  //copy text

  const copyText = (text) => {
    toast("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    console.log(ref.current.src);

    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
      ref.current.src = "icons/hidden.png";
    }
  };

  // save password func

  const savePassword = () => {
    toast("Password Saved", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    console.log([...passwordArray, form]);
    setform[{ site: "", username: "", password: "" }];
  };

  const deletePassword = (id) => {
    console.log("Deleting pass with id", id);
    let c = confirm("Do you really want to delete this password?");
    if (c) {
      setPasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
      toast("Password deleted Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const editPassword = (id) => {
    console.log("Editing pass with id", id);
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* Below Navbar */}
        <div className="mycontainer px-40">
          <h1 className="text-4xl font-bold text-center text-white">
            <span className="text-green-500">&lt;</span>
            Pass
            <span className="text-green-500">OP&gt;</span>
          </h1>
          <p className="text-center text-green-300">
            Your Own Password Manager
          </p>

          {/* Input Boxs */}

          <div className="text-white flex flex-col p-4 gap-8 items-center">
            <input
              value={form.site}
              onChange={handleChange}
              placeholder="Enter Website URL"
              className="rounded-full border-green-600 w-full p-4 py-1 text-black"
              type="text"
              name="site"
              id="#site"
            />

            <div className="flex w-full justify-between gap-8">
              <input
                value={form.username}
                onChange={handleChange}
                placeholder="Enter UserName"
                className="rounded-full border-green-600 w-full p-4 py-1 text-black"
                type="text"
                name="username"
                id="#username"
              />

              <div className="relative">
                <input
                  ref={passwordRef}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="rounded-full border-green-600 w-full p-4 py-1 text-black"
                  type="password"
                  name="password"
                  id="#password"
                />
                <span
                  className="absolute right-0 text-white top-0 cursor-pointer"
                  onClick={showPassword}
                >
                  <img
                    ref={ref}
                    className="p-1.5"
                    width={35}
                    src="icons/eye.png"
                    alt="eye"
                  />
                </span>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={savePassword}
              className="flex justify-center gap-2 items-center bg-green-600 rounded-full text-black px-4 py-3 w-fit hover:bg-green-800 font-semibold"
            >
              <img
                className="cursor-pointer p-1.5"
                width={35}
                src="icons/save.png"
                alt="save"
              />
              Save Password
            </button>
          </div>

          <div className="passwords">
            <h2 className="text-white text-center text-xl font-bold">
              Your Passwords
            </h2>
            {passwordArray.length === 0 && <div>No passwords to show</div>}
            {passwordArray.length != 0 && <div>No passwords to show</div>}
            <table className="table-auto text-white w-full rounded-md overflow-hidden">
              <thead className="bg-green-400 text-black">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Action</th>
                </tr>
              </thead>
              <tbody className="bg-indigo-800">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border text-center">
                        <div className="flex items-center justify-center">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <img
                            onClick={() => {
                              copyText(item.site);
                            }}
                            className=" cursor-pointer p-1.5"
                            width={35}
                            src="icons/copy.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="py-2 border text-center">
                        <div className="flex items-center justify-center">
                          {item.username}
                          <img
                            onClick={() => {
                              copyText(item.username);
                            }}
                            className=" cursor-pointer p-1.5"
                            width={35}
                            src="icons/copy.png"
                            alt=""
                          />
                        </div>
                      </td>
                      <td className="py-2 border text-center ">
                        <div className="flex items-center justify-center">
                          {item.password}
                          <img
                            onClick={() => {
                              copyText(item.password);
                            }}
                            className=" cursor-pointer p-1.5"
                            width={35}
                            src="icons/copy.png"
                            alt=""
                          />
                        </div>
                      </td>

                      {/* Action */}
                      <td className="flex justify-center  py-2 border text-center ">
                        <span>
                          <img
                            className="cursor-pointer p-1.5"
                            onClick={() => {
                              editPassword(item.id);
                            }}
                            width={35}
                            src="icons/editing.png"
                            alt="edit"
                          />
                        </span>
                        <span>
                          <img
                            className="cursor-pointer p-1.5"
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                            width={35}
                            src="icons/bin.png"
                            alt="edit"
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
