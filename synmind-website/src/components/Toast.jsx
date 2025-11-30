import { useEffect } from "react";

export default function Toast({ text, onDone, ms = 1600 }) {
  useEffect(() => {
    const t = setTimeout(() => onDone?.(), ms);
    return () => clearTimeout(t);
  }, [onDone, ms]);

  return <div className="toast">{text}</div>;
}
