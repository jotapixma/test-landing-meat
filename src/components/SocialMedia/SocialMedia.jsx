import React from 'react';
import {Link} from 'react-router-dom';
import iconFb from '../../assets/facebook-icon.svg';
import iconIn from '../../assets/instagram-icon.svg';
import iconYtb from '../../assets/youtube-icon.svg';
import './SocialMedia.scss';


const SocialMedia = () => {

    return(
        <section className="rrss-section">
            <ul className="row">
                <li>
                    <Link>
                        <div className="rrss-box fb">
                            <img src={iconFb} alt="facebook"/>
                        </div>
                    </Link>
                </li>
                <li >
                    <Link>
                        <div className="rrss-box ins">
                            <img src={iconIn} alt="instagram"/>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="rrss-box ytb">
                            <img src={iconYtb} alt="twitter"/>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
      
    )

}

export default SocialMedia;