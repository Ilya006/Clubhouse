import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { Context } from 'vm'
import { BackButton } from '../../components/BackButton'
import { Header } from '../../components/Header'
import { Room } from '../../components/Room'
import Axios from '../../core/axios'
import { roomType } from '../rooms'


const users = [
  {
    id: "12313",
    fullname: 'Petya Pupkin',
    avatarUrl: 'https://variety.com/wp-content/uploads/2013/06/avatar.jpg?w=681&h=383&crop=1',
  },
  {
    id: '2',
    fullname: 'Katya bomba',
    avatarUrl: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2021/02/Avatar-Next-Shadow-2-1.jpg',
  }
]

export default function room(props: any) {
  const {room} = props
  console.log(room.title);
  

  return (
    <div>
      <Head>
        <title>{room.title}</title>
      </Head>

      <Header />
      <div className='container mt-30'>
        <BackButton title='All Rooms' href='/rooms' />
      </div>
      <Room title={room.title} users={users} />
    </div>
  )
}

export const getServerSideProps = async (context: Context) => {
  try {
    const { data } = await Axios.get('/rooms.json')
    const roomId = context.query.id
    const currentRoom = data.find((room: roomType) => room.id === roomId )
    
    return {
      props: {
        room: currentRoom
      }
    }
  } catch (error) {
    console.log('ERROR')
    return {
      props: {
        rooms: {}
      }
    }
  }
}
