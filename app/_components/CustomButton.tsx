type Props = {
  func: () => void;
  text?: string;
  isSmall?: boolean;
  page?: number;
  icon?: string;
  className: string;
  disabled?: boolean;
};

function CustomButton({
  func,
  text,
  isSmall,
  page,
  icon,
  className,
  disabled,
}: Props) {
  if (isSmall) {
    return (
      <button
        className={className}
        key={page}
        disabled={disabled}
        onClick={func}
      >
        {page}
      </button>
    );
  }

  return (
    <button className={className} onClick={func}>
      <p>{text}</p>
      <img src={icon} alt="arrow icon" />
    </button>
  );
}

export default CustomButton;
