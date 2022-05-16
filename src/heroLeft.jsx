import nikeAir from '../images/nikeAir.png'
import nike2 from '../images/nike2.png'
import nike3 from '../images/nike3.png'
import nike7 from '../images/nike7.png'
import nike8 from '../images/nike8.png'
import { useEffect, useState } from 'react'

const HeroLeft = () => {
    const [nikes, setNikes] = useState(nikeAir)
    // const style = {
    //     transform: 'translateX(-10%)',
    //     transition: '2s ease-in-out',
    //     animationIterationCount: 'infinite'
    // }
    
    useEffect( () => {
        const nikeAirs = [nike2, nike3, nike7, nike8, nikeAir]
        const interval = setInterval(() => {
            const randomNikes = Math.floor(Math.random(nikeAirs) * nikeAirs.length + 1)
            setNikes(nikeAirs[randomNikes])
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return ( 
        <div className="hero-left">
            <div  className="hero-left-img">
                <img src={nikes} alt="" />
            </div>
        </div>
     );
}
 
export default HeroLeft;