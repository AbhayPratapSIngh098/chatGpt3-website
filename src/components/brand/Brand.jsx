import React from 'react';
import { google,slack, atlassian,dropbox,shopify } from './import';
import './brand.css'

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div><img src={google} alt="googgle" /></div>
      <div><img src={slack} alt="gslack" /></div>
      <div><img src={atlassian} alt="atlassiane" /></div>
      <div><img src={dropbox} alt="goodropbox"/></div>
      <div><img src={shopify} alt="gshopify" /></div>
     
    </div>
  )
}

export default Brand