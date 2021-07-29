import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png" />
                <div className="home_row">
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses by Ries, Eric (October 6, 2011) Paperback Paperback – 1 Jan. 1700"
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
                        rating={5} />
                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for 
                    Baking, Stylish Kitchen Mixer with 
                    K-beater, Dough Hook and Whisk, 5 Litre
                    Glass Bowl"
                        price={239.99}
                        image="https://m.media-amazon.com/images/I/61FJtVQh9bL._AC_SX425_.jpg"
                        rating={4} />
                </div>

                <div className="home_row">
                    <Product
                        id="4903850"
                        title="novasmart - runR II Fitness Tracker, Activity Tracker, 
                        Smart Band with Colour Display, Heart Rate and Blood Pressure Measurements, 
                        Sleep Monitor, Calorie Counter, Step Counter - Black/Red"
                        price={16.99}
                        image="https://m.media-amazon.com/images/I/41yachoc0KL._AC_.jpg"
                        rating={4} />

                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | 
                        Smart speaker with Alexa, Charcoal
                        Fabric"
                        price={98.99}
                        image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg"
                        rating={5} />

                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch,
                            Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://m.media-amazon.com/images/I/81raq99wqRS._AC_SX679_.jpg"
                        rating={4} />
                </div>

                <div className="home_row">
                    <Product
                        id="4903850"
                        title="Philips 439P9H - 43 inch Superwide Curved LED Monitor,
                         100Hz, 4ms, VA, Webcam, Speakers, KVM switch, USB-C Docking, 
                         Height Adjust (3840 x 1200 - 450 cd/m² , HDMI/DP/USB-C)"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/71AZOtIUc3L._AC_SL1500_.jpg"
                        rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home
