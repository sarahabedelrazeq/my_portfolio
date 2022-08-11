import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import Test from "./Test";
import TransitionInput from "./fields/TransitionInput";
import AutocompleteInput from "./fields/AutocompleteInput";
import { TextField } from "@mui/material";
import Input from "./fields/Input";

function DynamicForm({ fields, defaultValues, schema }) {
  const methods = useForm({
    defaultValues: defaultValues ? { ...defaultValues } : {},
    resolver: yupResolver(schema),
  });
  const { handleSubmit, watch } = methods;
  const onSubmit = (data) => console.log(data);

  console.log("getValues(", watch());
  
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="">
          {Object.values(fields)?.map((field, index) =>
            field.component === "transition-input" ? (
              <TransitionInput field={field} key={index} />
            ) : field.component === "autocomplete" ? (
              <AutocompleteInput field={field} key={index} />
            ) : (
              <Input field={field} key={index} />
            )
          )}
          <Test />
          <Col sm={6} xs={12}>
            <Button variant="primary" type="submit" className="text-white">
              submit
            </Button>
          </Col>
        </Row>
      </Form>
    </FormProvider>
  );
}

export default React.memo(DynamicForm);
