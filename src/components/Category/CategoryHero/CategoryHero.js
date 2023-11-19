    
import './CategoryHero.css'

const CategoryHero = ({ category }) => {
  return (
        <div className="category-hero">
            <img src={category.image} alt="Category Hero" className="category-hero-image" />
            
            <div className="category-hero-text">

                <p>{category.description}</p>
            </div>

        </div>
  )
}

export default CategoryHero
