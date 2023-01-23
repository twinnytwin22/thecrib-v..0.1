import React from 'react';
import { useFormik } from 'formik';
import ContactPageForm from 'ui/Contact/ContactPageForm';

const page = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.

  return (
<ContactPageForm/>
  );
};

export default page