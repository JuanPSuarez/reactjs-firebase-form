import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

const AnswersPage = () => {
      const [answers, setAnswers] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const answersRef = ref(db, 'userAnswersForm');
    onValue(answersRef, (snapshot) => {
      setAnswers(snapshot.val());
    });
  }, []);
    const answerElements = answers ? Object.keys(answers).map((key) => {
    const answer = answers[key];
    return(
      <div key={key}>
        <p>User: {key}</p>
        <p>Full Name: {answer.full_name}</p>
        <p>Email: {answer.email}</p>
        <p>Date of Birth: {answer.date_of_birth}</p>
        <p>Country: {answer.country}</p>
        <p>Terms of Service: {answer.terms_of_service}</p>
      </div>
    );
  }) : <p>Nothing to see here...</p>
  return (
    <>
    <div className='answers-page'>
      {answerElements}
      
    </div>
    </>
  );
}

export default AnswersPage;