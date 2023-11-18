import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
export const EditIcons = () => {
  return <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#ffffff" }} />;
};
export const DeleteIcons = () => {
  return <FontAwesomeIcon icon={faTrash} style={{ color: "#ffffff" }} />;
};
export const MenuIcons = () => {
  return (
    <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#ffffff" }} />
  );
};
export const CloseIcons = () => {
  return (
    <FontAwesomeIcon icon={faXmark} size="xl" style={{ color: "#ffffff" }} />
  );
};
