import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })



  // eslint-disable-next-line no-unused-vars
  const [feedback, setFeedback] = useState([]);

  useEffect(()=>{
    fetchFeedback();
  },[])

  const fetchFeedback = async () =>{
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);

  }

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      await fetch(`/feedback/${id}`,{method:'DELETE'})
      console.log("App", id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json();
    console.log(data);
    setFeedback([data, ...feedback]);
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'

      },
      body:JSON.stringify(updItem)
    })

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data } : item)))

    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
