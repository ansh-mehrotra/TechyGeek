import React from 'react'
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai'

import vg from "../assets/2.webp"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyGeek</h1>
            <p>Solutions to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Vector Graphics" />
        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
            </p>
        </div>
    </div>
    <div className="home3" id='about'>
      <div>
        <h1>
          Who we are?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem assumenda veritatis in repellendus, recusandae esse nemo non ipsa delectus a aliquam ipsam asperiores, perspiciatis dolores quaerat facere? Temporibus dolore, possimus inventore omnis neque facilis? Eius recusandae saepe at debitis repudiandae, nobis, cum dolor culpa ad unde sunt reprehenderit dignissimos exercitationem alias praesentium, a ea sit. Unde molestias recusandae alias mollitia eius nemo nostrum illum officiis culpa excepturi! Libero quisquam nulla voluptas dolores eligendi aut quibusdam facilis commodi, vel qui earum dolor, similique, aliquam quas sunt. Iure quae error aspernatur rem, molestiae a possimus dolores eaque quisquam hic, dolorem neque! Deleniti!
        </p>
      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"3s"
          }
          }>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{
            animationDelay:"4s"
          }
          }>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{
            animationDelay:"5s"
          }
          }>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
          <div style={{
            animationDelay:"6s"
          }
          }>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
        </article>
      </div>
    </div>
    </>
    
  )
}

export default Home