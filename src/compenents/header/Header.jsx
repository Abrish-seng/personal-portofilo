import React from 'react'
import './header.css'
import images from '../../templates/logo192.png'
import image2 from '../../templates/profile.png'
import image3 from '../../templates/acess.png'
import image4 from '../../templates/ethical.png'
import image5 from '../../templates/sustainble.png'
const header={
    name:'Abrhaley',
    last_name:'AGG @ ',
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
       <h3 className='email-me'>{header.email}</h3>
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
     <div className='list-items'>
        <ul>
          {listItems}
        </ul>
     </div>
      
    </div>
    <section>
      <div className='introducing-yourself'>
        <div>
        <h1><span>Ux</span> Design</h1>
        <h1><span>For</span> Good</h1>
        </div>
        <div>
          <img src={image2} alt="" />
          <div className='background'>
            <ul >
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className='description'>
           <p>I’m Abrish, a freelance UX designer based <br/>in Ethiopia. 
                I craft accessible websites for<br/> brands
                 using tech for good.</p>
        </div>
      </div>
    </section>
    <div className='work'>
       <ul>
        <li>Accessiblity</li>
        <li>Consulting</li>
        <li>UX/UI design</li>
        <li>Audit</li>
        <li>Rebrand</li>
        <li>Webflow development</li>
       </ul>
    </div>
    <section className='ethics-design'>
      <h1>Design Ethics</h1>
      <div className='ethics'>
      <div>
      <div className='access'>
        <img src={image3} alt="" />
        <h3>Accessible design</h3>
      </div>
      <div className='p-desc'>
        <p>A great website is designed for all <br/>people by default. That means <br/>considering people who use assistive <br/> technology and being mindful <br/> of everyone's ability to process information.</p>

      </div>
      </div>

      <div>
      <div className='access'>
        <img src={image4} alt="" />
        <h3>Ethical design</h3>
      </div>
      <div className='p-desc'>
        <p>A great website is designed for all <br/>people by default. That means <br/>considering people who use assistive <br/> technology and being mindful <br/> of everyone's ability to process information.</p>

      </div>
      </div>

      <div>
      <div className='access'>
        <img src={image5} alt="" />
        <h3>Sustainable design</h3>
      </div>
      <div className='p-desc'>
        <p>A great website is designed for all <br/>people by default. That means <br/>considering people who use assistive <br/> technology and being mindful <br/> of everyone's ability to process information.</p>

      </div>
      </div>
      </div>
    </section>
    <div className='aboutme-main'>
      <h1>About me</h1>
      <div className='aboutme'>
      <div>
      <div className='access'>
        <img src={image5} alt="" />
        <h3>Sustainable design</h3>
      </div>
      <div className='p-desc'>
      <p>With 13 years of experience in the digital industry, I've had the opportunity <br/> to explore various roles.
           My career kicked off in Paris, where I began as a film <br/>editor before making my way to London to work in digital marketing. <br/> I now operate as a freelance UX designer 
          from a small French town, for European <br/> organisations. I can work in French and English.</p>
          <p>I'm also a proud member of Women Make,
             a community that supports <br/> young women entrepreneurs.
             And I'm involved with Agencies for Good and <br/> Dovetail, 
             two networks that connect tech experts with non-profits.</p>

      </div>
      </div>

      <div>
      <div className='access'>
        <img src={image3} alt="" />
        <h3>Sustainable design</h3>
      </div>
      <div className='p-desc'>
        <p>With 13 years of experience in the digital industry, I've had the opportunity <br/> to explore various roles.
           My career kicked off in Paris, where I began as a film <br/>editor before making my way to London to work in digital marketing. <br/> I now operate as a freelance UX designer 
          from a small French town, for European <br/> organisations. I can work in French and English.</p>
          <p>I'm also a proud member of Women Make,
             a community that supports <br/> young women entrepreneurs.
             And I'm involved with Agencies for Good and <br/> Dovetail, 
             two networks that connect tech experts with non-profits.</p>

      </div>
      </div>
      </div>
    </div>
    </>
    
  )
}
