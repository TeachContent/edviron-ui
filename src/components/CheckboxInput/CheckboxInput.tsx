/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";

export const CheckboxInput = ({
  value,
  options,
  name,
  validator,
  required,
  add_error,
  onChange,
  validate,
  disabled,
  className,
}: any) => {
  const [error, set_error] = useState("");

  let selected_template: any = {};
  selected_template = {};
  options.forEach((option: string) => {
    selected_template[option] = value ? value.includes(option) : false;
  });
  const [selected, set_selected] = React.useState(selected_template);

  React.useEffect(() => {
    let selected_template: any = {};
    selected_template = {};
    options.forEach((option: string) => {
      selected_template[option] = value ? value.includes(option) : false;
    });
    set_selected(selected_template);
  }, [value]);

  const _validator = validator
    ? validator
    : required
    ? (s: any) => {
        let a = false;

        for (const c in s) {
          a = a || s[c];
        }
        return !a ? "Atleast one " + name + " is required" : "";
      }
    : (a: any) => "";

  useEffect(() => {}, [options]);
  useEffect(() => {
    if (onChange) onChange(name, selected);
    if (_validator) {
      set_error(_validator(selected));
      add_error(name, _validator(selected));
    } //eslint-disable-next-line
  }, []);

  return (
    <div className="checkbox-input text-start my-2 text-sm font-light">
      <label className="block text-sm font-medium leading-6 text-start text-gray-900 my-2">
        {"Select " + name || ""}
      </label>
      <div className="grid grid-cols-2">
        <div key={-1}>
          <input
            checked={Object.keys(selected).every((c) => selected[c])}
            className="accent-violet-500"
            type="checkbox"
            name=""
            id=""
            onChange={(e) => {
              Object.keys(selected_template).forEach(
                (c) => (selected_template[c] = e.target.checked)
              );

              set_selected(JSON.parse(JSON.stringify(selected_template)));
              if (onChange)
                onChange(name, JSON.parse(JSON.stringify(selected_template)));
              if (_validator) {
                set_error(
                  _validator(JSON.parse(JSON.stringify(selected_template)))
                );
                add_error(
                  name,
                  _validator(JSON.parse(JSON.stringify(selected_template)))
                );
              }
            }}
            // disabled={}
          />{" "}
          Select All
        </div>
        {options.map((option: string, i: number) => (
          <div key={i}>
            <input
              className="accent-violet-500 "
              type="checkbox"
              name=""
              id=""
              disabled={disabled && disabled.includes(option)}
              checked={selected[option]}
              onChange={(e: any) => {
                set_selected({ ...selected, [option]: !selected[option] });
                if (onChange)
                  onChange(name, { ...selected, [option]: !selected[option] });
                if (_validator) {
                  set_error(
                    _validator({ ...selected, [option]: !selected[option] })
                  );
                  add_error(
                    name,
                    _validator({ ...selected, [option]: !selected[option] })
                  );
                }
              }}
            />{" "}
            <span className={className}>{option}</span>
          </div>
        ))}
      </div>
      <span className="text-red-500 text-[13px]">{validate ? error : ""}</span>
    </div>
  );
};
