"use client"
import React, { useState } from 'react';
import data from '../src/app/helper/FAQsdata';
import { arrowdown, arrowup } from '../src/app/helper/icons';

const FAQs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <div class="">
      <p class="flex  justify-center text-5xl mt-44 text-white font-semibold">FAQs</p>
      {data.map(({ id, question, answer }) => (
        <div class="w-full" key={id}>
          {expandedId === id ? (
            <div className="card">
              <div className="ques-answer">
                <h5>
                  {id}.{question}
                </h5>
                <button onClick={() => handleToggle(id)}>{arrowup}</button>
              </div>
              <p>{answer}</p>
            </div>
          ) : (
            <div className="card">
              <div className="ques">
                <h5>
                  {id}.{question}
                </h5>
                <button className="faqsbutton" onClick={() => handleToggle(id)}>
                  {arrowdown}
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
