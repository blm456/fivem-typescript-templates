import React, { useEffect, useState } from "react";
import { fetchNui } from "./nui";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState("Hello NUI");

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data?.type === "setVisible") setVisible(!!data.isVisible);
      if (data?.type === "setText") setMsg(String(data.text ?? ""));
    };
    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);

  if (!visible) return null;

  return <div></div>;
}
