import { forwardRef } from "react";
import styles from "./form.module.scss";

interface ISearchProps {
  search: () => void;
}

const Form = forwardRef<HTMLInputElement, ISearchProps>(({ search }, ref) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
    >
      <input
        className={styles["search-input"]}
        ref={ref}
        type="text"
        placeholder="Type name of film."
      />
      <button className={styles["search-button"]} type="submit">
        Search
      </button>
    </form>
  );
});

export default Form;
