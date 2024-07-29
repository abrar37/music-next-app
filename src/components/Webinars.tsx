'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";


const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
];


function Webinars() {
  return (
    <div className="py-20 bg-gray-900 flex flex-col gap-8 items-center">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10 max-w-7xl mx-auto">
            <HoverEffect items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link: `/webinar/${webinar.slug}`                }
            ))}/>
        </div>

        <Link href={"/"}>
          <div className="py-4 px-8 bg-black rounded-lg hover:bg-teal-600">View All Webinars</div>
        </Link>
    </div>
  )
}

export default Webinars