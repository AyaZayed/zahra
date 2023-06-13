import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import media from '../assets/icons/media.png'
import mediaFull from '../assets/icons/media-full.png'
import magnifyingGlass from '../assets/icons/magnifying-glass.png'

export default function Chat() {
    const [isMediaShown, setIsMediaShown] = React.useState(false)
    const mediaArr = [
        { id: 1, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=8000', alt: 'medical data report', date: '2023-06-01' },
        { id: 2, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'medical data report', date: '2023-05-01' },
        { id: 3, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'medical data report', date: '2023-04-01' },
        { id: 4, src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', alt: 'medical data report', date: '2023-03-01' },
    ]
    const contacts = [
        { id: 1, name: 'ماهر عمر', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', lastMessage: 'مرحبا', isOnline: true },
        { id: 2, name: 'أحمد شوقي', image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', lastMessage: 'شكرا', isOnline: false },
        { id: 3, name: 'زينب محمد', image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60', lastMessage: 'تسلم يا دكتور', isOnline: false },
        { id: 4, name: 'جميلة نافع', image: 'https://plus.unsplash.com/premium_photo-1664442593274-38caa77af985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60', lastMessage: 'الكلام ده معناه ايه؟', isOnline: true },
        { id: 5, name: 'محمد الدسوقي', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', lastMessage: 'مع السلامة', isOnline: false },
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
                        <form>
                            <input type="text" placeholder="اكتب رسالتك هنا" />
                            <button type="submit">إرسال</button>
                        </form>
                    </div>
                    <div className="chats">
                        <div className="chats-search">
                            <img src={magnifyingGlass} alt='magnifying glass' />
                            <input type="text" placeholder="بحث في المحادثات" />
                        </div>
                        <div className="chats-list">
                            {contacts.map((contact) => {
                                return (
                                    <div className="chats-item" key={contact.id}>
                                        <div className="chats-item-image">
                                            <img src={contact.image} alt={contact.name} />
                                        </div>
                                        <div className='chats-item-text'>
                                            <h6>{contact.name} {contact.isOnline && <span className='online-dot'></span>}</h6>
                                            <p>{contact.lastMessage}</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
