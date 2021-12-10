import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { Button } from '../Button'
import { Speaker } from '../Speaker'
import styles from './Room.module.scss'

type RoomProps = { 
  title: string,
  users: {
    id: string
    fullname: string
    avatarUrl: string
  }[]
}

export const Room: React.FC<RoomProps> = ({ title, users }) => {
  return (
    <div className={styles.wrapper}>
      <audio controls />
      <div className="d-flex align-items-center justify-content-between">
        <h2>{title}</h2>
        <div className={clsx('d-flex align-items-center', styles.actionButtons)}>
          <Link href="/rooms">
            <a>
              <Button color="gray" className={styles.leaveButton}>
                <img width={18} height={18} src="/static/peace.png" alt="Hand black" />
                Leave quietly
              </Button>
            </a>
          </Link>
        </div>
      </div>

      {/* <div className="users">
        {users.map((obj) => (
          <Speaker key={obj.fullname} {...obj} />
        ))}
      </div> */}
    </div>
  )
}
