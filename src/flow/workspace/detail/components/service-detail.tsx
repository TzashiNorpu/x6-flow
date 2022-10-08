import { Divider, Form, Input, Select, Table } from "antd";
import { useFlow } from "flow/context/context";
import { ServiceNodeDataType } from "flow/workspace/items/detail-types";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import React from "react";
import { IntfSelect, MethodSelect, SysSelect } from "flow/utils/select";
import styled from "@emotion/styled";
import { useMethodArgs } from "flow/utils/select-types";
export const ServiceDetail = ({ id }: { id: string }) => {
  const { graph } = useFlow();
  const cell = graph?.getCellById(id);

  const [serviceState, setServiceState] = useState<ServiceNodeDataType>({
    ...cell?.data,
  });
  useEffect(() => {
    setServiceState({ ...cell?.data });
  }, [cell?.data]);

  const { data: list } = useMethodArgs(serviceState.method.id);

  const [intfEnable, setIntfEnable] = useState<boolean>(false);
  const [methodEnabled, setMethodEnabled] = useState<boolean>(false);

  const columns = [
    {
      title: "属性",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "数据来源",
      dataIndex: "source",
      key: "source",
    },
  ];

  const handlerSysId = (data: any) => {
    if (data.value !== serviceState.sys.id) {
      setServiceState({
        ...serviceState,
        interface: {
          id: "0",
          name: "",
        },
      });
    }

    if (data !== undefined) {
      setServiceState({
        ...serviceState,
        sys: {
          id: data.value,
          name: data.label,
        },
      });
      if (cell && cell.data)
        cell.data = {
          ...serviceState,
          sys: {
            id: data.value,
            name: data.label,
          },
        };
      setIntfEnable(true);
    }
  };

  const handlerIntfId = (data: any) => {
    if (data.value !== serviceState.sys.id) {
      setServiceState({
        ...serviceState,
        method: {
          id: "0",
          name: "",
        },
      });
    }

    if (data.value !== undefined) {
      setServiceState({
        ...serviceState,
        interface: {
          id: data.value,
          name: data.label,
        },
      });
      if (cell && cell.data)
        cell.data = {
          ...serviceState,
          interface: {
            id: data.value,
            name: data.label,
          },
        };

      setMethodEnabled(true);
    }
  };

  const handlerMethodId = (data: any) => {
    if (data.value !== undefined) {
      setServiceState({
        ...serviceState,
        method: {
          id: data.value,
          name: data.label,
        },
      });
      if (cell && cell.data)
        cell.data = {
          ...serviceState,
          method: {
            id: data.value,
            name: data.label,
          },
        };
    }
  };

  return (
    <>
      <Wrapper>
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
          <Form.Item label="请选择应用">
            <SysSelect
              defaultOptionName={"请选择应用"}
              value={serviceState.sys.id}
              handler={handlerSysId}
            />
          </Form.Item>
          <Form.Item label="请选择接口名称">
            {intfEnable ? (
              <IntfSelect
                parentid={serviceState.sys.id}
                value={serviceState.interface.id}
                defaultOptionName={"请选择接口"}
                onChange={handlerIntfId}
              />
            ) : (
              <Select defaultValue="请先选择应用" disabled />
            )}
          </Form.Item>
          <Form.Item label="请选择方法名称">
            {methodEnabled ? (
              <>
                <MethodSelect
                  parentid={serviceState.interface.id}
                  value={serviceState.method.id}
                  defaultOptionName={"请选择方法"}
                  onChange={handlerMethodId}
                />
              </>
            ) : (
              <Select defaultValue="请先选择接口" disabled />
            )}
          </Form.Item>
          <Divider />
          <Title>输入</Title>
          <Table
            size="small"
            dataSource={
              serviceState.method.id ? list?.filter((x) => x.type === "1") : []
            }
            columns={columns}
            pagination={{
              pageSize: 5,
            }}
            scroll={{
              y: 100,
            }}
          />

          <Title>输出</Title>
          <Table
            size="small"
            dataSource={
              serviceState.method.id ? list?.filter((x) => x.type === "2") : []
            }
            columns={columns}
            pagination={{
              pageSize: 5,
            }}
            scroll={{
              y: 100,
            }}
          />
        </Form>
      </Wrapper>
    </>
  );
};

const Title = styled.h2`
  font-size: 1.8rem;
  padding-left: 14px;
`;

const Wrapper = styled.div`
  overflow: scroll;
`;
