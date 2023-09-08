import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
function FeedbackList({ feedback }) {
    if (!feedback.length) {
        return <h3>No Feedback Yet</h3>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem
                    key={item.id}
                    item = {item}
                />
            ))}
        </div>
    )
}


FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })

    ).isRequired
    
}

export default FeedbackList