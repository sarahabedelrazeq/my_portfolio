import { useFormContext } from "react-hook-form";

export default function Test() {
  const methods = useFormContext();
  console.log("methods", methods.watch());

  return <></>;
}
