import React from "react";
import { Container } from "react-bootstrap";
import { Main } from "components/Layouts";
import { DynamicForm } from "components";
import * as yup from "yup";

const Forms = () => {
  const fields = React.useMemo(() => {
    return {
      name: {
        name: "name",
        title: "Name",
        placeholder: "Name",
        component: "transition-input",
        id: "name",
        required: true,
        defaultValue: {},
      },
      password: {
        name: "password",
        title: "Password",
        placeholder: "Password",
        type: "password",
        id: "password",
        required: false,
      },
    };
  }, []);

  const defaultValues = React.useMemo(() => {
    return {
      name: "sarah",
      password: "1234",
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

  return (
    <Main>
      <section className="pt-5 ">
        <Container className="py-5">
          <DynamicForm fields={fields} schema={schema} />
        </Container>
      </section>
    </Main>
  );
};

export default Forms;
/*
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
 */
