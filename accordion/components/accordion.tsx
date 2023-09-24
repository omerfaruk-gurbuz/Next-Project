"use client"
import React from 'react'
import { useState } from 'react';

type Props = {}

const accordion = (props: Props) => {
  const [expandedId, setExpandedId] = useState(null);

  const handleToggle = (id) => {
    setExpandedId((prevExpandedId) => (prevExpandedId === id ? null : id));
  };

  return (
    <div>
      <p className="flex justify-center text-3xl mt-44 font-semibold">Sıkça Sorulan Sorular</p>
      {dataArray[0].map(({ id, question, answer }) => {
        const isExpanded = expandedId === id;

       -
          <div className="mx:none md:mx-24 lg:mx-64 hover:cursor-pointer" key={id}>
            <div onClick={() => handleToggle(id)} className="card">
              <div className="ques">
                <h5>
                  {id}.{question}
                </h5>
                {((item) =>
              item === id ? (
                <div
                  className=""
                  style={{
                    ...style,
                    overflow: 'auto',
                  }}
                >
                  <div className="my-3 w-full border-2 border-white h-1"></div>
                  <p style={style}>{answer}</p>
                </div>
              ) : null
            )}
              </div>
            </div>
          </div>
      
      })}
    </div>
  )
}

export default accordion