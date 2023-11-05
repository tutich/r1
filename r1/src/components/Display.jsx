import bgFront from '../components/images/bg-card-front.png';
import bgBack from '../components/images/bg-card-back.png';
import cardLogo from '../components/images/card-logo.svg';

function Display(inputValue) {
    return(
        <div className="img">
            <article className='img-container'>
                <img src={bgFront} alt={bgFront} className="front"/>
                <img src={cardLogo} alt='card' className='logo'/>
                <div className="ring"></div>
                <div className="circle"></div>
                
                <div className='content'>
                    <h2 className="numb">1234 5678 9012 3456</h2>
                    <ul className=''>
                        <li>peter Koinange</li>
                        <li>00/00</li>
                    </ul>
                </div>

            </article>

            <article>
                <img src={bgBack} alt={bgBack} className="back"/>
                <div>
                <span className='numbe'>123</span>
                </div>
            </article>
        </div>

    )
}

export default Display