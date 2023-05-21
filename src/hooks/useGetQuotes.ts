import { useEffect, useRef, useState } from "react";

export interface Quotes {
  /**
   * Anime name
   */
  anime: string;
  /**
   * Character name
   */
  character: string;
  /**
   * Quotes from the Character
   */
  quote: string;
}

interface UseGetQuotesReturnTypes {
  /**
   * Quotes data
   * @example
   * {
   *  "anime":"Yu-Gi-Oh! Arc-V",
   *  "character":"Yuzu Hiiragi",
   *  "quote":"Smiles are what connect people! It allows them to...",
   * }
   */
  quotes: Quotes | null;
  isError: boolean;
  isLoading: boolean;
  error: string | null;
  /**
   * Refetch Quotes
   * @description this function is used to get new Quotes
   */
  refetch: () => void;
}

const useGetQuotes = (): UseGetQuotesReturnTypes => {
  const [quotes, setQuotes] = useState<Quotes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isFetched = useRef<boolean>(false);

  const fetchData = async () => {
    if (!isLoading) setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/quotes/anime/random",
        {
          method: "GET"
        }
      );
      const data = await response.json();

      setQuotes(data.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error?.message || "Unknown error");
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  useEffect(() => {
    if (!isFetched.current) {
      fetchData();

      isFetched.current = true;
    }
  }, []);

  return {
    quotes,
    error,
    isError: !!error,
    isLoading,
    refetch: fetchData
  };
};

export default useGetQuotes;
