import { useSelector } from "react-redux";

export function useData(infoType) {
  return useSelector((state) => state[infoType]);
}
