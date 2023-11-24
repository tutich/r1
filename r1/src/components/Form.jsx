import { name } from 'tar/lib/types';
import complete from '../components/images/icon-complete.svg';

function Form({handleConfirmClick, isHidden, setIsHidden, inputValue, setInputValue, error, handleInputChange,setNumber, number,  handleInputChange1, handleInputChange2, name}) {
    return(
        <div className="form">
            {!isHidden &&<><div className="inputs">
                <div class="inp">
                    <label htmlFor='name'>CARDHOLDER NAME</label>
                    <input name="cardholder" type='text' placeholder='e.g. Jane Appleseed' value={name} onChange={handleInputChange} onInput={handleInputChange1}/>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <div class="inp">
                    <label htmlFor='name'>CARD NUMBER</label>
                    <input name='cardholder' type='text' placeholder='e.g. 1234 5678 9123 0000' value={number
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setNumber(e.target.value)}  onInput={handleInputChange2} />
                    {error && <p style={{ color: 'red' }}>Wrong format, numbers only</p>}
                </div>
                <div class="inp">
                    <div class="inps">
                        <div className="year">
                            <div className="cvv">

                                <label htmlFor='name'>EXP. DATE (MM/YY )</label>
                                <div className="mon">
                                    <input type='text' placeholder='MM' className="exp" />
                                    <input type='text' placeholder='YY' className="exp" />
                                </div>
                            </div>

                        </div>
                        <div className="cvt">
                            <label htmlFor='name'>cvc</label>
                            <input type='text' placeholder='e.g. 123' className="cvc" />
                        </div>
                    </div>
                </div>
            </div>
                <div className="btn">
                    <button onClick={handleConfirmClick}>Confirm</button>
                    {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                </div></>}

          {isHidden ? (<div className="feedback">
            <img src={complete} alt='icon'/>
            <h3>THANK YOU!</h3>
            <p className="para">we've added your card details</p>
            <div>
                <button onClick={() => setIsHidden(false)}>Continue</button>
            </div>
          </div>) : null}

        </div>
    )
}

export default Form