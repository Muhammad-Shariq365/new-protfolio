import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 text-center'>
        <form method='POST' action="https://getform.io/f/078663ac-1986-4d1c-8de8-e7c79e7d94b8" className='flex flex-col max-w-[600px] w-full '>
            <div className='pt-12 pb-4'>
                <p className='text-4xl font-bold inline border-b-4 mt-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='py-2 my-6 border-4 border-blue-300 font-serif font-thin text-white bg-blue-300 rounded-lg' > Submit the form below or shoot me an email muhammadshariq365@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact