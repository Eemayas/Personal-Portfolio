import React from "react";
import { DeleteIcons, EditIcons } from "./social-icons/icons";

interface EditAndDeleteButtonProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const EditAndDeleteButton: React.FC<EditAndDeleteButtonProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <div className="flex items-end flex-col justify-normal xs:justify-end">
      <button
        aria-label="Edit"
        onClick={onEditClick}
        className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
      >
        <EditIcons />
      </button>
      <button
        aria-label="Delete"
        onClick={onDeleteClick}
        className="dark:bg-tertiary bg-tertiarylight flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
      >
        <DeleteIcons />
      </button>
    </div>
  );
};

export default EditAndDeleteButton;
