import { useTranslation } from "react-i18next";
import { b1, b2, b3, b4 } from "../assets";
import ReactHtmlParser from "react-html-parser";

export const Links = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      to: "/",
      title: t("header.l1"),
    },
    {
      id: 2,
      to: "/medicine",
      title: t("header.l2"),
    },
    {
      id: 3,
      to: "/blog",
      title: t("header.l3"),
    },
    {
      id: 4,
      to: "/contact",
      title: t("header.l4"),
    },
  ];
};

export const SlideInfo = () => {
  const { t } = useTranslation();
  return [
    {
      id: 1,
      text: ReactHtmlParser(t("slideInfo.s1")),
      bg: b1,
    },
    {
      id: 2,
      text: ReactHtmlParser(t("slideInfo.s2")),
      bg: b2,
    },
    {
      id: 3,
      text: ReactHtmlParser(t("slideInfo.s3")),
      bg: b3,
    },
    {
      id: 4,
      text: ReactHtmlParser(t("slideInfo.s4")),
      bg: b4,
    },
  ];
};
