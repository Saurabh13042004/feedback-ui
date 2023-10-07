import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";
import { motion, AnimatePresence } from "framer-motion";
function FeedbackList() {
  const { feedback,isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback && feedback.length === 0)) {
    return <h3>No Feedback Yet</h3>;
  }
  return (isLoading ? <Spinner/>  :   <div className="feedback-list">
  <AnimatePresence>
    {feedback.map((item) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <FeedbackItem
          key={item.id}
          item={item}
        />
      </motion.div>
    ))}
  </AnimatePresence>
</div>
  );
}

export default FeedbackList;
