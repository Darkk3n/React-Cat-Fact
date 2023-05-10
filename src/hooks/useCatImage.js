import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function useCatImage({ fact }) {
   const [imageUrl, setImageUrl] = useState("");
   useEffect(() => {
      if (!fact) return;
      const threeFirstWords = fact.split(" ", 3).join(" ");
      fetch(
         `${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`
      )
         .then((res) => res.json())
         .then((response) => {
            const { url } = response;
            setImageUrl(url);
         });
   }, [fact]);
   return { imageUrl };
}