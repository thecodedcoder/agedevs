import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'
import SectionHeading from '@components/ui/SectionHeading'
import { testimonials } from '@data/testimonials'

import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding">
      <SectionHeading subtitle="What Others Say" title="Testimonials" />

      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            className="pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="glass-card p-8 text-center">
                  <BiSolidQuoteAltLeft className="mx-auto mb-4 text-stacks/30 dark:text-accent/30" size={40} />

                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-stacks to-accent flex items-center justify-center text-white text-xl font-bold">
                    {item.name.charAt(0)}
                  </div>

                  <p className="text-sm md:text-base text-light-600 dark:text-light-400 leading-relaxed italic mb-6 max-w-lg mx-auto">
                    "{item.review}"
                  </p>

                  <h5 className="text-base font-bold text-dark-700 dark:text-light-100">
                    {item.name}
                  </h5>
                  <p className="text-xs text-stacks dark:text-accent">
                    {item.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
