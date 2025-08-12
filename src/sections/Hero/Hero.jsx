import "./Hero.scss"

import { Button } from "@/components/Button"

const Hero = () => {
  const playButtonTitle = "Play Video"
  const titleId = "hero-title"

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            title={playButtonTitle}
            aria-label={playButtonTitle}
          >
            <img src="/play.svg" alt="" width={470} height={470} />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
          <h1 id={titleId} className="hero__title">
            The best movies and shows
          </h1>
          <div className="hero__description">
            <p>
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
          </div>
          <Button
            className="hero__button"
            label="Start watching Now"
            hasFillIcon
            iconName="play"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
