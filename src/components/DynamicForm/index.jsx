import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        {Object.values(fields)?.map((val, input) => (
          <Col sm={6} xs={12} key={input}>
            <Form.Group className="mb-4" controlId={val?.id}>
              <Row>
                <Col xs={12} className="mb-3">
                  <Form.Label
                    className={classNames({
                      "text-danger": errors[val?.name]?.message,
                    })}
                  >
                    {val?.title}
                  </Form.Label>
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
                      <>
                        <Form.Control
                          onBlur={onBlur} // notify when input is touched
                          onChange={onChange} // send value to hook form
                          value={value}
                          ref={ref}
                          placeholder={val?.placeholder}
                          aria-invalid={error?.message ? "true" : "false"}
                          className={classNames({
                            "border-danger": error?.message,
                          })}
                        />
                      </>
                    )}
                  />
                </Col>
                <Col xs={12}>
                  {errors[val?.name] && (
                    <p className="text-danger" role="alert">
                      {errors[val?.name]?.message}
                    </p>
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
