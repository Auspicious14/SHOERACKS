import { useState } from "react";

const HeroRight = () => {
    const [name, setName] = useState('for our best life')
    const [heroDescription, setHeroDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at quaerat provident doloribus repudiandae dolore voluptate sit autem dolor cumque atque reiciendis ea, quam minima!')

    const heroMoreButton = () => {
        console.log('button clicked...')
    }


    return ( 
        <div className="hero-right">
            <h1>We play <br /> {name}</h1>
            <div className="hero-description">
                <p>{heroDescription}</p>
            </div>
            <button onClick={heroMoreButton}>More</button>
        </div>
     );
}
 
export default HeroRight;