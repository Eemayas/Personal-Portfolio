import React from "react";
import { deleteContact } from "../slices/contactSlice";
import { Contact } from "../types";
import store from "@/app/store";
import dynamic from "next/dynamic";

// Dynamically import AboutEditForm
const EditAndDeleteButton = dynamic(
  () => import("@/components/EditAndDeleteButton"),
  {
    ssr: false, // Disable server-side rendering for this component
    loading: () => <p>...</p>, // Fallback content while loading
  }
);

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
        <div className="dark:bg-background-dark bg-background-light md:w-96 flex items-center flex-col justify-evenly p-5 min-h-[200px] w-[300px] rounded-[14px]">
          <h3 className="m-0">{title}</h3>
          <hr className="mt-2 mb-2 w-full h-[2px] dark:bg-white bg-black" />
          <p className="small">{detail}</p>
        </div>
      </div>
      {adminState && (
        <EditAndDeleteButton
          onEditClick={() => {
            setId(_id);
            setForm({ title, detail });
          }}
          onDeleteClick={() => {
            store.dispatch(deleteContact(_id));
          }}
        />
      )}
    </div>
  );
};

export default ContactCard;
