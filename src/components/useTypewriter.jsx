import { useEffect, useState } from "react";

export function useTypewriter(words = [], delay = 150) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (subIndex === words[index].length + 1 && !reverse) {
        setReverse(true);
        return;
      }
      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 100 : delay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, delay]);

  return words[index].substring(0, subIndex);
}
