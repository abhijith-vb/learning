import React from 'react'
import "../css/main.css"
import phone from "../images/3.jpg"
import icon from "../images/plusicon.png"


const Mobile = () => {
  return (
    
    <div className='full-container'>
        <div className='heading-one'>
            <h1>Wait!!⏳Frequently Bought Together</h1>
        </div>
        <div className='popular-banner'>
            <h3>Most Popular</h3>
        </div>
        <div className='row'>
            <div className="image_section">
                <img src={phone} className='images' alt ="images"></img>
            </div>
            <div className='plus-icon-div'><img src={icon} alt="plusicon" className="plus-icon"></img></div>
            
           
            <div className="image_section">
                <img src={phone} className='images' alt ="images"></img>
            </div>
            <div className='plus-icon-div'><img src={icon} alt="plusicon" className='plus-icon'></img></div>
            <div className="image_section">
                <img src={phone} className='images' alt ="images"></img>
            </div>

        </div>
        <div>
            <form>
                <div className='first-checkbox'>
                    <label className='primary-label'>
                        <input className='primary-checkbox' type="checkbox"></input>
                        <b className='this-item'>This Item:</b>Samsung Galaxy M12(BLUE,4GB RAM,64GB Storage)6000mAh|This is a long title<br></br><p className='treat'> treat like this...  <b className='dollar'>$199.99</b></p>
                    </label>    
                </div>  
                    <label className='first-label'>
                        <input className='secondary-checkbox' type="checkbox"></input>
                        MAXISTRONG Screen Protector for Samsung Galaxy M12
                    </label>
                        <select  className='select-class'><option>Blue|12</option>
                        </select>
                        <input type="button" value="-" className='minus '>
                        </input>
                        <input type="text" step="1" min="1" max="" name="quantity" value="1"  className='input-text qty text' >
                        </input>
                        <input type="button" value="+" className='plus'>
                        </input>
                        <p className='new-price'><b>$19.99</b></p>
                        <p className='old-price'><b>$29.99</b></p>
                    
                    <label className='second-label'>
                        <br></br> <input className='last-checkbox' type="checkbox"></input>
                        HACASTER Hard Case for Samsung Galaxy M12
                    </label>
                        <p className='new-price-two'><b>$9.99</b></p>    
            </form>
        </div>
        <div className='line-part'>

        </div>
        <div className='down'>
            <p className='down-total-price'>Total Price:</p>
            <p className='down-total'><b>$129.99</b></p>
            <p className='down-total-saved'><b>You Saved $99</b></p>
        </div>
        <div className='buttons'>
            <div className='no-thanks'><button className='no-thanks-button'>No,Thanks</button></div>
            <div className='add-to-cart'><button className='add-to-cart-button'>Add To Cart</button></div>
        </div>
    </div>
  )
}

export default Mobile