import { useNavigate } from 'react-router-dom'
import CEO from '../images/CEO.jpg'
import CTO from '../images/CTO.jpg'
import Designer from '../images/Designer.jpg'
import Marketer from '../images/Marketer.jpg'

const About = () => {
    const navigate = useNavigate()
    const styles = {
        textAlign: 'center',
        marginTop: '1rem'
    }

    return ( <div className="about">
        <div className="company-details">
            <h2>ABOUT SHOERACKS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere distinctio ipsa iusto aliquam odio necessitatibus magni cumque aspernatur error itaque quas, sapiente quasi? Soluta unde iusto commodi incidunt expedita sequi accusantium, est fugit? Vero pariatur sunt quae alias blanditiis. Autem numquam temporibus amet nesciunt ipsam. Deleniti error tempore ipsam voluptates?</p>
        </div>
        <h2>OUR LEADS</h2>
        <div className="company-status">
            <div className="people-card">
            <div className="peopleImg">
                <img src={CEO} alt="" />
            </div>
            <h3>Abdullah Abdullah</h3>
            <p>CEO, SHOERACKS</p>
            </div>

            <div className="people-card">
            <div className="peopleImg">
                <img src={CTO} alt="" />
            </div>
            <h3>Mitchelle Bryan</h3>
            <p>CTO, SHOERACKS</p>
            </div>

            <div className="people-card">
            <div className="peopleImg">
                <img src={Designer} alt="" />
            </div>
            <h3>Reels Terry</h3>
            <p>Designer</p>
            </div>

            <div className="people-card">
            <div className="peopleImg">
                <img src={Marketer} alt="" />
            </div>
            <h3>Robertson Lamlard</h3>
            <p>Marketer</p>
            </div>
        </div>
        {/* <button style={styles} onClick={() => navigate('/service')}>Check out our products</button> */}
    </div>
     );
}
 
export default About;