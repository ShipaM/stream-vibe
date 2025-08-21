import classNames from "classnames"
import "./Section.scss"

const Section = ({
  className,
  title,
  titleId,
  children,
  description,
  actions,
  isActionsHiddenOnMobile = false,
}) => {
  return (
    <section
      aria-label={titleId}
      className={classNames(className, "section container")}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title h3" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__description">{description}</div>
          )}
        </div>
        {actions && (
          <div
            className={classNames("section__actions", {
              "is-hidden-on-mobile": isActionsHiddenOnMobile,
            })}
          >
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section
