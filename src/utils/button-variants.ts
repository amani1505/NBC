import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  // ...same definition...
);
export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
