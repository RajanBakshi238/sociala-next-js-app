const ButtonSize = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type ButtonSizeType = (typeof ButtonSize)[keyof typeof ButtonSize];

export default ButtonSize;
