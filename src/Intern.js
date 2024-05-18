import "./App.css";
import React, { useState } from "react";

function Intern() {
  const userDropdown = [
    {
      id: 1,
      name: "Jane Smith",
      comments:
        "Thanks for assigning  me on the task. We’ll get the details ironed out",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4eoYT7vDXn7TSJchw90h1SPaTpcUxWENTp2AEQwX-A&s",
    },
    {
      id: 2,
      name: "Marry Kom",
      comments:
        "Thanks for assigning  me on the task. We’ll get the details ironed out",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
  ];
  const [open, setopen] = useState(false);
  const [data, setdata] = useState(userDropdown);
  const [input, setinput] = useState({ id: null, comments: "", img: "" });
  const [selectedUser, setSelectedUser] = useState(userDropdown[0]);
  const [update, setUpdate] = useState(false);
  
  const handlecomments = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    console.log(input.comments);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newcomments = {
      id: userDropdown.length + 1,
      comments: input.comments,
      img: selectedUser.img,
    };
    setdata([...data, newcomments]);
    setinput({ id: null, comments: "", img: "" });
  };

  const toggleDropdown = () => {
    setopen(!open);
  };
  const handleSelect = (user) => {
    setSelectedUser(user);
    setopen(false);
  };
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setdata(newData);
  };
  const handleEdit = (id) => {
    const userToEdit = data.find((item) => item.id === id);
    setSelectedUser(userToEdit);
    setinput({
      id: userToEdit.id,
      comments: userToEdit.comments,
      img: userToEdit.img,
    });
    setUpdate(true);
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedComments = data.map((item) => {
      if (item.id === input.id) {
        return { ...item, comments: input.comments, img: input.img };
      } else {
        return item;
      }
    });
    setdata(updatedComments);
    setinput({ id: null, comments: "", img: "" });
  };

  return (
    <>
      <div className="bg-white p-[25px] rounded-[12px] shadow max-w-sm mx-auto mt-[26px] w-[319.45px] h-[543.72px]  rounded-[30px ">
        <div className=" flex h-[15px] justify-between w-full ">
          <i className="fa-regular fa-circle-check w-[16px] h-[15px] text-[#F28482]"></i>

          <div className="flex gap-[12px]">
            <i className="fa-solid fa-trash-can text-[#F28482] w-[12.73px] h-[11.45px] font-black mx-[12px]"></i>

            <i className="fa-solid fa-xmark w-[7px] h-[10px] text-[#F28482]"></i>
          </div>
        </div>
        <div className="mb-[5.4px] mt-[19px]">
          <button className="font-bold border-[1px] rounded-[50px]  text-[20px]   border-[#CECECE] inline-flex items-center justify-center whitespace-nowrap   h-10 px-4 w-full   text-[#E92C2C] py-2 ">
            Flower Arrangement
          </button>
        </div>
        <div className=" mb-4 ">
          <i className="fa-sharp fa-regular fa-calendar w-[13px] h-[15px] absolute z-10  mt-[12px] ml-4 text-slate-300"></i>
          <input
            className=" border-[#CECECE] font-semibold	 rounded-[50px] relative flex h-10 border-input bg-background px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCBCBC] focus-visible:ring-offset-[1px] focus:border-none disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 border  w-full"
            defaultValue="Dec 5, 2024 at 8:00-10:00 AM"
          />
        </div>

        <div className="relative mb-4 flex gap-[15px] w-[278px]">
          <i className="fa-regular fa-user text-[#F28482] w-[13px] h-[15px] mt-[12px] font-normal"></i>
          <span className="italic text-[14px] w-[64px] h-[17px] mt-[8px] font-medium text-[#5A5A5A]">
            Asign to:
          </span>
          <div className="hs-dropdown relative inline-flex ">
            <div>
              <div className="relative mt-2 cursor-pointer">
                <button
                  onClick={toggleDropdown}
                  id="drop-open"
                  type="button"
                  className="flex gap-[25px] py-[10px] w-[163px] rounded-[25px] border-[1px] cursor-pointer relative bg-white px-[10px] pr-10 text-left text-gray-900 shadow-sm  ring-inset ring-[#EDEDED] focus:outline-none sm:text-sm sm:leading-6"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                >
                  <span className="flex items-center">
                    <img
                      src={selectedUser.img}
                      alt=""
                      className="h-[25px] w-[25px] flex-shrink-0 rounded-full"
                    />
                    <span className="ml-3 block truncate text-[12px] text-[#009379] leading-[14.52px] font-semibold">
                      {selectedUser.name}
                    </span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <i className="fa-solid fa-caret-down h-5 w-5 text-gray-800 pt-[3px]"></i>
                  </span>
                </button>
                {open && (
                  <ul
                    id="dropdown"
                    className="  absolute z-10 mt-1 max-h-56 w-full overflow-auto bg-white py-1 text-base shadow-lg focus:outline-none sm:text-sm"
                  >
                    {userDropdown.map((item) => (
                      <li
                        key={item.id}
                        className="cursor-pointer text-gray-900 relative select-none py-2 pl-3 pr-9"
                        role="option"
                        onClick={() => handleSelect(item)}
                      >
                        <div className="flex items-center">
                          <img
                            src={item.img}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span className="font-normal ml-3 block truncate">
                            {item.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-[19px] flex gap-[15px] ">
          <i className="fa-regular fa-note-sticky w-[12.73px] h-[11.45px] text-[#F28482] font-normal"></i>
          <span className="italic  text-[#5A5A5A] text-[14px] font-medium leading-[16.94px]">
            Note:
          </span>
          <textarea
            className="text-[#5A5A5A] border-[1px] rounded-[12px] h-[54px]  resize-none text-[14px]  px-[10px] py-[5px]   focus:ring-1 ring-[#BCBCBC] focus:ring-[#BCBCBC] w-[190.71px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCBCBC] focus-visible:ring-offset-[1px] focus:border-none "
            defaultValue={`09382049832\nwww.flowervendor.com`}
          ></textarea>
        </div>
        <hr className="text-[1px] text-[#E3E3E3] mb-[19px]" />

        <div className="  h-[220px]">
          <h3 className="font-bold text-[14px] mb-[19px] text-[#5A5A5A] italic ">
            Comments
          </h3>
          <div className="mb-[20px]">
            {data.map((item, index) => (
              <div className="flex items-start space-x-2 mb-[5px] " key={index}>
                <span className="relative flex  shrink-0 overflow-hidden rounded-full">
                  <img
                    className="mx-2 my-2 w-8 h-auto rounded-full"
                    src={item.img}
                    alt="Maria"
                  />
                </span>
                <div>
                  <div className="font-semibold text-[12px] leading-[14.52px]">
                    {item.name}
                  </div>
                  <div className="flex">
                  <p
                    onClick={() => handleEdit(item.id)}
                    className="text-[11px] font-normal  leading-[13.31px]"
                  >
                    {item.comments}
                    
                  </p>
                  <i
                      onClick={() => handleDelete(item.id)}
                      className=" cursor-pointer fa-solid fa-trash-can text-[#F28482] w-[11px] h-[12.73px]  mx-[12px]"
                    ></i>
                    </div>
                </div>
              </div>
            ))}
            <div className="relative flex items-center  pt-[9px]">
              <img
                className="mx-2 my-2 w-8 h-auto rounded-full"
                src={selectedUser.img}
                alt="Maria"
              />
              <input
                id="search"
                onChange={handlecomments}
                name="comments"
                value={input.comments}
                className="rounded-[50px] 
        h-10 w-full border-input bg-background text-[11px] ring-offset-background  file:bg-transparent   placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  border  py-2 px-4
        p-4   text-gray-900  bg-gray-50  pe-10 me-[10px]"
                placeholder="Write comment.."
              />

              <i
                onClick={update ? handleUpdate : handleSubmit}
                className="cursor-pointer fa-regular fa-paper-plane text-[#FF6250] absolute end-2.5  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intern;
