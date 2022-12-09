const Button = ({ title, link, className, onClick }) => {
  return (
    <button
      className={`p-2 w-40 ${
        !link && "rounded-lg border border-solid"
      } ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
