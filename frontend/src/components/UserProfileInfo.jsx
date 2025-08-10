import { Verified } from 'lucide-react'
import React from 'react'

const UserProfileInfo = ({user,posts,profileId,setShowId}) => { 
  return (
   <div className='relative py-4 px-6 md:px-8 bg-white'>
     <div className='flex flex-col md:flex-row items-start gap-6'>
       <div className='w-32 h-32 border-4 border-white shadow-1g absolute -top-16 rounded-full'>
         <img src={user.profile_picture} alt="" className='absolute rounded-full -z-2' />
         </div>
            <div className='w-full pt-16 md:pt-0 md:pl-36'>
               <div className='flex flex-col md:flex-row items-start justify-between'> 
                <div className='flex items-center gap-3'> 
                 
    <h1 className='text-2xl font-bold text-gray-900'> {user.
full_name}</h1>
<Verified className='w-6 h-6 text-blue-500'/>
</div>
<p className='text-gray-600'>{user.username ? `@${user.username}` : 'Add a username'}</p>
</div>
</div>
</div>
   </div>
   
  )
}

export default UserProfileInfo