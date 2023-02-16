import React from "react";
import Link from "next/link";
import Tooltip from "ui/Misc/Tooltip";
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
    completed: boolean;
    url?: any;
    _id: any
  }

const displayMilestones = ()  => {
  return quarters.reduce((acc, quarter) => {
    acc[quarter.name] = [];
    return acc;
  }, {} as { [key: string]: Milestone[] });
};

const MileStoneList = ({data}:any) => {
    const milestones = [...data]
    console.log(milestones, 'ms')
    const milestonesByQuarter = displayMilestones();
    milestones.forEach(milestone => {
    const quarter = quarters.find(q => q.name === milestone.quarter.quarter);
    if (quarter) {
      milestonesByQuarter[quarter.name].push(milestone);
    }
  });

  return (
    <div className="mx-auto min-w-5xl max-w-8xl w-full items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 drop-shadow-sm	">
      {quarters.map(quarter => (
        <div key={quarter.id} className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 drop-shadow-md">
          <h2 className="text-3xl mb-5 text-center font-bold">{quarter.name}</h2>
          <ul className='relative border-l border-gray-200 dark:border-gray-500 w-full'>
            {milestonesByQuarter[quarter.name].map(milestone => (
              <div key={milestone._id}>
               <li className='mb-10 ml-6 w-full' key={milestone._id}>
          
            {milestone.completed ? (     
            <Tooltip text="Completed!">
               <span style={{ cursor: 'help' }} className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-9  bg-green-500">
             <svg aria-hidden="true" className="w-3 h-3 text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg></span>
          </Tooltip>
           ): ( 
            <Tooltip text="Pending">
           <span style={{ cursor: 'help' }} className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-9  bg-gray-400">
          <svg aria-hidden="true" className="w-3 h-3 text-gray-600 dark:text-gray-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg></span>
          </Tooltip>
          )}
         
          <div className="">    
          <h3 className='flex items-center mb-1 text-sm font-semibold text-gray-900 dark:text-white' key={milestone.title}> {milestone?.title}</h3>
          </div>
          <div className="inline">
              <p className="mb-4 mr-1 text-sm font-normal text-gray-500 dark:text-gray-300">{milestone?.description} 
              {milestone?.url &&
              <Link className="text-blue-400" href={milestone?.url}>&nbsp;View
              </Link>   }
              </p>                        
              </div> 
               </li>
              </div>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
};

export default MileStoneList;
