import { Outlet } from "react-router-dom"
import { ReactComponent as Logo } from './assets/Logo.svg'
import { ReactComponent as HeroImage } from './assets/Illustration.svg'

import { ReactComponent as Client1 } from './assets/clients/logo1.svg'
import { ReactComponent as Client2 } from './assets/clients/logo2.svg'
import { ReactComponent as Client3 } from './assets/clients/logo3.svg'
import { ReactComponent as Client4 } from './assets/clients/logo4.svg'
import { ReactComponent as Client5 } from './assets/clients/logo5.svg'
import { ReactComponent as Client6 } from './assets/clients/logo6.svg'

import { ReactComponent as Community1 } from './assets/community/Icon.svg'
import { ReactComponent as Community2 } from './assets/community/Icon (1).svg'
import { ReactComponent as Community3 } from './assets/community/Icon (2).svg'

import { ReactComponent as UnlockIcon } from './assets/unlock.svg'

import { ReactComponent as People } from './assets/achievements/people.svg'
import { ReactComponent as Clubs } from './assets/achievements/clubs.svg'
import { ReactComponent as Bookings } from './assets/achievements/bookings.svg'
import { ReactComponent as Payments } from './assets/achievements/payments.svg'

import Com1 from './assets/image 18.png'
import Com2 from './assets/image 19.png'
import Com3 from './assets/image 20.png'

import socials from './assets/Social Links.png'

function App() {

  return (
    <>
      <Outlet />
      <NavBar />
      <main className="text-gray-900">
        <Hero />
        <Clients />
        <Community />
        <Unlock />
        <Achievements />
        <CommunityUpdates />
        <Last />
      </main>
      <Footer />

    </>
  )
}

function Footer() {
  return (
    <footer className="w-full px-32 py-16 bg-gray-900 flex text-gray-300">
      <div className="w-[30%] text-xs flex flex-col gap-10">
        <Logo />
        <div>
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <img src={socials} className="w-[50%]"/>
      </div>
      <div className="flex grow justify-evenly">
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold">Company</h4>
          <div className="text-xs flex flex-col gap-3">
            <p>About us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Testimonials</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-bold">Support</h4>
          <div className="text-xs flex flex-col gap-3">
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Status</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Stay up to date</h4>
          <input className="bg-gray-700 py-2 px-4 rounded-lg text-sm" placeholder="Your email address"/>

        </div>
      </div>

    </footer>
  )
}

function Last() {
  return (
    <section className="w-full bg-slate-100 flex flex-col items-center py-20 gap-16">
      <h1 className="text-6xl font-bold w-1/2 text-center">Pellentesque suscipit fringilla libero eu.</h1>
      <div>
        <button className="rounded-md px-10 py-4 text-white font-medium bg-green-600">Learn More</button>
      </div>

    </section>
  )
}

function CommunityUpdates() {
  return (
    <section className="px-24 w-full flex flex-col items-center justify-center gap-10 py-16">
      <h2 className="text-4xl font-semibold w-[50%] text-center">Caring is the new marketing</h2>
      <p className="text-sm text-gray-700 text-center w-[50%]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
      <div className="w-full flex justify-evenly">
        <div className="h-fit pb-20 relative flex justify-center">
          <img src={Com1} />
          <div className="absolute bottom-0 w-[90%] rounded-lg bg-slate-100 shadow-2xl drop-shadow-2xl px-4 py-8 text-center flex flex-col gap-10">
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <a href="#" className="text-green-600">Read more</a>
          </div>
        </div>
        <div className="h-fit pb-20 relative flex justify-center">
          <img src={Com2} />
          <div className="absolute bottom-0 w-[90%] rounded-lg bg-slate-100 shadow-2xl drop-shadow-2xl px-4 py-8 text-center flex flex-col gap-10">
            <p>What are your safeguarding responsibilities?</p>
            <a href="#" className="text-green-600">Read more</a>
          </div>
        </div>
        <div className="h-fit pb-20 relative flex justify-center">
          <img src={Com3} />
          <div className="absolute bottom-0 w-[90%] rounded-lg bg-slate-100 shadow-2xl drop-shadow-2xl px-4 py-8 text-center flex flex-col gap-10">
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <a href="#" className="text-green-600">Read more</a>
          </div>
        </div>
      </div>

    </section>
  )
}

