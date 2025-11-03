import Image from 'next/image'
import { cva, type VariantProps } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import styles from './Button.module.scss'

const buttonVariants = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      google: styles.google,
      microsoft: styles.microsoft,
      instructor: styles.instructor,
      cart: styles.cart,
      icon: styles.icon,
    },
  },
  defaultVariants: { variant: 'primary' },
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label?: string
    iconSrc?: string
    cartBadge?: string | number
  }

export function Button({
  variant,
  label,
  iconSrc,
  cartBadge,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = twMerge(buttonVariants({ variant }), styles.interactions, className)

  return (
    <button type={type} className={classes} aria-label={label ?? variant ?? undefined} {...props}>
      {iconSrc && (
        <Image
          src={iconSrc}
          alt=""
          width={20}
          height={20}
          aria-hidden="true"
        />
      )}

      {label && <span>{label}</span>}

      {variant === 'cart' && cartBadge != null && (
        <span
          className="ml-[2px] flex h-[21px] w-[21px] items-center justify-center
                     rounded-full bg-trueGray-800 text-xs font-medium text-brandWhite"
          aria-hidden="true"
        >
          {cartBadge}
        </span>
      )}
    </button>
  )
}
