import { useState } from 'react';
import './ukol.css';

// Zadání 1: Pomocí `map` vypište v seznamu `ul` všechny úkoly pomocí komponenty `Ukol`.
// Zadání 2: V komponentě Ukol si nachystejte proměnnou s hodnotou `false`. Klikem na tlačítko ji změňte na `true` pro splněný úkol.
// Zadání 3: Pokud je úkol splněný, nerenderujte tlačítko a `li` přidejte navíc třídu `ukol--splnen`.

// Bonus: Nastavte jednotlivým položkám ve výpisu `key`, aby vývojářské nástroje v prohlížeči nezobrazovaly varování. Nápověda: Key musí být v seznamu unikátní. Použijte název úkolu.

const Ukol = ({ nazev }) => {
  const [stav, setStav] = useState(false)

  return (
    <>
      {stav ? 
      <li className="ukol ukol--splnen">
      <span className="ukol__nazev">{nazev}</span>
      </li> :
      <li className="ukol">
      <span className="ukol__nazev">{nazev}</span>
      <button className="ukol__akce" onClick={() => {setStav(true)}}>splnit</button>
      </li>
      }
    </>
  );
};

export const Uloha1 = () => {
  const ukoly = ['Zamést', 'Pověsit prádlo', 'Umýt okna', 'Vynést koš'];

  return <ul>{ukoly.map((ukol) => (<Ukol nazev={ukol}/>))}</ul>;
};
