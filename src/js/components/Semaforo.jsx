import { useState } from "react";


export const Semaforo = () => {
  const [active, setActive] = useState("");

  return (
    <div className="traffic-light">
      <div
        className={`light red ${active === "red" ? "red2" : ""}`}
        onClick={() => setActive(active === "red" ? "" : "red")}
      ></div>

      <div
        className={`light yellow ${active === "yellow" ? "yellow2" : ""}`}
        onClick={() => setActive(active === "yellow" ? "" : "yellow")}
      ></div>

      <div
        className={`light green ${active === "green" ? "green2" : ""}`}
        onClick={() => setActive(active === "green" ? "" : "green")}
      ></div>
    </div>
  );
};

