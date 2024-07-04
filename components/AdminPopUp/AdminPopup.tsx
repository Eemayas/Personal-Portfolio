// AdminPopup.tsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState, FormEvent } from "react";
import { setAdmin } from "./slices/adminSlices";
import { AppDispatch, RootState } from "@/app/store";
import InputField from "../InputField";
require("dotenv").config();
const AdminPopup = () => {
  const adminState = useSelector((state: RootState) => state.adminReducer);
  const dispatch = useDispatch<AppDispatch>();
  const formRef = useRef<HTMLFormElement>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (adminPin === process.env.PASSWORD) {
      console.log("Entering Admin Controls");
      dispatch(setAdmin(!adminState));
    }
    setAdminPin("");
    setShowPopup(!showPopup);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div className="flex flex-col items-center justify-center ">
        <button
          onClick={togglePopup}
          className="bg-transparent text-transparent hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full"
        >
          .
        </button>
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="green-pink-gradient p-[2px] rounded-2xl shadow-card dark:shadow-card-dark">
              <div
                className={`flex xl:flex-row flex-col gap-10 overflow-hidden dark:bg-background-dark bg-background-light p-5 rounded-[14px]`}
              >
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  <InputField
                    label="PIN"
                    type="text"
                    name="pin"
                    value={adminPin}
                    onChange={(e) => setAdminPin(e.target.value)}
                    placeholder="PIN"
                    required
                  />

                  <div className="flex flex-row gap-4">
                    <button
                      aria-label="Submit"
                      type="submit"
                      className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit shadow-md shadow-primary"
                    >
                      {loading ? "Sending..." : "Send"}
                    </button>
                    <button
                      aria-label="Cancel"
                      type="button"
                      className="dark:bg-tertiary bg-tertiarylight py-3 px-8 rounded-xl outline-none w-fit shadow-md shadow-primary"
                      onClick={() => setShowPopup(!showPopup)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPopup;
