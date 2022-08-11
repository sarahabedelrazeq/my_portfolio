import React from "react";
import { TextField } from "@mui/material";
import classNames from "classnames";
import { Col, Form, Row } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";

export default function Input({field}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Col sm={6} xs={12}>
      <Form.Group className="mb-4" controlId={field?.name}>
        <Row>
          <Col xs={12} className="mb-3">
            <Controller
              name={field?.name}
              control={control}
              rules={{ required: true }}
              defaultValue={field?.defaultValue ? field?.defaultValue : ""}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <>
                  <TextField
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    id={field?.name}
                    name={field?.name}
                    type={field?.type || "text"}
                    placeholder={field?.placeholder || field.title}
                    label={field?.title}
                    aria-invalid={error?.message ? "true" : "false"}
                    className={classNames("w-100", {
                      "border-danger": error?.message,
                    })}
                  />
                </>
              )}
            />
          </Col>
          <Col xs={12}>
            {errors[field?.name] && (
              <p className="text-danger" role="alert">
                {errors[field?.name]?.message}
              </p>
            )}
          </Col>
        </Row>
      </Form.Group>
    </Col>
  );
}
