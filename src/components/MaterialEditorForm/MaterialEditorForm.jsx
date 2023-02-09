import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';

const Input = styled(Field)`
  font-size: 24px;
`;

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values).then(() => actions.setSubmitting(false));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Опис:
            <Input name="title" type="text" />
          </label>
          <br />
          <label>
            Посилання:
            <Input name="link" type="text" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Додати матеріал
          </button>
        </Form>
      )}
    </Formik>
  );
};
