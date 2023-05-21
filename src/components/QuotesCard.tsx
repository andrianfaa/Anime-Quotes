import { useDebounce } from "@anfa/custom-hooks";
import clsx from "clsx";
import { memo } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { type Quotes } from "../hooks/useGetQuotes";

interface Props extends Partial<Quotes> {
  isLoading: boolean;
  isError: boolean;
}

const QuotesCard = ({ anime, character, quote, isLoading, isError }: Props) => {
  const debouncedData = useDebounce({ anime, character, quote }, 300);

  return (
    <div className={clsx("card")}>
      <div className={clsx("card--loader", isLoading ? "loading" : "")}>
        <AiOutlineLoading3Quarters className={clsx("loader animate-spin")} />
      </div>

      {isError ? (
        '"Api Eror"'
      ) : (
        <div className="card-body">
          <h1 className={clsx("card--title")}>{debouncedData.quote}</h1>
          <p className={clsx("card--subtitle")}>{debouncedData.character}</p>
          <p className={clsx("card--description")}>
            dari anime <span className="bold">{debouncedData.anime}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default memo(QuotesCard);
