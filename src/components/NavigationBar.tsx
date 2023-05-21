import clsx from "clsx";
import { motion } from "framer-motion";
import { forwardRef, memo } from "react";
import { BsGithub } from "react-icons/bs";

// eslint-disable-next-line react/display-name
const NavigationBar = forwardRef<HTMLElement | null, unknown>((_, ref) => (
  <nav className={clsx("navigation-bar")} ref={ref || null}>
    <motion.div
      initial={{ translateY: "-100px" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx("container")}
    >
      <span className={clsx("navigation-bar--logo")}>
        <span>Anime</span>
        <span>
          Quotes. <span className="badge badge-rotated">ID</span>
        </span>
      </span>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        href="https://github.com/andrianfaa/Anime-Quotes"
        title="Source Code available in Github"
        aria-label="Source Code available in Github"
        target="_blank"
        rel="noreferrer noopener"
        className={clsx("navigation-bar--github-button")}
      >
        <BsGithub className={clsx("icon")} />
      </motion.a>
    </motion.div>
  </nav>
));

export default memo(NavigationBar);
