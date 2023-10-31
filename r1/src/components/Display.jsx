import bgFront from '../components/images/bg-card-front.png';
import bgBack from '../components//images/bg-card-back.png';

function Display() {
    return(
        <div className="img">
            <img src={bgFront} alt={bgFront}/>
            <img src={bgBack} alt={bgBack}/>
        </div>

    )
}

export default Display