
import {Link} from "react-router-dom"

export default function NavigationBar () {
    return (
        <div className="navigation">
        <nav >
            <ul>
                
               <li> <Link to="/"> Home </Link></li>
               <li> <Link to="/articles"> Articles </Link> </li>
               <li> <Link to="/topics">Topics</Link> </li>
                
                        
                   
            </ul>
        </nav>
        </div>
        
    )
}