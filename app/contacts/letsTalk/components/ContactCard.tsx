import React from "react";
import { deleteContact } from "../slices/contactSlice";
import { EditIcons, DeleteIcons } from "@/components/social-icons/icons";
import { Contact } from "../types";
import store from "@/app/store";

interface ContactCardProps extends Contact {
  adminState: boolean;
  setId: (id: string) => void;
  setForm: React.Dispatch<React.SetStateAction<Contact>>;
}

const ContactCard: React.FC<ContactCardProps> = ({
  adminState,
  _id,
  setId,
  setForm,
  title,
  detail,
}) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="green-pink-gradient mb-6 p-[2px] rounded-2xl shadow-card dark:shadow-card-dark">
        <div className="dark:bg-background-dark bg-background-light md:w-96 flex items-center flex-col justify-evenly w-full p-5 min-h-[200px] sm:w-[360px] rounded-[14px]">
          <h3 className="m-0">{title}</h3>
          <hr className="mt-2 mb-2 w-full h-[2px] dark:bg-white bg-black" />
          <div className="small">{detail}</div>
        </div>
      </div>
      {adminState && (
        <div className="flex flex-col justify-normal xs:justify-end">
          <button
            aria-label="Edit Button"
            onClick={() => {
              setId(_id);
              setForm({ title, detail });
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <EditIcons />
          </button>
          <button
            aria-label="Delete Button"
            onClick={() => {
              store.dispatch(deleteContact(_id));
            }}
            className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <DeleteIcons />
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
