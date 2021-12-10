import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Button } from '../components/Button';
import { ConversationCard } from '../components/ConversationCard';
import { Header } from '../components/Header';
import Axios from '../core/axios'


export default function RoomsPage({ rooms=[] as roomType[] }) {
  return (
    <>
      <Head>
        <title>Clubhouse: All Conversation</title>s
      </Head>
      <Header />
        <div className='container'>
          <div className='container mt-40 d-flex align-items-center justify-content-between'>
            <h1>All Conversation</h1>
            <Button color='green'>+ Start room</Button>
          </div>
          <div className='grid mt-30'>
            {rooms?.map((obj) => (
              <Link key={obj.id} href={`/rooms/${obj.id}`}>
                <a className="d-flex">
                  <ConversationCard
                    title={obj.title}
                    avatar={obj.avatars}
                    speakers={obj.guests}
                    listenersCount={obj.speakersCount}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await Axios.get('/rooms.json')
    return {
      props: {
        rooms: data
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

export type roomType = {
  id: string
  avatars: string[]
  guests: string[]
  guestsCount: number
  speakersCount: number
  title: string
}
