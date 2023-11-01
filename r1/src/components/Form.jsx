
function Form() {
    return(
        <div className="form">
            <div className="inputs">
                <div class="inp">
                    <label htmlFor='name'>CARDHOLDER NAME</label>
                    <input type='text' placeholder='e.g. Jane Appleseed'/>
                </div>
                <div class="inp">
                    <label htmlFor='name'>CARD NUMBER</label>
                    <input type='text' placeholder='e.g. 1234 5678 9123 0000'/>
                </div>
                <div class="inp">
                    <div class="inps" >
                        <div className="year">
                            <div className="cvv" >
                                
                                    <label htmlFor='name'>EXP. DATE (MM/YY )</label>
                                <div className="mon">
                                    <input type='text' placeholder='MM' className="exp"/>
                                    <input type='text' placeholder='YY' className="exp"/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="cvv">
                            <label htmlFor='name'>cvc</label>
                            <input type='text' placeholder='e.g. 123' className="cvc"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button >Confirm</button>
            </div>
        </div>
    )
}

export default Form