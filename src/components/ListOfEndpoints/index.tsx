import CategoryButton from "../CategoryButton";
import styles from "./listOfEndpoints.module.scss";

const endpoints = [
  "action-adventure",
  "classic",
  "comedy",
  "drama",
  "horror",
  "family",
  "mystery",
  "scifi-fantasy",
  "western",
];

const ListOfEndpoints = ({ getFilms }: { getFilms: (str: string) => void }) => {
  return (
    <div className={styles.endpoints}>
      {endpoints.map((endpoint: string, i: number) => (
        <CategoryButton
          onClick={() => getFilms(endpoint)}
          category={endpoint}
          key={endpoint + i}
        />
      ))}
    </div>
  );
};

export default ListOfEndpoints;
