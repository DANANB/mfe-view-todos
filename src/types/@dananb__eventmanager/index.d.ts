declare module "@dananb/eventmanager";
declare enum Priority {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
}

declare type Todo = {
  priority: Priority;
  description: string;
};
