import React from 'react'
import "./dashboard.css"
import {ArrowDownward} from "@mui/icons-material"

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='featureItem'>
          <span className='featureTitle'>
            Revenue
          </span>
          <div className='featureMoneyContainer'>
            <span className='featureMoney'>&#8358;500,000</span>
            <span className='featureMoneyRate'>-11.4 <ArrowDownward/>
            </span>
          </div>
          <span className='featureSub'>Compared to last Month</span>
        </div>
        <div className='featureItem'>
          <span className='featureTitle'>
            Revenue
          </span>
          <div className='featureMoneyContainer'>
            <span className='featureMoney'>&#8358;500,000</span>
            <span className='featureMoneyRate'>-11.4 <ArrowDownward/>
            </span>
          </div>
          <span className='featureSub'>Compared to last Month</span>
        </div>
        <div className='featureItem'>
          <span className='featureTitle'>
            Revenue
          </span>
          <div className='featureMoneyContainer'>
            <span className='featureMoney'>&#8358;500,000</span>
            <span className='featureMoneyRate'>-11.4 <ArrowDownward/>
            </span>
          </div>
          <span className='featureSub'>Compared to last Month</span>
        </div>
    </div>
  )
}

export default Dashboard 