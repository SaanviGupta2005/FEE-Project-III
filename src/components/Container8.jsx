import React from 'react'
import "./Container8.css"
const Container8 = () => {
    return (
        <>
            <footer className="foo ">
                <div className="back">
                    <a href="#" className="home">HOME</a>
                    <a href="#" className="about">ABOUT</a>
                    <a href="#" className="contact">CONTACT</a>
                </div>
                <div className="viewers">
                    <p className="owners">Image rights belong to their respective owners.</p>
                </div>
                <div>
                    <textarea className="user-textbox" defaultValue={"Get discount codes in your inbox"}>
                        </textarea>
                </div>
                <button className="subscribe-btn">Subscribe</button>
                <div className="media">
                    <a href="https://facebook.com" className="facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://twitter.com" className="twitter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://pinterest.com" className="pinterest"><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </footer>
        </>
    )
}

export default Container8
