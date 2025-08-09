import classNames from "classnames"
import "./Icon.scss"
import { Icon as MinistIcon } from "minista"

const Icon = ({ className, name, hasFill = false }) => {
  return (
    <span className={classNames("icon", className)}>
      <MinistIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}

export default Icon
