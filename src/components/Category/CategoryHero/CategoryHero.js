import CategorySearch from "../CategorySearch/CategorySearch"
import "./CategoryHero.css"

const CategoryHero = ({category}) => {
    return (
        <div className="category-hero">
            <img  src="/assets/images/book-hero.jpg" alt="Category Hero" className="category-hero-image" />
            <div className="category-hero-search">
                <CategorySearch />
            </div>
            <div className="category-hero-text">
                
                <h1>{category.name}</h1>
                <p>{category.description}</p>
            </div> 
        </div>
    )
}

export default CategoryHero
