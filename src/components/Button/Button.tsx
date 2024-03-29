'use client'

import { ButtonProps } from "@/types";


export default function CustomButton(props: ButtonProps) {
  const { variant, color, size, width, children, onClick } = props;
  const tailwindClasses = `
  h-[45px]
  px-3
  py-5
  rounded-full
  leading-4
  tracking-tighter
  shadow-lg
  flex
  items-center
  justify-center
  gap-3
  text-base
  md:text-lg
  text-[var(--ctaText)]
  ${variant === 'contained' ? `bg-[var(--cta)]` : 'bg-transparent'}
  ${variant === 'outlined' ? `border border-[var(--primary)] text-[var(--primary)]` : 'border-none'} hover:border border-[var(--cta)]'
`;
  return <button
    color={color}
    onClick={onClick}
    className={tailwindClasses}
    style={width ? { width: width } : { width: '200px' }}
  >
    {children}
  </button>;
}


