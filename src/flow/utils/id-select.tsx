import React from "react";
import { Select } from "antd";

type Raw = string | number;
type SelectProps = React.ComponentProps<typeof Select>;

interface IdSelectProps extends Omit<SelectProps, "value" | "options"> {
  parentid?: string | null;
  value?: Raw | null | undefined;
  handler?: (value?: any) => void;
  defaultOptionName?: string;
  options?: { name: string; id: number }[];
}

/**
 * value 可以传入多种类型的值
 * onChange只会回调 number|undefined 类型
 * 当 isNaN(Number(value)) 为true的时候，代表选择默认类型
 * 当选择默认类型的时候，onChange会回调undefined
 * @param props
 * @constructor
 */
export const IdSelect = (props: IdSelectProps) => {
  // console.log("props", props);
  const { value, handler, defaultOptionName, options, ...restProps } = props;
  return (
    <Select
      // value={options?.length ? toNumber(value) : 0}
      /* onChange={(value) => {
        onChange?.(toNumber(value) || 0);
      }} */
      labelInValue
      defaultValue={{
        value: value,
      }}
      onChange={handler}
      {...restProps}
    >
      {defaultOptionName ? (
        <Select.Option key={0} value={"0"}>
          {defaultOptionName}
        </Select.Option>
      ) : null}
      {options?.map((option) => (
        <Select.Option key={toNumber(option.id)} value={option.id}>
          {option.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export const toNumber = (value: unknown) =>
  isNaN(Number(value)) ? 0 : Number(value);
