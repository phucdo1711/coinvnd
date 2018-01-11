import React from 'react'
import PropTypes from 'prop-types'
import classes from './Invest.scss'
import InvestCard from '../InvestCard'

export const Invest = ({ listInvest }) => {
  return (
    <div className={classes.container}>
      {listInvest.map((item, index) => (
        item.TrangThai === "active" && 
          <InvestCard invest={item} key={index} />
      
      ))}
    </div>
  )
}

Invest.defaultProps = {
  listInvest: []
}

Invest.propTypes = {
  listInvest: PropTypes.array 
}

export default Invest
