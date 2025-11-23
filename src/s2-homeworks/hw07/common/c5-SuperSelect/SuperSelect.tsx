import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: any) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  value,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: any[] = options
    ? options.map((o, index) => (
        <option
          id={"hw7-option-" + o.id}
          className={s.option}
          key={o.id}
          value={index}
        >
          {o.value}
        </option>
      ))
    : []; // map options with key

 const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e);
   if (!onChangeOption || !options?.length) return;

   const index = +e.target.value;

   if (index >= 0 && index < options.length) {
     onChangeOption(options[index].value);
   }
 };

  const finalSelectClassName = s.select + (className ? " " + className : "");

  return (
    <select
      value={value || 0}
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