function Achievements() {
  return (
    <section className="w-full px-24 py-14 flex">
      <div className="grow flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Helping a local</h1>
        <h1 className="text-4xl text-green-600 font-semibold">business reinvent itself</h1>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className="grow flex flex-col gap-10">
        <div className="flex w-full">
          <div className="flex gap-4 items-center grow">
            <People />
            <div>
              <p className="text-xl font-bold">2,245,341</p>
              <p className="text-sm text-gray-700">Members</p>
            </div>
          </div>
          <div className="flex gap-4 items-center grow">
            <Clubs />
            <div>
              <p className="text-xl font-bold">46,328</p>
              <p className="text-sm text-gray-700">Clubs</p>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex gap-4 items-center grow">
            <Bookings />
            <div>
              <p className="text-xl font-bold">828,867</p>
              <p className="text-sm text-gray-700">Event Bookings</p>
            </div>
          </div>
          <div className="flex gap-4 items-center grow">
            <Payments />
            <div>
              <p className="text-xl font-bold">1,926,436</p>
              <p className="text-sm text-gray-700">Payments</p>
            </div>
          </div>
        </div>

      </div>

    </section>

  )
}

function Unlock() {
  return (
    <section className="w-full px-10 flex items-center justify-center py-10">
      <div className="w-1/2 flex items-center justify-center">
        <UnlockIcon />
      </div>
      <div className="w-[40%] flex flex-col">
        <h2 className="text-3xl font-semibold mb-3">The unseen of spending three years at Pixelgrade</h2>
        <p className="text-sm text-gray-700 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
        <div>
          <button className="rounded-md px-10 py-4 text-white font-medium bg-green-600">Learn More</button>
        </div>
      </div>

    </section>
  )
}

function Community() {
  return (
    <section className="px-24 w-full flex flex-col items-center justify-center gap-4 py-16">
      <h2 className="text-4xl font-semibold w-[50%] text-center">Manage your entire community in a single ecosystem</h2>
      <p className="text-sm text-gray-700">Who is NextCent for?</p>
      <div className="flex justify-between py-10">
        <div className="flex flex-col justify-center items-center gap-2 w-[20%]">
          <Community1 />
          <h3 className="text-2xl font-bold text-center">Membership Organisations</h3>
          <p className="text-sm text-gray-700 text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[20%]">
          <Community2 />
          <h3 className="text-2xl font-bold text-center">National Associations</h3>
          <p className="text-sm text-gray-700 text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-[20%]">
          <Community3 />
          <h3 className="text-2xl font-bold text-center w-[80%]">Clubs And Groups</h3>
          <p className="text-sm text-gray-700 text-center">Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>

    </section>
  )

}

function Clients() {
  return (
    <section className="px-24 w-full flex flex-col items-center py-16 justify-center gap-4">
      <h2 className="text-4xl font-semibold ">Our Clients</h2>
      <p className="text-sm text-gray-700">We have been working with some 500+ fortune clients.</p>
      <div className="w-full flex justify-between py-10">
        <Client1 />
        <Client2 />
        <Client3 />
        <Client4 />
        <Client5 />
        <Client6 />
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="h-[90vh] w-full flex px-10 justify-around items-center bg-slate-100">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="font-bold text-6xl">Lessons and insights</h1>
          <h1 className="font-bold text-6xl text-green-600">from 8 years</h1>
        </div>
        <p className="text-sm text-gray-600">Where to grow your business as a photographer: site or social media?</p>
        <div>
          <button className="px-6 py-4 bg-green-600 text-white font-bold rounded-md">Register</button>
        </div>
      </div>
      <div>
        <HeroImage />
      </div>

    </section>

  )
}

function NavBar() {
  return (
    <header className="z-50 w-full px-10 py-6 text-sm font-medium border border-b-slate-200 shadow-lg">
      <nav className="flex w-full justify-between items-center">
        <div>
          <Logo />
        </div>
        <ul className="flex gap-14">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>
        <div className="flex items-center gap-8 font-bold">
          <button className="text-green-600">Login</button>
          <button className="px-4 py-2 text-white bg-green-600 rounded-lg">Signup</button>
        </div>
      </nav>
    </header>
  )

}

export default App
