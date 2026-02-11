





import { useAuth, useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Heart } from 'lucide-react'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const Community = () => {
  const [creations, setCreations] = useState([])
  const { user } = useUser()
  const [loading, setLoading]= useState(true)
  const {getToken}=useAuth()

  const fetchCreations = async () => {
     try{
             const {data}=await axios.get('/api/user/get-published-creations',{
              headers: {Authorization: `${await getToken()}`}
             })
             if(data.success){
              setCreations(data.creations)
             }else{
              toast.error(data.message)
             }
     }
     catch(error){
          toast.error(error.message)
     }
     setLoading(false)
  }

  useEffect(() => {
    if (user) {
      fetchCreations()
    }
  }, [user])

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      <h2 className='text-xl font-semibold'>Creations</h2>

      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll'>
        <div className='flex flex-wrap'>
          {creations.map((creation, index) => (
            <div
              key={index}
              className='relative group inline-block pl-3 pt-3 w-full sm:w-1/2 lg:w-1/3'
            >
              <img
                src={creation.content}
                alt=""
                className='w-full h-85 object-cover rounded-lg'
              />

              <div className='absolute inset-0 left-3 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg'>
                <p className='text-sm hidden group-hover:block'>
                  {creation.prompt}
                </p>

                <div className='flex gap-1 items-center'>
                  <p>{creation.likes.length}</p>

                  <Heart
                    className={`min-w-5 h-5 hover:scale-110 cursor-pointer ${
                      creation.likes.includes(user.id)
                        ? 'fill-red-500 text-red-600'
                        : 'text-white'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Community
