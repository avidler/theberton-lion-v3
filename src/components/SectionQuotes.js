import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import _ from 'lodash';


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SectionQuotes = (props) => {
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        fade: true
    }

    const [currentSlide, setCurrentSlide] = useState(1);
 
    let section = _.get(props, 'section');
    console.log("quotes section: ",section)
    

    const imageClick = (e, index) => {
        console.log(index);
        const selection = document.querySelectorAll('div[aria-hidden="false"]')

    console.log("visible selection: ",selection[0].getAttribute('data-index'))
    const selectionIndex = selection[0].getAttribute('data-index')
    const newUrl = section.quote[selectionIndex].url
    console.log("new url: ", newUrl)
    window.location.href = newUrl
      } 

    useEffect(() => {
        
  
    },[]);
    return (
        <section id={_.get(section, 'section_id')} className={'wrapper alt ' + _.get(section, 'section_id')}>
        <div id="quote-carousel">
            <Slider {...settings}>
                {_.map (section.quote, (quote, quote_idx) => {
                   console.log("full quote: ",quote)
                   return(
                        
                            <div id={`quote-${quote_idx}`} className="panel" onClick={(e) => imageClick(e, quote_idx)}>
                                <div className="quote">
                                    <img src={`${quote.image}`} className={`${quote.url}`} value={`${quote.url}`} alt="background" onClick={(e) => imageClick(e, quote_idx)} />
                                    <div >
                                        <span id={`quote-text-${quote_idx}`} className="quote-text" onClick={(e) => imageClick(e, quote_idx)}>
                                            <span className='quote-style'>{`${quote.text}`}</span>
                                        </span>
                                        <span className="row-main-text" onClick={(e) => imageClick(e, quote_idx)}>
                                            <span className="row-main-style">{`${quote.author}`}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        
                        )
                })}
            </Slider>
        </div>
    </section>
    )
}


export default SectionQuotes 