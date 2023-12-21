import React from 'react'

function TrendContainer({category,heading,postCounts}) {
  return (
      <div className="Trend-Container">
            <div>
              <span className="top-span">{category}</span>
              <span className="threeDots">•••</span>
              <h4>{heading}</h4>
              <span className="bottom-span">{postCounts}</span>
            </div>
    </div>
  )
}

export default TrendContainer
