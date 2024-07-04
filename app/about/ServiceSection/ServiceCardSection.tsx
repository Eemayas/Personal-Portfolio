"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TServiceCard } from "./types";
import { RootState } from "@/app/store";
import { bioCardServices } from "@/constants";
import ServiceCard from "./components/ServiceCard";
import ServiceCardEditForm from "./components/ServiceCardEditForm";
import { SectionWrapper } from "@/lib/hoc";

const ServiceCardSection: React.FC = () => {
  const [form, setForm] = useState<TServiceCard>({
    _id: "0",
    title: "",
    selectedImage: "",
  });
  const [id, setId] = useState<string>("0");
  const adminState = useSelector((state: RootState) => state.adminReducer);
  const { bioCards } = useSelector((state: RootState) => state.serviceReducer);

  return (
    <>
      <div className="flex flex-wrap gap-10">
        {bioCardServices.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            selectedImage={service.icon}
            adminState={false}
          />
        ))}
        {bioCards.length ? (
          bioCards.map((service, index) => (
            <ServiceCard
              adminState={adminState}
              setForm={setForm}
              setId={setId}
              key={service.title}
              index={bioCardServices.length + index}
              title={service.title}
              {...service}
            />
          ))
        ) : (
          <h1></h1>
        )}
      </div>
      <ServiceCardEditForm
        adminState={adminState}
        setId={setId}
        id={id}
        form={form}
        setForm={setForm}
      />
    </>
  );
};

export default SectionWrapper(ServiceCardSection, "About2");
