import bgFront from '../components/images/bg-card-front.png';
import bgBack from '../components/images/bg-card-back.png';
import cardLogo from '../components/images/card-logo.svg';

function Display() {
    return(
        <div className="img">
            <article className='img-container'>
                <img src={bgFront} alt={bgFront} className="front"/>
                <img src={cardLogo} alt='card' className='logo'/>
                <div className='content'>
                    <h2 className="numb">1234 5678 9012 3456</h2>
                    <ul className=''>
                        <li>Peter Koinange</li>
                        <>00/00</>
                    </ul>
                </div>

            </article>
            <img src={bgBack} alt={bgBack} className="back"/>
        </div>

    )
}

export default Display