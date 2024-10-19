import React, { useEffect, useState } from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("Show the Password");
    console.log(ref.current.src);

    if (ref.current.src.includes("icons/hidden.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/hidden.png";
    }
  };

  // save password func

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* Below Navbar */}
        <div className="mycontainer">
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
              id=""
            />

            <div className="flex w-full justify-between gap-8">
              <input
                value={form.username}
                onChange={handleChange}
                placeholder="Enter UserName"
                className="rounded-full border-green-600 w-full p-4 py-1 text-black"
                type="text"
                name="username"
                id=""
              />

              <div className="relative">
                <input
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter Password"
                  className="rounded-full border-green-600 w-full p-4 py-1 text-black"
                  type="text"
                  name="password"
                  id=""
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
              className="flex justify-center gap-2 items-center bg-green-600 rounded-full text-black px-4 py-3 w-fit hover:bg-green-800"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
              ></lord-icon>
              Add Password
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
                </tr>
              </thead>
              <tbody className="bg-indigo-800">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border text-center w-32"><a href={item.site} target="_blank">{item.site}</a>
                      </td>
                      <td className="py-2 border text-center w-32">{item.username}
                      </td>
                      <td className="py-2 border text-center w-32">{item.password}</td>
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
