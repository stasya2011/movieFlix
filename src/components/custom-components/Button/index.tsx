import classnames from "classnames";
import styles from "./button.module.scss";

const ButtonElement = ({
  action,
  onClick,
  classNameList,
}: {
  action: string;
  onClick: () => void;
  classNameList: string;
}) => {
  return (
    <button className={classnames(styles[classNameList])} onClick={onClick}>
      {action}
    </button>
  );
};

export default ButtonElement;
