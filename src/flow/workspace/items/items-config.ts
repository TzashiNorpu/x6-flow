import serviceTask from "assets/flow/serviceTask.svg";
import startIcon from "assets/flow/start.svg";
import scriptTask from "assets/flow/scriptTask.svg";
import choice from "assets/flow/choice.svg";
import compensation from "assets/flow/compensation.svg";
import succeed from "assets/flow/succeed.svg";
import fail from "assets/flow/fail.svg";
import catchIcon from "assets/flow/catch.svg";
import compensationTrigger from "assets/flow/compensationTrigger.svg";
import subStateMachine from "assets/flow/subStateMachine.svg";
import {
  CatchNodeDataType,
  ChoiceNodeDataType,
  CompensationNodeDataType,
  CompensationTriggerNodeDataType,
  FailNodeDataType,
  NodeType,
  ScriptNodeDataType,
  ServiceNodeDataType,
  StartNodeDataType,
  SubStateMachineNodeDataType,
  SucceedNodeDataType,
} from "./detail-types";

interface ItemType {
  id: number;
  type: NodeType;
  icon: string;
  width: number;
  height: number;
  data:
    | StartNodeDataType
    | ServiceNodeDataType
    | ScriptNodeDataType
    | ChoiceNodeDataType
    | CompensationNodeDataType
    | SucceedNodeDataType
    | FailNodeDataType
    | CatchNodeDataType
    | CompensationTriggerNodeDataType
    | SubStateMachineNodeDataType;
}

const InitStartNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as StartNodeDataType;

const InitServiceNodeData = {
  ServiceName: "xxxxx",
  ServiceMethod: "",
  Type: NodeType.ServiceTask,
} as ServiceNodeDataType;

const InitChoiceNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as ChoiceNodeDataType;

const InitCompensationNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as CompensationNodeDataType;

const InitSucceedNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as SucceedNodeDataType;

const InitFailNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as FailNodeDataType;

const InitCatchNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as CatchNodeDataType;

const InitCompensationTriggerNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as CompensationNodeDataType;

const InitScriptNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as ScriptNodeDataType;

const InitSubStateMachineNodeData = {
  ServiceName: "",
  ServiceMethod: "",
} as SubStateMachineNodeDataType;

export const config: ItemType[] = [
  {
    id: 1,
    type: NodeType.Start,
    icon: startIcon,
    width: 80,
    height: 80,
    data: InitStartNodeData,
  },
  {
    id: 2,
    icon: serviceTask,
    type: NodeType.ServiceTask,
    width: 118,
    height: 56,
    data: InitServiceNodeData,
  },
  {
    id: 3,
    icon: scriptTask,
    type: NodeType.ScriptTask,
    width: 118,
    height: 56,
    data: InitScriptNodeData,
  },
  {
    id: 4,
    icon: choice,
    type: NodeType.Choice,
    width: 86,
    height: 78,
    data: InitChoiceNodeData,
  },
  {
    id: 5,
    icon: compensation,
    type: NodeType.Compensation,
    width: 118,
    height: 56,
    data: InitCompensationNodeData,
  },
  {
    id: 6,
    icon: succeed,
    type: NodeType.Succeed,
    width: 80,
    height: 80,
    data: InitSucceedNodeData,
  },
  {
    id: 7,
    icon: fail,
    type: NodeType.Fail,
    width: 80,
    height: 80,
    data: InitFailNodeData,
  },
  {
    id: 8,
    icon: catchIcon,
    type: NodeType.Catch,
    width: 45,
    height: 45,
    data: InitCatchNodeData,
  },
  {
    id: 9,
    icon: compensationTrigger,
    type: NodeType.CompensationTrigger,
    width: 118,
    height: 56,
    data: InitCompensationTriggerNodeData,
  },
  {
    id: 10,
    icon: subStateMachine,
    type: NodeType.SubStateMachine,
    width: 118,
    height: 56,
    data: InitSubStateMachineNodeData,
  },
];

export const getInitData = (type: NodeType) => {
  switch (type) {
    case NodeType.Start:
      return InitStartNodeData;
    case NodeType.ServiceTask:
      return InitServiceNodeData;
    case NodeType.ScriptTask:
      return InitScriptNodeData;
    case NodeType.Choice:
      return InitChoiceNodeData;
    case NodeType.Catch:
      return InitCatchNodeData;
    case NodeType.Compensation:
      return InitCompensationNodeData;
    case NodeType.CompensationTrigger:
      return InitCompensationTriggerNodeData;
    case NodeType.Fail:
      return InitFailNodeData;
    case NodeType.Succeed:
      return InitSucceedNodeData;
    case NodeType.SubStateMachine:
      return InitSubStateMachineNodeData;
    default:
      break;
  }
};
