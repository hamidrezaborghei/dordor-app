import type { FC } from "react";

import "./IndexPage.css";
import { useInitData } from "@tma.js/sdk-react";

export const IndexPage: FC = () => {
  const init = useInitData();
  return <div>{JSON.stringify(init)}</div>;
};
