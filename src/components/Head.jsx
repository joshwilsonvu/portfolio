import React from "react";
import { Helmet } from "react-helmet";
import { head } from "../data";
const { title, lang, description } = head;

export default function Head() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <html lang={lang} />
      <meta name="description" content={description} />
    </Helmet>
  );
}
