import classNames from "classnames"
import "./Button.scss"
import { Icon } from "@/components/Icon"
const Button = ({
  href,
  type = "button",
  target,
  className,
  label,
  isLabelHidden = false,
  iconName,
  iconPosition = "before",
  // "" (default) | "transparent" | "black-10"
  mode = "",
  hasFillIcon,
}) => {
  const isLink = href !== undefined

  const Component = isLink ? "a" : "button"

  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      aria-label={title}
      title={title}
      className={classNames(className, "button", {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}

export default Button
