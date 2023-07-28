import { motion } from 'framer-motion'

import feature5 from '../assets/images/feature5.jpeg'
import feature6 from '../assets/images/feature6.jpeg'
import { CheckArrowIcon } from '../assets/icons/CheckArrowIcon'
import { useTranslation } from 'react-i18next'

export const Features2 = () => {
  const { t } = useTranslation()
  return (
    <section className="w-full bg-customBg mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded">
                <img
                  src={feature5}
                  alt="f1"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
              <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                <img
                  src={feature6}
                  alt="f2"
                  className="rounded-xl  custom-border-gray"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                {t('FEATURES2.sub')}
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                {t('FEATURES2.title')}
              </h2>
              <p className="mb-12 text-customGrayText leading-loose">
                {t('FEATURES2.description')}
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES2.list.one')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES2.list.two')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES2.list.three')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES2.list.four')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES2.list.five')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES2.list.six')}</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>{t('FEATURES2.list.seven')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
)}
