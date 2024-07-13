import './homepage.scss'
import WelcomeBox from '../../components/welcomebox/WelcomeBox'
import GigList from '../../components/giglist/GigList'
import CardList from '../../components/cardlist/CardList'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


function HomePage() {
    const currentUser = useContext(AuthContext);
    console.log(currentUser);
    return (
        <div className="homepage">
            <div className="welcome">
                <WelcomeBox />
            </div>
            <div className="recommend">
                <span>
                    Posts you may like
                </span>
                <div className="gigs-Recommend">
                    
                    <GigList /> 
                    
                </div>
            </div>

            <div className="allCard">
                <CardList />
            </div>
            
        </div>
    )
}

export default HomePage