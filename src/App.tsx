import { NavigationBar, QuotesCard } from "@/components";
import { useGetQuotes } from "@/hooks";
import clsx from "clsx";
import { motion } from "framer-motion";
import { BsDice5Fill, BsFillHeartFill } from "react-icons/bs";

function App() {
  const { quotes, isLoading, isError, refetch } = useGetQuotes();

  return (
    <>
      <NavigationBar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1, delay: 0.25 }}
        className="main container"
      >
        <QuotesCard
          anime={quotes?.anime}
          character={quotes?.character}
          quote={quotes?.quote}
          isLoading={isLoading}
          isError={isError}
        />

        <motion.button
          whileTap={{
            rotate: ["0", "-180deg"],
            scale: 1.2
          }}
          type="button"
          className={clsx("refresh-button")}
          onClick={refetch}
          disabled={isLoading}
          title="Refresh Quotes"
        >
          <BsDice5Fill className={clsx("icon")} />
        </motion.button>
      </motion.main>

      <footer className="footer">
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p>
            Dibuat dengan <BsFillHeartFill className={clsx("icon heart")} />{" "}
            oleh{" "}
            <a
              href="https://github.com/andrianfaa"
              target="_blank"
              className={clsx("link")}
              rel="noopener noreferrer"
            >
              @andrianfaa
            </a>
            , dan data Quotes didapatkan dari{" "}
            <a
              href="https://raw.caliph.my.id/quotesnime.json"
              target="_blank"
              className={clsx("link")}
              rel="noopener noreferrer"
            >
              @caliphdev
            </a>
          </p>
        </motion.div>
      </footer>
    </>
  );
}

export default App;
