import styles from "./categoryButton.module.scss";

interface ICategoryButtonProps {
  category: string;
  onClick: (str: string) => void;
}

const CategoryButton = ({ category, onClick }: ICategoryButtonProps) => {
  return (
    <button className={styles["blob-btn"]} onClick={() => onClick(category)}>
      {category}
      <span className={styles["blob-btn__inner"]}>
        <span className={styles["blob-btn__blobs"]}>
          <span className={styles["blob-btn__blob"]}></span>
          <span className={styles["blob-btn__blob"]}></span>
          <span className={styles["blob-btn__blob"]}></span>
          <span className={styles["blob-btn__blob"]}></span>
        </span>
      </span>
    </button>
  );
};

export default CategoryButton;
