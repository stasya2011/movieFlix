import { useState } from "react";

const data = [
  {
    id: 1,
    title: "Inside Out",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_SX300.jpg",
    imdbId: "tt2096673",
    checked: false,
  },
  {
    id: 2,
    title: "Coco",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_SX300.jpg",
    imdbId: "tt2380307",
    checked: false,
  },
  {
    id: 3,
    title: "Incredibles 2",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_SX300.jpg",
    imdbId: "tt3606756",
    checked: false,
  },
];

const List = () => {
  const [items, setItems] = useState(data);

  const deleteElem = (id: number) => {
    setItems((prevState) => {
      return prevState.filter((elem) => elem.id !== id);
    });
  };

  const toggleCheckbox = (id: number) => {
    setItems((prevState) =>
      prevState.map((elem) => {
        if (elem.id === id) {
          elem.checked = !elem.checked;
        }
        return elem;
      })
    );
  };

  return (
    <div>
      {items.map((item) =>
        item.checked === true ? (
          <div style={{ backgroundColor: "pink" }}>
            <h3>{item.title}</h3>
            <img src={item.posterURL} alt={item.title} />
            <input
              onChange={() => toggleCheckbox(item.id)}
              type="checkbox"
              checked={item.checked}
            />
            <button onClick={() => deleteElem(item.id)}>delete</button>
          </div>
        ) : (
          <div style={{ backgroundColor: "green" }}>
            <h3>{item.title}</h3>
            <img src={item.posterURL} alt={item.title} />
            <input
              onChange={() => toggleCheckbox(item.id)}
              type="checkbox"
              checked={item.checked}
            />
            <button onClick={() => deleteElem(item.id)}>delete</button>
          </div>
        )
      )}
    </div>
  );
};

export default List;
