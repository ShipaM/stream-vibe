import classNames from "classnames"
import "./Socials.scss"
import { Button } from "@/components/Button"

const Socials = ({ className, links = [] }) => {
  return (
    <div className={classNames(className, "soc1als")}>
      <ul className="soc1als__list">
        {links.map(({ iconName, label }) => (
          <li key={label} className="soc1als__item">
            <Button
              mode="black-10"
              className="soc1als__link"
              href="/"
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
              hasFillIcon
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials
