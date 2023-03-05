import React from "react";
import { useFormik } from "formik";
import ContactPageForm from "ui/Contact/ContactPageForm";

const page = () => {
  return (
    <div className="flex w-screen flex-col items-center bg-white dark:bg-gray-900">
      <ContactPageForm />
    </div>
  );
};

export default page;
