'use client'
import { useState } from 'react'

const TestUserDashboard = () => {
  const [activeTab, setActiveTab] = useState('room')


  return (
    <div className='flex flex-col mx-auto items-center'>
      <nav className="inline-flex mx-auto rounded-md shadow-sm mt-10 mb-4">
        <button
 className={`px-4 py-2 text-sm font-medium text-white bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 ${activeTab === 'room' ? 'bg-gray-400 text-white' : 'bg-gray-600'}`}          
 onClick={() => setActiveTab('room')}
        >
          My Room
        </button>
        <button
        className={`px-4 py-2 text-sm font-medium text-white bg-white border border-gray-200  hover:bg-gray-100 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 ${activeTab === 'items' ? 'bg-gray-400 text-white' : 'bg-gray-600'}`}          
        onClick={() => setActiveTab('items')}
        >
          Inventory
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium text-white bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 focus:z-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 ${activeTab === 'settings' ? 'bg-gray-400 text-white' : 'bg-gray-600'}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </nav>
      <div className="w-screen p-6">
        {activeTab === 'room' && <AccountInfo />}
        {activeTab === 'items' && <Items />}
        {activeTab === 'settings' && <Settings />}
      </div>
    </div>
  )
}

const AccountInfo = () => {
  return (
    <div className='w-full max-w-7xl mx-auto h-[90vh] bg-gray-200 dark:bg-gray-600 rounded-2xl mb-4'>
     ACCOUNT INFO
   </div>)
   }

const Items = () => {
  return (
    <div className='w-full max-w-7xl mx-auto h-[90vh] bg-gray-200 dark:bg-gray-600 rounded-2xl mb-4'>
ITEMS
</div>)
}

const Settings = () => {
  return (
    <div className='w-full max-w-7xl mx-auto h-[90vh] bg-gray-200 dark:bg-gray-600 rounded-2xl mb-4'>
BIATCH</div>)
}

export default TestUserDashboard