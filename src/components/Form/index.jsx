import React from "react";
import { Button, Col, Form as BootstrapForm, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";

function Form({ defaultValues, schema, children, submitControl }) {
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
  let submit;
  if (submitControl) {
    submit = <Col {...submitControl.props.colProps}>{submitControl}</Col>;
  } else {
    submit = (
      <Col xs={12}>
        <Button> submit</Button>
      </Col>
    );
  }


  return (
    <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
      <Row>
        {Array.isArray(children)
          ? children.map((child, index) => {
              if (child.props.name) {
                const field = React.createElement(Controller, {
                  name: child.props.name,
                  control: control,
                  rules: { required: true },
                  defaultValue: child.props.defaultValue
                    ? child.props.defaultValue
                    : "",
                  render: ({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <>
                      <child.type
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        value={value}
                        ref={ref}
                        placeholder={child.props.placeholder}
                        aria-invalid={error?.message ? "true" : "false"}
                        className={classNames({
                          "border-danger": error?.message,
                        })}
                      />
                    </>
                  ),
                });

                return (
                  <Col {...child.props.colProps} key={index}>
                    <BootstrapForm.Group
                      className="mb-4"
                      controlId={
                        child.props.id ? child.props.id : child.props.name
                      }
                    >
                      <Row>
                        <Col xs={12} className="mb-3">
                          <BootstrapForm.Label
                            className={classNames({
                              "text-danger": errors[child.props.name]?.message,
                            })}
                          >
                            {child.props.title}
                          </BootstrapForm.Label>
                        </Col>
                        <Col xs={12} className="mb-3">
                          {field}
                        </Col>
                        <Col xs={12}>
                          {errors[child.props.name] && (
                            <p className="text-danger" role="alert">
                              {errors[child.props.name]?.message}
                            </p>
                          )}
                        </Col>
                      </Row>
                    </BootstrapForm.Group>
                  </Col>
                );
              } else return child;
            })
          : children}

        {submit}
      </Row>
    </BootstrapForm>
  );
}

export default Form;
