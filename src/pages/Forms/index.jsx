import React from "react";
import {
  Col,
  Container,
  Button,
  Form as BootstrapForm,
  Row,
} from "react-bootstrap";
import { images } from "assets";
import { Main } from "components/Layouts";
import { useLanguage, useTheme } from "hooks";
import { DynamicForm, Form } from "components";
import * as yup from "yup";
import { useFormContext } from "react-hook-form";

const Forms = () => {
  const language = useLanguage();
  const [count, setCount] = React.useState(0);

  const fields = React.useMemo(() => {
    return {
      name: {
        name: "name",
        title: "Name",
        placeholder: "Name",
        id: "name",
        required: true,
        defaultValue: "sarah",
      },
      password: {
        name: "password",
        title: "Password",
        placeholder: "Password",
        id: "password",
        required: false,
      },
    };
  }, []);

  const schema = React.useMemo(() => {
    return yup
      .object({
        name: yup.string().required(""),
        password: yup.number().positive().integer(),
      })
      .required();
  }, []);

  const defaultValues = React.useMemo(() => {
    return {
      name: "sarah",
      password: "1234",
    };
  }, []);

  return (
    <Main>
      <section className="pt-5 ">
        <Container className="py-5">
          <Form
            schema={schema}
            submitControl={
              <Button
                variant="primary"
                type="submit"
                className="text-white"
                colProps={{ xs: 6 }}
              >
                submit
              </Button>
            }
          >
            <BootstrapForm.Control
              name="name"
              placeholder="Name"
              colProps={{ xs: 12, sm: 6 }}
              title="Nama"
            />
            <BootstrapForm.Control
              name="password"
              placeholder="Password"
              colProps={{ xs: 12, sm: 6 }}
              title="Password"
            />
          </Form>
          <hr />
          <DynamicForm fields={fields} schema={schema} />
        </Container>
      </section>
    </Main>
  );
};

export default Forms;
