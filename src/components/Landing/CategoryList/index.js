
import Category from "../Category"
import "./index.css"
const CategoryList = () => {

    const caterogies = [
        {
            id: 1,
            imgURL: "assets/images/category-book.svg",
            name: "Tài liệu",
            description: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id."
        },
        {
            id: 2,
            imgURL: "assets/images/category-gear.svg",
            name: "Dụng cụ học tập",
            description: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id."
        },
        {
            id: 3,
            imgURL: "assets/images/category-other.svg",
            name: "Khác",
            description: "Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id."
        }
    ]

    return (
        <section id="categories" className="values">
            <div className="container" data-aos="fade-up">
                <header className="section-header text-center">
                    <h2>Danh mục nổi bật</h2>
                    <p>Các danh mục nổi bật</p>
                </header>
                <div className="row">
                    {
                        caterogies.map(item => (
                            <Category key={item.id} category={item}/>
                        ))
                    }
                    
                </div>


            </div>
        </section>
    )
}

export default CategoryList