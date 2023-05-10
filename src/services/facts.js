const CAT_RANDOM_FACT_URL = "https://catfact.ninja/fact";

export const getRandomFact = () => {
   return fetch(CAT_RANDOM_FACT_URL)
      .then((res) => res.json())
      .then((data) => {
         const { fact } = data
         return fact
      });
};