import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineLineChart } from 'react-icons/ai';
import { RiNotification2Fill } from 'react-icons/ri';
import '../styles/Tools.css'
function Tools() {
    return (
        <div>
            <h1 style={{textAlign:"center",marginTop:"3%"}}>The world's most popular currency tools</h1>
            <div className='boxs'>
            <div className='box'>
                <div className='icon'>
                    <FaTelegramPlane />
                </div>
                <h2 className='titleMoney'>International Money Transfer</h2>
                <p className='titleP'>Send money online fast, secure and easy.<br/> Live tracking and notifications + flexible <br/> delivery and payment options.</p>
               <div className="boxBtn">
               <button className='btns'>Send money</button>
               </div>
                
            </div>
            <div className='box'>
                <div className='icon'>
                    <AiOutlineLineChart />
                </div>
                <h2 className='titleMoney'>International Money Transfer</h2>
                <p className='titleP'>Create a chart for any currency pair in the world to see their currency history. These currency charts use live mid-market rates, are easy to use, and are very reliable.</p>
               <div className="boxBtn">
               <button className='btns'>View charts</button>
               </div>
                
            </div>
            <div className='box'>
                <div className='icon'>
                    <RiNotification2Fill />
                </div>
                <h2 className='titleMoney'>International Money Transfer</h2>
                <p className='titleP'>Need to know when a currency hits a specific rate? The Xe Rate Alerts will let you know when the rate you need is triggered on your selected currency pairs.</p>
               <div className="boxBtn">
               <button className='btns'>Create alert</button>
               </div>
                
            </div>
            </div>
        </div>

    )
}

export default Tools
