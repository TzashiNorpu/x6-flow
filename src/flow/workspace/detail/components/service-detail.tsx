import { Form, Input, Select } from "antd";
import { useFlow } from "flow/context/context";
import { ServiceNodeDataType } from "flow/workspace/items/detail-types";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";

export const ServiceDetail = ({ id }: { id: string }) => {
  const { graph } = useFlow();
  const cell = graph?.getCellById(id);
  console.log(cell?.data);
  const [serviceState, setServiceState] = useState<ServiceNodeDataType>({
    ...cell?.data,
  });

  useEffect(() => {
    setServiceState({ ...cell?.data });
  }, [cell?.data]);

  console.log("serivceState", serviceState);

  const interfaceNameChangeHandler = (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    setServiceState({
      ...serviceState,
      ServiceName: evt.target.value,
    });
    if (cell && cell.data)
      cell.data = { ...serviceState, ServiceName: evt.target.value };
  };

  return (
    <>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Input">
          <Input />
        </Form.Item>

        <Form.Item label="请选择接口名称">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="请选择方法名称">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};
