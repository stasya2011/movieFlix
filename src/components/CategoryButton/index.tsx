import { forwardRef } from "react";

interface ICategoryButtonProps {
  category: string;
  onClick: (str: string) => void;
}

const CategoryButton = forwardRef<HTMLButtonElement, ICategoryButtonProps>(
  ({ category, onClick }: ICategoryButtonProps, ref) => {
    return (
      <button ref={ref} onClick={() => onClick(category)}>
        {category}
      </button>
    );
  }
);

export default CategoryButton;
