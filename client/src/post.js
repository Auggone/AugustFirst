export default function Post(){

const date = new Date();
const time = date.toLocaleTimeString();

    return(
        
        
<div className = "entry">
    <div className = "image"> 
        <div className = "Date">
            <p>{date.toDateString()} {time} </p>
        </div>
          <img src = "https://i.pinimg.com/736x/11/59/5a/11595a49314d5993ab1135a9a2f20024.jpg" alt = "React Logo"/>
        </div>
        <div className = "texts">
          <h2>Expectation and Ego</h2>
          <p>Hello welcome to my blog, I am going to beat the living shit out of you now!</p>
        </div>

      </div>

     
     
    )
}