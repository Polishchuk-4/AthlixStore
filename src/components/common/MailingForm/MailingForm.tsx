import style from './MailingForm.module.scss';

import { useId } from 'react';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

type FormValues = {
  email: string;
};

const initialValue: FormValues = {
  email: '',
};

export default function MailingForm() {
  const emailFieldId = useId();

  const handleSubmit = (values: FormValues, action: FormikHelpers<FormValues>) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={style.form}>
        <Field
          type="text"
          name="email"
          id={emailFieldId}
          className={style['text-2']}
          placeholder="Email"
        />
        <Button size="extraSmall" icon={<Icon icon="arrow-right" />} />
      </Form>
    </Formik>
  );
}
