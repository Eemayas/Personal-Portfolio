"use client";
import { IS_ADMIN } from "@/lib/action/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const AdminPopup = () => {
  const bios = useSelector((state) => state.BioReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  const dispatch = useDispatch();
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [loading, setLoading] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: IS_ADMIN, payload: false });
    };

    // Call the async function
    fetchData();
  }, [dispatch]);

  const handleSubmit = (e) => {
    setLoading(true);
    console.log(adminPin);
    if (adminPin == bios[0].password) {
      dispatch({ type: IS_ADMIN, payload: !adminState });
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
          //
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={` flex  bg-black-100 p-8 rounded-2xl xl:flex-row flex-col gap-10 overflow-hidden`}
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className=" flex flex-col gap-8"
              >
                <label className="flex flex-col">
                  <span className="text-white font-medium mb-4">PIN</span>
                  <input
                    type="text"
                    name="name"
                    value={adminPin}
                    onChange={(e) => {
                      setAdminPin(e.target.value);
                    }}
                    placeholder="PIN"
                    className="dark:bg-tertiary bg-tertiarylight  py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    required
                  />
                </label>
                <div className="flex flex-row gap-4">
                  <button
                    type="submit"
                    className="dark:bg-tertiary bg-tertiarylight  py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                  <button
                    className="dark:bg-tertiary bg-tertiarylight  py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    onClick={() => setShowPopup(!showPopup)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPopup;
