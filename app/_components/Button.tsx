type Props = {
  className: string;
  func: () => void;
  text: string;
};

function Button({ className, func, text }: Props) {
  return (
    <button type="button" className={className} onClick={func}>
      {text}
    </button>
  );
}

export default Button;
