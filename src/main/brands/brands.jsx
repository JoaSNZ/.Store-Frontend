import '../brands/brands.css';
import zara from '../../multimedia/brands/zara.png';
import samsung from '../../multimedia/brands/samsung.png';
import oppo from '../../multimedia/brands/oppo.png';
import asus from '../../multimedia/brands/asus.png';
import hurley from '../../multimedia/brands/hurley.png';
import dng from '../../multimedia/brands/dng.png';
import {Link} from 'react-router-dom';
export default function Brands(){




    return(
        <div className="brands">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="item"><Link to='/'>
                                <img src={zara} alt="">
                                    </img>
                           </Link>
                        </div>
                        <div className="item"><Link to='/'>
                                <img src={samsung} alt="">
                                    </img>
                           </Link>
                        </div>
                        <div className="item"><Link to='/'>
                                <img src={oppo} alt="">
                                    </img>
                           </Link>
                        </div>
                        <div className="item"><Link to='/'>
                                <img src={asus} alt="">
                                    </img>
                           </Link>
                        </div>
                        <div className="item"><Link to='/'>
                                <img src={hurley} alt="">
                                    </img>
                           </Link>
                        </div>
                        <div className="item"><Link to='/'>
                                <img src={dng} alt="">
                                    </img>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
