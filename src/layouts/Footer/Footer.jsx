import { Socials } from "@/components/Socials"
import "./Footer.scss"

const Footer = () => {
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "Pricing", "FAQ"],
      href: "/",
    },
    {
      title: "Movies",
      links: ["Genres", "Trending", "New Release", "Popular"],
      href: "/movies",
    },
    {
      title: "Shows",
      links: ["Genres", "Trending", "New Release", "Popular"],
      href: "/shows",
    },
    { title: "Support", links: ["Contact Us"], href: "/support" },
    {
      title: "Subscription",
      links: ["Plans", "Features"],
      href: "/subscriptions",
    },
    {
      title: "Connect With Us",
      socialLinks: [
        { label: "Facebook", iconName: "Facebook" },
        { label: "Twitter", iconName: "Twitter" },
        { label: "LinkedIn", iconName: "Linked-in" },
      ],
      href: "/",
    },
  ]

  const extraLinks = ["Terms of Use", "Privacy Policy", "Cookie Policy"]

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          {menuItems.map(({ title, links, socialLinks, href }) => (
            <div className="footer__menu-column" key={title}>
              <a className="footer__menu-title h6" href={href}>
                {title}
              </a>
              {links?.length > 0 && (
                <ul className="footer__menu-list">
                  {links.map((link) => (
                    <li className="footer__menu-item" key={link}>
                      <a className="footer__menu-link" href="/">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {socialLinks?.length > 0 && (
                <Socials links={socialLinks} className="footer__soc1als" />
              )}
            </div>
          ))}
        </nav>
        <div className="footer__extra">
          <p className="footer__extra-text">
            &copy; <time dateTime="2025">2025</time>Stream Vibe. All Rights
            Reserved.
          </p>
          <div className="footer__extra-links">
            {extraLinks.map((link) => (
              <a className="footer__extra-link" key={link} href="/">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
