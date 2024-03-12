import React from 'react'

const TopSection = () => {
  return (
    <>
    <section>
      <p className='text-center py-3 bg-red-500 text-white text-md  '>Get free delivery on orders over Rs.5800</p>
    </section>
 <style jsx>{`
        @media screen and (max-width: 640px) {
          .top {
            display: none;
          }
        }
      `}</style>

    </>
  )
}

export default TopSection
