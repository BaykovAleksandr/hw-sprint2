import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name

      if (action.payload === "up") {
        const sortedState = state.sort((a, b) => a.name.localeCompare(b.name));
        return sortedState;
      } else if (action.payload === "down") {
        const sortedState = state.sort((a, b) => b.name.localeCompare(a.name));
        return sortedState;
      }
      return state;
    }
    case "check": {
      return state.filter((user) => user.age > action.payload);
    }
    default:
      return state;
  }
};
