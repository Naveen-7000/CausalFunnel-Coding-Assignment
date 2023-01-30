import React from 'react';
import "../component/Css/footer.css"
import SVGBulb from './SVG/SVGBulb';
import SVGGithub from "./SVG/SVGGithub"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sub-footer'>
         <SVGBulb />
         <strong>ProTip! </strong> Notify someone on an issue with a mention like: @Naveen-7000.
        </div>
        <div className="end-footer">
           <div>
               <a href="">Terms</a>
           </div>
           <div>
               <a href="">Privacy</a>
           </div>
           <div>
               <a href="">Security</a>
           </div>
           <div>
               <a href="">Status</a>
           </div>
           <div>
               <a href="">Docs</a>
           </div>
           <div>
            <SVGGithub />
           </div>
           <div>
               <a href="">Contact Github</a>
           </div>
           <div>
               <a href="">Pricing</a>
           </div>
           <div>
               <a href="">API</a>
           </div>
           <div>
               <a href="">Training</a>
           </div>
           <div>
               <a href="">Blog</a>
           </div>
           <div>
               <a href="">About</a>
           </div>
        </div>
        <div className="end-footer-mobile">
            <div className='mobile-footer'>
            <div className='item'>
               <a href="">Terms</a>
           </div>
           <div className='item'>
               <a href="">Privacy</a>
           </div>
           <div className='item'>
               <a href="">Security</a>
           </div>
           <div className='item'>
               <a href="">Status</a>
           </div>
           <div className='item'>
               <a href="">Docs</a>
           </div>
           <div className='item'>
               <a href="">Contact Github</a>
           </div>
           <div className='item'>
               <a href="">Pricing</a>
           </div>
           <div className='item'>
               <a href="">API</a>
           </div>
           <div className='item'>
               <a href="">Training</a>
           </div>
           <div className='item'>
               <a href="">Blog</a>
           </div>
           <div className='item'>
               <a href="">About</a>
           </div>
           <div>
            <SVGGithub />
           </div>
            </div>
        </div>

    </div>
  )
}

export default Footer