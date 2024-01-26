import { Outlet } from "react-router-dom";
import Header from "../Header";
import CategoryButton from "../CategoryButton";
import styles from "../../App.module.scss";

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
const Layout = ({ getFilms }: { getFilms: (str: string) => void }) => {
  return (
    <>
      <Header />
      <div className={styles.endpoints}>
        {endpoints.map((endpoint: string) => (
          <CategoryButton
            onClick={() => getFilms(endpoint)}
            category={endpoint}
          />
        ))}
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
