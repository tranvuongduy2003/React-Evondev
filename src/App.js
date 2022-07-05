import React from "react";
import { useState } from "react";
import ModalAdvanced from "./components/Modal/ModalAdvanced";
import ModalBase from "./components/Modal/ModalBase";
import TooltipAdcanced from "./components/tooltips/TooltipAdcanced";

const App = () => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen p-5">
      <button
        className="p-5 mr-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>
      <button
        className="p-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="p-10 bg-white rounded-lg w-full max-w-[320px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
          error mollitia quibusdam soluta placeat, inventore natus eligendi
          magnam, nostrum, ad aspernatur incidunt molestiae. Cum impedit quo
          mollitia id itaque!
        </div>
      </ModalBase>
      <ModalAdvanced
        visible={openModal}
        onClose={() => setOpenModal(false)}
        heading="Welcome back!"
        bodyClassName="w-full max-w-[482px] bg-white rounded-lg p-10"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="email"
            className="w-full text-sm loading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className="w-full text-sm loading-normal bg-[#E7ECF3] rounded-lg p-4"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full p-4 text-base font-semibold text-white bg-[#316BFF] rounded-lg">
          Submit
        </button>
      </ModalAdvanced>
      <div className="inline-block ml-5">
        <TooltipAdcanced title="Tooltip">This is a tooltip</TooltipAdcanced>
      </div>
    </div>
  );
};

export default App;
