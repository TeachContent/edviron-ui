import React from "react";
import loadingIcon from "../../assets/loading-purple.svg";

export const Form = ({ children, className, onSubmit }: any) => {
  const [errors, set_errors]: [any, any] = React.useState({});
  let errors_template: any = {};
  const [validate, set_validate] = React.useState<any>(null);
  const [form_data, set_form_data] = React.useState({});
  const [loading, set_loading] = React.useState(false);

  if (loading) {
    return (
      <div className="w-full h-full flex">
        <img className="m-auto" src={loadingIcon} alt="" />
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        set_validate(true);

        let valid = true;
        for (const name in errors) {
          if (errors[name].length > 0) {
            valid = false;
            break;
          }
        }
        if (!valid) return;
        set_loading(true);
        await onSubmit(form_data);
        set_validate(false);
        set_loading(false);
      }}
      className={className + " flex flex-col"}
    >
      {children.map((child: any, i: any) =>
        React.cloneElement(child, {
          key: i,
          add_error: (name: any, error: any) => {
            errors_template = { ...errors_template, ...errors };
            errors_template[name] = error;
            set_errors(errors_template);
          },
          onChange: (name: any, value: any, e: any) => {
            set_form_data({ ...form_data, [name]: value });

            child.props.onChange && child.props.onChange(value, e);
          },
          validate: validate,
        })
      )}
    </form>
  );
};
