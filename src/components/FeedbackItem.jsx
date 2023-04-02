import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackList from './FeedbackList'

function  FeedbackItem({item, handleDelete}) {




  return (
    <Card >
    <div className='num-display'>{item.rating}</div>
    <button className = 'close' onClick={() => handleDelete(item.id)} >X</button>
    <div className='text-display'>{item.text}</div>
    </Card>
  ) 
}


FeedbackItem.propTypes = {item: PropTypes.object.isRequired }

export default FeedbackItem
