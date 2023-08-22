import '../brands/brands.css';
import zara from '../../multimedia/brands/zara.jpg';
import samsung from '../../multimedia/brands/samsung.jpg';
import oppo from '../../multimedia/brands/oppo.jpg';
import asus from '../../multimedia/brands/asus.jpg';
import hurley from '../../multimedia/brands/hurley.jpg';
import dng from '../../multimedia/brands/dng.jpg';

export default function Brands(){




    return(
        <div class="brands">
                <div class="container">
                    <div class="wrapper flexitem">
                        <div class="item"><a href="#">
                                <img src={zara} alt="">
                                    </img>
                            </a>
                        </div>
                        <div class="item"><a href="#">
                                <img src={samsung} alt="">
                                    </img>
                            </a>
                        </div>
                        <div class="item"><a href="#">
                                <img src={oppo} alt="">
                                    </img>
                            </a>
                        </div>
                        <div class="item"><a href="#">
                                <img src={asus} alt="">
                                    </img>
                            </a>
                        </div>
                        <div class="item"><a href="#">
                                <img src={hurley} alt="">
                                    </img>
                            </a>
                        </div>
                        <div class="item"><a href="#">
                                <img src={dng} alt="">
                                    </img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
