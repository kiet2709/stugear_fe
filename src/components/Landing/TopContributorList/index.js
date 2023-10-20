import TopContributor from "../TopContributor"
import "./index.css"
const TopContributorList = () => {

    const contributors = [
        {
            id: 1,
            imgURL: "assets/images/contributor.jpg",
            username: "Khải",
            phoneNumber: "0783516718",
            bio: "Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia."
        },
        {
            id: 2,
            imgURL: "assets/images/contributor.jpg",
            username: "Kiệt",
            phoneNumber: "0783516718",
            bio: "Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia."
        
        },
        {
            id: 3,
            imgURL: "assets/images/contributor.jpg",
            username: "Khang",
            phoneNumber: "0783516718",
            bio: "Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia."
        
        },
        {
            id: 4,
            imgURL: "assets/images/contributor.jpg",
            username: "Thịnh",
            phoneNumber: "0783516718",
            bio: "Rerum voluptate non adipisci animi distinctio et deserunt amet voluptas. Quia aut aliquid doloremque ut possimus ipsum officia."
        
        }    
        
        
        
    ]
    return (
        <section id="team" className="team mt-5">
            <div className="container" data-aos="fade-up">
                <header className="section-header text-center">
                    <h2>Người dùng uy tín</h2>
                    <p>Những người dùng có độ uy tín cao </p>
                </header>
                <div className="row mt-5 gy-4">
                    {
                        contributors.map(user => (
                            <TopContributor contributor={user}/>
                        ))
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default TopContributorList