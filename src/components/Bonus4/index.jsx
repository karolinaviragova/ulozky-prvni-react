// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypište do `<output></output>` jejich součet.

import { useState } from "react";

export const Bonus4 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <>
      <input type="number" defaultValue="0" onChange={(e) => {setA(Number(e.target.value))}}/> +{' '}
      <input type="number" defaultValue="0" onChange={(e) => {setB(Number(e.target.value))}}/> = <output>{a + b}</output>
    </>
  );
};
