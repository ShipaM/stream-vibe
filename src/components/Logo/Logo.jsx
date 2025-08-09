import "./Logo.scss"
import classNames from "classnames"
const Logo = ({ loading = "lazy", className }) => {
  const title = "Home"

  return (
    <a href="/" className={classNames(className, "logo" )} id="logo" title={title} aria-label={title}>
      <img
        src="/logo.svg"
        alt=""
        className={"logo__img"}
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}

export default Logo
