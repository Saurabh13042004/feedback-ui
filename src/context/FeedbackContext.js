import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit , setFeedbackEdit] = useState({
    item:{},
    edit:false
  })
  // eslint-disable-next-line no-unused-vars
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
  ]);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      console.log("App", id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };
  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }
  const updateFeedback = (id,updItem)=>{
    setFeedback(feedback.map((item)=>(item.id === id ? {...item,...updItem}:item)))
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
