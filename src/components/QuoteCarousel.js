import React from 'react';
import Slider from 'react-slick';
import _ from 'lodash';


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

export default class QuoteCarousel extends React.Component {
    render() {
    const quotes = _.get(this.props, 'pageContext.site.data.quotes.items')
    console.log(this.props)
    return (
        <section id={_.get(this.props, 'section.section_id')} className={'wrapper alt ' + _.get(this.props, 'section.section_id')}>
            <div id="quote-carousel">
                <Slider {...settings}>
                    {_.map (quotes, (quote, quote_idx) => (
                       
                        <div id={`quote-${quote_idx}`} className="panel">
                            <div className="quote">

                                <img src={`${quote.image}`} alt="image"/>
                                <div >
                                <span id={`quote-text-${quote_idx}`} className="quote-text">
                                    <span className='quote-style'>{`${quote.text}`}</span>
                                </span>
                                <span className="row-main-text">
                                    <span className="row-main-style">{`${quote.author}`}</span>
                                </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
}