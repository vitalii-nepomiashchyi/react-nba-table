import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from 'yup';
import styles from './addTeamForm.module.scss';
import CustomSelect from "components/common/CustomSelect";
import CustomInput from "components/common/CustomInput";

export const AddTeamForm = () => {
  const { form, input, submit } = styles;

  const initialValues = {
    name: '',
    city: '',
    abbreviation: '',
    conference: 'east'
  };

  const lettersOnly = (value: string | undefined) => /^[a-zA-Z]+$/g.test(value || '');
  const uppercaseLettersOnly = (value: string | undefined) => /^[A-Z\s]+$/g.test(value || '');

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long')
      .required('Required'),
    city: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long')
      .required('Required')
      .test('Letters only', 'Letters only', lettersOnly),
    abbreviation: Yup.string()
      .min(3, 'Too Short!')
      .max(3, 'Too Long')
      .required('Required')
      .test('Uppercase letters only', 'Uppercase letters only', uppercaseLettersOnly),
  });

  return (
    <Formik
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      <Form className={form}>
        <Field
          name="name" 
          className={input}
          component={CustomInput}
        />

        <Field
          name="city" 
          className={input}
          component={CustomInput}
        />
        
        <Field
          name="abbreviation" 
          className={input}
          component={CustomInput}
        />

        <Field 
          as="select"
          name="conference"
          className={input}
          component={CustomSelect}
        >
          <option value="east">East</option>
          <option value="west">West</option>
        </Field>
        
        <button type="submit" className={submit}>Add team</button>
      </Form>
    </Formik>
  );
};
