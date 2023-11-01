import bgFront from '../components/images/bg-card-front.png';
import bgBack from '../components/images/bg-card-back.png';


function Display() {
    return(
        <div className="img">
            <img src={bgFront} alt={bgFront} className="front"/>
            <img src={bgBack} alt={bgBack} className="back"/>
        </div>

    )
}

export default Display