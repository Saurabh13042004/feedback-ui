import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
<<<<<<< HEAD
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
=======
  const [feedbackEdit , setFeedbackEdit] = useState({
    item:{},
    edit:false
>>>>>>> e311aec72fafde432d287d1a507febd2f7c07ddb
  })
  // eslint-disable-next-line no-unused-vars
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
<<<<<<< HEAD
      rating: 10
=======
      rating: 10,
>>>>>>> e311aec72fafde432d287d1a507febd2f7c07ddb
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
<<<<<<< HEAD
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)))
=======
  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }
  const updateFeedback = (id,updItem)=>{
    setFeedback(feedback.map((item)=>(item.id === id ? {...item,...updItem}:item)))
>>>>>>> e311aec72fafde432d287d1a507febd2f7c07ddb
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
<<<<<<< HEAD
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
=======
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
>>>>>>> e311aec72fafde432d287d1a507febd2f7c07ddb
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
