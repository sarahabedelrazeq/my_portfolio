import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { images } from "assets";
import { Main } from "components/Layouts";
import { useLanguage, useTheme } from "hooks";
import about from "data/about.json";
import { DynamicForm } from "components";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    password: yup.number().positive().integer().required(),
  })
  .required();

const Home = () => {
  const language = useLanguage();
  const theme = useTheme();
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

  const defaultValues = React.useMemo(() => {
    return {
      name: "sarah",
      password: "1234",
    };
  }, []);

  console.log(count);

  return (
    <section className="pt-5 ">
      <Container className="py-5">
        <DynamicForm fields={fields} schema={schema} />
      </Container>
    </section>
  );
};

export default Home;
