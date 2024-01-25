interface ICategoryButtonProps {
  category: string;
  onClick: (str: string) => void;
}

const CategoryButton = ({ category, onClick }: ICategoryButtonProps) => {
  return <button onClick={() => onClick(category)}>{category}</button>;
};

export default CategoryButton;
