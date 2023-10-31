
function Form() {
    return(
        <div class="form">
            <div>
                <label htmlFor='name'>CARDHOLDER NAME</label>
                <input type='text' placeholder='e.g. Jane Appleseed'/>
                <label htmlFor='name'>CARD NUMBER</label>
                <input type='text' placeholder='e.g. 1234 5678 9123 0000'/>
                <label htmlFor='name'>EXP. DATE (MM/YY )</label>
                <input type='text' placeholder='MM'/>
                <input type='text' placeholder='YY'/>
                <label htmlFor='name'>cvc</label>
                <input type='text' placeholder='e.g. 123'/>
            </div>
            <div>
                <button>Confirm</button>
            </div>
        </div>
    )
}

export default Form