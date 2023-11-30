import React from 'react'
import './header.css'
import images from '../../templates/logo192.png'
const header={
    name:'Abrhaley',
    last_name:'Gebreslassie',
    nick_name:'Abrish-seng',
    email:'EMAIL ME'

}
const descriptionItems=[
  {title:'Ethics', id:1},
  {title:'Work',id:2},
  {title:'About',id:3}
]

export default function Header() {
  const listItems=descriptionItems.map(description =>
    <li key={description.id}>
      {description.title}

    </li>
    )
  return (
    <>

    <div className='top_header'>
     <div>
       <h3>{header.email}</h3>
     </div>
     <div className='header-info'>
        <img src={images} className='img_profile' alt="" />
        <div className='first_header'>
            <h3>{header.name}</h3>
            <div className='second_header'>
            <h3>{header.last_name}</h3>
            <h3>{header.nick_name}</h3>
            </div>
        </div>
      </div>
     <div>
        <ul>
          {listItems}
        </ul>
     </div>
      
    </div>
    <section>
      <div>
        <div>
        <h1><span>ux</span> Design</h1>
        <h1><span>for</span>Good</h1>
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>

        </div>
      </div>
    </section>
    </>
    
  )
}
