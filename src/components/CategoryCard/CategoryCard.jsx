import { Image } from "minista"
import { Icon } from "@/components/Icon"
import "./CategoryCard.scss"

const CategoryCard = ({ title, images = [] }) => {
  return (
    <a href="/movies" className="category-card">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image className="category-card__image" src={imgSrc} key={index} />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">{title}</h3>
        <Icon className="category-card__icon" name="ArrowRight" />
      </div>
    </a>
  )
}

export default CategoryCard
