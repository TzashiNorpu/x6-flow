export enum NodeType {
  "Grid" = "Grid",
  "Start" = "Start",
  "ServiceTask" = "ServiceTask",
  "ScriptTask" = "ScriptTask",
  "Choice" = "Choice",
  "Compensation" = "Compensation",
  "Succeed" = "Succeed",
  "Fail" = "Fail",
  "CompensationTrigger" = "CompensationTrigger",
  "SubStateMachine" = "SubStateMachine",
  "Catch" = "Catch",
}

export interface StartNodeDataType {
  Type: NodeType.ServiceTask;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface ServiceNodeDataType {
  Type: NodeType.ServiceTask;
  sys: {
    name: string | null;
    id: string | null;
  };
  interface: {
    name: string | null;
    id: string | null;
  };
  method: {
    name: string | null | undefined;
    id: string | null | undefined;
  };
  args: {
    input: [] | null;
    output: [] | null;
  };
}

export interface ScriptNodeDataType {
  Type: NodeType.ScriptTask;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface ChoiceNodeDataType {
  Type: NodeType.Choice;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface CompensationNodeDataType {
  Type: NodeType.Compensation;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface SucceedNodeDataType {
  Type: NodeType.Succeed;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface FailNodeDataType {
  Type: NodeType.Fail;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface CatchNodeDataType {
  Type: NodeType.Catch;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface CompensationTriggerNodeDataType {
  Type: NodeType.CompensationTrigger;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}

export interface SubStateMachineNodeDataType {
  Type: NodeType.Fail;
  ServiceName: string;
  ServiceMethod: string;
  CompensateState?: string;
  Next?: string;
  Input: string[];
  Output: {};
  Status: {};
}
