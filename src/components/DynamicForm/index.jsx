import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

function DynamicForm({ fields, defaultValues, schema }) {
  const {
    watch,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues ? { ...defaultValues } : {},
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log("Dynamic Form errors", errors);

  console.log("Dynamic Form data", watch());

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        {Object.values(fields)?.map((val, input) => (
          <Col sm={6} xs={12} key={input}>
            <Form.Group className="mb-4" controlId={val?.id}>
              <Row>
                <Col xs={12} className="mb-3">
                  <Form.Label>{val?.title}</Form.Label>
                </Col>
                <Col xs={12} className="mb-3">
                  <Controller
                    name={val?.name}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={val?.defaultValue ? val?.defaultValue : ""}
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { invalid, isTouched, isDirty, error },
                      formState,
                    }) => (
                      <Form.Control
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        value={value}
                        ref={ref}
                        placeholder={val?.placeholder}
                      />
                    )}
                  />
                </Col>
                <Col xs={12}>
                  {errors[val?.name] && (
                    <p className="text-danger">This field is required</p>
                  )}
                </Col>
              </Row>
            </Form.Group>
          </Col>
        ))}
        <Col sm={6} xs={12}>
          <Button variant="primary" type="submit" className="text-white">
            submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default React.memo(DynamicForm);
