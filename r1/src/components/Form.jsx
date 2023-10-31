
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
                    <div class="inps">
                        <div class="">
                            <label htmlFor='name'>EXP. DATE (MM/YY )</label>
                            <input type='text' placeholder='MM'/>
                        </div>
                        <div class=""><input type='text' placeholder='YY'/></div>
                        <div class="">
                            <label htmlFor='name'>cvc</label>
                            <input type='text' placeholder='e.g. 123'/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button>Confirm</button>
            </div>
        </div>
    )
}

export default Form