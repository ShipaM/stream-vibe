import { Logo } from "@/components/Logo"
import "./Header.scss"
import classNames from "classnames"
import { Button } from "@/components/Button"
import { BurgerButton } from "@/components/BurgerButton"
const Header = ({ url }) => {
  console.log(url)
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Movies & Shows", href: "/movies" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/subscriptions" },
  ]
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ name, href }) => (
              <li key={name} className="header__menu-item">
                <a
                  href={href}
                  className={classNames("header__menu-link", {
                    "is-active": url === href,
                  })}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button
            className="header__button"
            label="Search"
            isLabelHidden
            iconName={"Search"}
            mode="transparent"
          />
          <Button
            href="/"
            label="Notifications"
            isLabelHidden
            iconName={"Notifications"}
            mode="transparent"
          />
        </div>
        <BurgerButton className="header__burger-button" />
      </div>
    </header>
  )
}

export default Header
