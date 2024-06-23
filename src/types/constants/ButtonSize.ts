const ButtonSize = {
  SM: "sm",
  MD: "md",
  LG: "lg",
};

export type ButtonSizeType = (typeof ButtonSize)[keyof typeof ButtonSize];

export default ButtonSize;
