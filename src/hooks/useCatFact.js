import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";


export function useCatFact() {
   const [fact, setFact] = useState("");

   const refreshFact = () => {
      getRandomFact().then((newFact) => setFact(newFact));
      //This is another option but it's the same as the previous line
      // getRandomFact().then(setFact());
   };
   useEffect(refreshFact, []);

   return { fact, refreshFact };
}