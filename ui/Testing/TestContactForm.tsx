'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/send-email', formData)
      setStatus('success') 
      if (res) {
      toast("Your message was sent succesffully")}
      setFormData({ email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      toast('Error sending email. Please try again later.')
     
    }
  }

  return (
    
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form onSubmit={handleSubmit} className="w-full">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
         <input className='shadow-sm bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
      <br />
      <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input className='shadow-sm bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required'
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
    </div>
      <br />
      <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea className='shadow-sm bg-gray-50 border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required'
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <br />
      <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      {status === 'success' && <p>Email sent!</p>}
      {status === 'error' && <p>Error sending email, please try again.</p>}
      </form>
  </div>  
</section>
  )
}

export default ContactForm
