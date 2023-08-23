import '../brands/brands.css';
import zara from '../../multimedia/brands/zara.png';
import samsung from '../../multimedia/brands/samsung.png';
import oppo from '../../multimedia/brands/oppo.png';
import asus from '../../multimedia/brands/asus.png';
import hurley from '../../multimedia/brands/hurley.png';
import dng from '../../multimedia/brands/dng.png';

export default function Brands(){




    return(
        <div className="brands">
                <div className="container">
                    <div className="wrapper flexitem">
                        <div className="item"><a href="#">
                                <img src={zara} alt="">
                                    </img>
                            </a>
                        </div>
                        <div className="item"><a href="#">
                                <img src={samsung} alt="">
                                    </img>
                            </a>
                        </div>
                        <div className="item"><a href="#">
                                <img src={oppo} alt="">
                                    </img>
                            </a>
                        </div>
                        <div className="item"><a href="#">
                                <img src={asus} alt="">
                                    </img>
                            </a>
                        </div>
                        <div className="item"><a href="#">
                                <img src={hurley} alt="">
                                    </img>
                            </a>
                        </div>
                        <div className="item"><a href="#">
                                <img src={dng} alt="">
                                    </img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
