import classNames from "classnames";
import React from "react";
import { Form } from "react-bootstrap";
import { Controller, useFormContext } from "react-hook-form";

const languages = [
  { code: "en", title: "English" },
  { code: "ar", title: "Arabic" },
];

export default function TransitionInput({ val }) {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  return languages.map((language, index) => (
    <div className="mb-3" key={index}>
      <Controller
        name={val?.name + "-" + language.code}
        control={control}
        rules={{ required: true }}
        defaultValue={val?.defaultValue && val?.defaultValue[language.code]? val?.defaultValue[language.code] : ""}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) => (
          <>
            <Form.Control
              onBlur={onBlur}
              ref={ref}
              onChange={(event) => {
                setValue(val?.name, {
                  ...getValues(val?.name),
                  [language.code]: event.target.value,
                });
                onChange(event)
              }}
              value={value}
              placeholder={val?.placeholder}
              aria-invalid={error?.message ? "true" : "false"}
              className={classNames({
                "border-danger": error?.message,
              })}
            />
          </>
        )}
      />
    </div>
  ));
}
