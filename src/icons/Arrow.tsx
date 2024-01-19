interface ArrowProps {
  variant: "large" | "medium" | "small";
  stroke: string;
  className: string;
}

const Arrow = ({ variant, stroke, className }: ArrowProps) => {
  return (
    <>
      {variant === "small" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          className={className}
        >
          <path d="M8.00001 14.433L8.00001 1L8.00001 14.433Z" fill="#2A2C32" />
          <path
            d="M1.24265 8.96057L8.00001 16L14.7574 8.96057M8.00001 14.433L8.00001 1"
            stroke={stroke}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default Arrow;
