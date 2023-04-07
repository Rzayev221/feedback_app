import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item 1 is from context", rating: 3 },
    { id: 2, text: "This item 2 is from context", rating: 5 },
    { id: 3, text: "This item 3 is from context", rating: 7 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
  //add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  //delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("are you sure you want to delete?"))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  //update feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  //Set item to be updated

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
