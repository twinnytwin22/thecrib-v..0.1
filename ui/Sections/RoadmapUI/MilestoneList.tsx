import React from "react";



const quarters = [
  { name: "Q1", id: 1 },
  { name: "Q2", id: 2 },
  { name: "Q3", id: 3 },
  { name: "Q4", id: 4 }
];

interface Milestone {
    title: string;
    quarter: number;
    description?: string;
    date?: Date;
  }

const displayMilestones = ()  => {
  return quarters.reduce((acc, quarter) => {
    acc[quarter.name] = [];
    return acc;
  }, {} as { [key: string]: Milestone[] });
};

const MileStoneList = ({data}:any) => {
    const milestones = [...data]
    const milestonesByQuarter = displayMilestones();
    milestones.forEach(milestone => {
    const quarter = quarters.find(q => q.name === milestone.quarter.quarter);
    if (quarter) {
      milestonesByQuarter[quarter.name].push(milestone);
    }
  });

  return (
    <div>
      {quarters.map(quarter => (
        <div key={quarter.id}>
          <h2 className="text-3xl font-bold">{quarter.name}</h2>
          <ul className='relative border-l border-gray-200 dark:border-gray-700'>
            {milestonesByQuarter[quarter.name].map(milestone => (
               <li className='mb-10 ml-6' key={milestone.title}>
               <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-red-400">
          <svg aria-hidden="true" className="w-3 h-3 text-red-800 dark:text-red-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg></span>
            <h3 className='flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white'> {milestone?.title}</h3> 
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{milestone?.description}</p>
                
               </li>
              
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MileStoneList;
