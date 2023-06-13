import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import media from '../assets/icons/media.png'
import mediaFull from '../assets/icons/media-full.png'

export default function Chat() {
    const [isMediaShown, setIsMediaShown] = React.useState(false)
    const mediaArr = [
        { id: 1, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=8000', alt: 'medical data report', date: '2023-06-01' },
        { id: 2, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'medical data report', date: '2023-05-01' },
        { id: 3, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'medical data report', date: '2023-04-01' },
        { id: 4, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'medical data report', date: '2023-03-01' },
    ]
    return (
        <div className='chat-page'>
            <Navbar />
            <div className="container">
                <Sidebar />
                <div className="chat">
                    <div className="media">
                        <div className="media-header">
                            {isMediaShown ?
                                <img src={mediaFull} alt="images stacked on top of each other"
                                    onClick={() => setIsMediaShown(!isMediaShown)} />
                                :
                                <img src={media} alt="images stacked on top of each other"
                                    onClick={() => setIsMediaShown(!isMediaShown)} />}

                        </div>
                        {isMediaShown &&
                            <div className="media-body">
                                <h6></h6>
                                <div className="media-items">
                                    {mediaArr.map((item) => {
                                        return (
                                            <img src={item.src} alt={item.alt} key={item.id} />
                                        )
                                    })}
                                </div>
                            </div>
                        }
                    </div>
                    <div className="chat-form">

                    </div>
                    <div className="chats">

                    </div>
                </div>
            </div>
        </div>
    )
}
