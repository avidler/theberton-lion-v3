import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {Layout} from '../components/index';
import {safePrefix, htmlToReact} from '../utils';

const moment = require('moment')

const Accommodation = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  var startDateToSend = 0;
  var endDateToSend = 0;
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);;
    console.log("startDate: ", start)
    console.log("endDate: ", end)}
    startDateToSend = moment(startDate).format("YYYY-MM-DD")
    endDateToSend = moment(endDate).format("YYYY-MM-DD")
    console.log("startDateToSend: ", startDateToSend)
  
        
        
    
     return (
            <Layout {...props}>
            <div className="outer" id="outer">
              <div className="inner-medium">
                <article className="post post-full">
                  <header className="post-header">
                    <h1 className="post-title">Accommodation</h1>
                  </header>
                 
                  <div className="post-content">
                      
                    {htmlToReact(_.get(props, 'pageContext.html'))}
                    </div>
                    <div>
                    <DatePicker
      
      onChange={onChange}
      startDate={startDate}
      
      endDate={endDate}
      selectsRange
      inline
    />
     </div>
     
     <div class="widget">
        <form target="_blank" action="https://portal.freetobook.com/reservations">
            <input type="hidden" name="w_id" value="21663" />
            <input type="hidden" name="w_tkn" value="4hhkuL8RDdgYowsN9PYQgpO5ppq1TLGqZZMFdQbwZLFKNemSITMr1vNYkhciS" />
            <input type="hidden" id="check-in-date-to-send" name="check_in_date" value={startDateToSend}/>
            <input type="hidden" id="check-out-date-to-send" name="check_out_date" value={endDateToSend}/>
            <input type="submit" class="check-availability" value="Check Availability" />
        </form>
        Please note that clicking the button will open the bookings website in a new window. If your dates are unavailable you will be offered the chance to select some alternatives.
     </div>
                </article>
              </div>
            </div>
            </Layout>
        );
                }

export default Accommodation