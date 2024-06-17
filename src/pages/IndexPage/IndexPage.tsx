import { Section, Cell, Image, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/components/Link/Link.tsx";

import tonSvg from "./ton.svg";

import "./IndexPage.css";
import { useInitData } from "@tma.js/sdk-react";

export const IndexPage: FC = () => {
  const init = useInitData();
  return <div>{JSON.stringify(init)}</div>;
};
