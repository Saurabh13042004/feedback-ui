/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from 'react';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  deleteDoc,
  updateDoc,
  getDocs,
  doc,
} from 'firebase/firestore';
import { auth } from '../firebase'; // Import your Firebase configuration
import { onAuthStateChanged } from 'firebase/auth';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  const [feedback, setFeedback] = useState([]);

  const firestore = getFirestore(); // Initialize Firestore

  // Function to fetch feedback data associated with the current user
  const fetchUserFeedback = async () => {
    const user = auth.currentUser;
    if (user) {
      const userUid = user.uid;
      console.log('User UID:', userUid);

      const userFeedbackCollection = collection(firestore, 'feedback');
      const userFeedbackQuery = query(
        userFeedbackCollection,
        where('userId', '==', userUid)
      );
      console.log('Query:', userFeedbackQuery);

      try {
        const userFeedbackSnapshot = await getDocs(userFeedbackQuery);
        const userFeedbackData = userFeedbackSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log('Fetched Feedback Data:', userFeedbackData);

        setFeedback(userFeedbackData);
        setIsLoading(false);
      } catch (error) {
        console.log('Error in fetching user-specific feedback data', error);
        setIsLoading(false);
      }
    }
  };

  // Fetch feedback data on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        console.log('User is signed in:', user);
        fetchUserFeedback(); // Fetch user-specific feedback when signed in.
      } else {
        // User is signed out.
        console.log('User is signed out');
        setFeedback([]); // Clear feedback when signed out.
        setIsLoading(false);
      }
    });
  
    return unsubscribe; // Unsubscribe when the component unmounts.
  }, []);
  
  

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      try {
        await deleteDoc(doc(firestore, 'feedback', id));
        setFeedback(feedback.filter((item) => item.id !== id));
      } catch (error) {
        console.log('Error in deleting feedback', error);
      }
    }
  };

  const addFeedback = async (newFeedback) => {
    const user = auth.currentUser;
    if (user) {
      const userUid = user.uid;

      try {
        const userFeedbackRef = collection(firestore, 'feedback');
        const docRef = await addDoc(userFeedbackRef, {
          ...newFeedback,
          userId: userUid,
        });

        const addedFeedback = { id: docRef.id, ...newFeedback };
        setFeedback([addedFeedback, ...feedback]);
      } catch (error) {
        console.log('Error in adding feedback', error);
      }
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    try {
      await updateDoc(doc(firestore, 'feedback', id), updItem);
      setFeedback(feedback.map((item) => (item.id === id ? updItem : item)));
      setFeedbackEdit({
        item: {},
        edit: false,
      });
    } catch (error) {
      console.log('Error in updating feedback', error);
    }
  };

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
