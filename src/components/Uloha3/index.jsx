// Zadání 1: Vytvořte stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypište místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změňte `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

import { useState } from "react";

export const Uloha3 = () => {
  const [value, setValue] = useState("možná")

  return (
    <>
      <h3>Prší v Brně: {value}</h3>
      <button onClick={() => {
        if (value === "možná") {
          setValue("ano")
        } else if (value === "ano") {
          setValue("ne")
        } else {
          setValue("možná")
        }
      }}>změnit</button>
    </>
  );
};
