import { Link } from "react-router-dom";

export default function Cover1 (){

    

    const date = new Date();
    const time = date.toLocaleTimeString();

    return (

    <div className = "cover">
        <div className = "image">
            <Link to = "/article" >
                <img className = "coverImage" src = "/Images/coverImage1.jpg" alt = "Front Image"/>
            
            <div className="black-bar"></div>

            <div className = "covertitle">
                Goodbyes and Good Riddance
            </div>
            
            </Link>
        </div>

 <Link to = "/article" >
<div className = "subtitle">
                
                Sure, maybe you can't change the past, but you can most definitely decide the future.  <br/>
                {date.toDateString()} {time} 
                
            </div>
</Link>
    </div>

    
    )

}