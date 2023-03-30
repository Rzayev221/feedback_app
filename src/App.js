

import Header from "./components/Header";
import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./Data/FeedbackData";
import FeedbackItem from "./components/FeedbackItem";
import Card from "./components/shared/Card";
import React from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id)  => {
        if (window.confirm ("are you sure you want to delete?"))
        setFeedback (feedback.filter((item) => item.id !== id))
    }

 return(
    <>
    
    <Header/>
    <div className="container">
    <FeedbackForm></FeedbackForm>
    <FeedbackStats feedback = {feedback}/>
   
    <FeedbackList feedback ={feedback}
    handleDelete = {deleteFeedback}/>
    
    </div>
    </>
    )
}

export default App