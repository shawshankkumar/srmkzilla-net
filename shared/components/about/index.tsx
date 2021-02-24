import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import Head from 'next/head'
import SwipeCard from './swipe-cards'
import { LeftTimeline, RightTimeline } from './timeline'
import Footer from '../footer'
import sanityClient from '../../client'

const cards = [
  {
    name: 'Values',
    description_1:
      'We aim to grow bit by bit by our experiences, ideas, and perspectives manifested by the community of keen individuals',
    description_2:
      'To help these individuals create a powerful nation and solve complex technical problems hindering their development.',
    description_3:
      'As a part of Mozilla’s open-source community, our mission is to provide a platform for inquisitive minds by guiding and empowering their aspirations.',
  },
  {
    name: 'Mission',
    description_1:
      'To guide these individuals to exhibit professional work ethics, commitment, and leadership qualities to emerge as influential leaders in the times to come.',
    description_2:
      'To help these individuals create a powerful nation and solve complex technical problems hindering their development.',
    description_3:
      'As a part of Mozilla’s open-source community, our mission is to provide a platform for inquisitive minds by guiding and empowering their aspirations. ',
  },
  {
    name: 'Vision',
    description_1:
      'To advocate free education and appraise the power of technical education in the form of seminars, workshops, and webinars.',
    description_2:
      'To spread awareness about the latest technological advancements and helping the curious minds choose their niche to feed in. ',
    description_3:
      'A community that discovers and invests in young minds that have the potential to make a difference.',
  },
]

const AboutUs = () => {
  const [timeline, setTimeline] = useState([])
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "timeline"]{
        title,
        chattext,
        date,
        picture{
          asset->{
            _id,
            url
          },
          alt
        },
        description
      }`
      )
      .then((data) => setTimeline(data))
      .catch(console.error)
  }, [])
  return (
    <div className="bg-black text-white overflow-hidden">
      <Head>
        <title>SRMKZILLA | About</title>
      </Head>
      <Navbar />

      <div className="w-screen mt-0 md:mt-12">
        <div className="md:h-screen h-auto items-center flex justify-center">
          <div className="md:h-3/4 h-full sm:w-10/12 w-full md:mb-16 mb-8 rounded-none md:rounded-xl overflow-hidden">
            <img
              src="/images/mozofest.png"
              draggable={false}
              alt="image"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="flex flex-wrap
         items-center justify-center"
        >
          {cards.map((c) => {
            return <SwipeCard content={c} key={c.name} />
          })}
        </div>

        <div className="h-auto overflow-hidden bg-black text-white lg:mx-auto mt-14 md:mt-20">
          <h2 className="mx-auto my-4 text-4xl lg:text-5xl text-center text-white ">
            Our Virtues
          </h2>

          <div className=" h-auto overflow-hidden flex items-center justify-center bg-black">
            <div className="container  w-full h-full">
              <div className="relative wrap overflow-hidden pr-3 py-10 lg:p-10 h-full mx-4 md:mx-16 lg:mx-10">
                <div className=" absolute lg:top-20 invisible md:visible lg:visible md:left-1/2 lg:left-1/2 border-white h-full border"></div>
                {timeline.map((timeline, index) =>
                  index % 2 == 0 ? (
                    <RightTimeline data={timeline} key={index} />
                  ) : (
                    <LeftTimeline data={timeline} key={index} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
