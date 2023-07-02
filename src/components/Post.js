import React from 'react';
import '../style/Post.css';
import { FiHeart, FiMessageCircle } from "react-icons/fi";


const Post = () => { 
    return ( 
        <div className='Post'> 
            <div className='Post-header'> 
                <div className='Header-pfp'> 
                    <img className='pfp'
                        src='https://i.redd.it/imb5ohqzqr511.jpg'
                        alt='satelite imagery of earth'/>
                </div>
                <div className='Header-info'>
                    <div className='info'>
                        <div className='Post-text'>earth</div>
                        <div className='Post-text'> 2d</div>
                        <div className='Post-text'> Follow </div>
                    </div>
                    <div className='Header-location'> 
                        <div className='Post-text'> australia </div> 
                    </div>
                </div>
                
            </div>
            <div className='Post-body'>
                <img className='Post-image'
                src='https://earthsky.org/upl/2023/03/bioluminescence-Petr-Horalek-Feb-14-2023-Soneva-Jani-Maldives-e1678800294100.png'
                alt="beach in australia with bioluminecenst algea lighting up the waves alpping on the coas a neon blue" />
            </div>
            <div className='Post-footer'>
                <div className='Post-buttons'>
                    <FiHeart />
                    <FiMessageCircle />
                </div>
                <div className='Post-likes'>
                    <p> 1,000,000 likes</p>
                </div>
                <div className='Post-caption'>
                    <div>earth</div>
                    <div>Light show</div>
                </div>
                <div className='Post-commentPreview'>
                    <p>12,345 comments</p>
                </div>
            </div>
        </div>
    )
}

export default Post