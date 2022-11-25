import styles from './style'
import clsx from 'clsx'

import {
  Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer
} from "./components"

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={clsx(styles.paddingX, styles.flexCenter)}>
      <div className={clsx(styles.boxWidth)}>
        <Navbar />
      </div>
    </div>
    <div className={clsx(styles.flexStart, 'bg-primary')}>
      <div className={clsx(styles.boxWidth)}>
        <Hero />
      </div>
    </div>
    <div className={clsx(styles.flexStart, styles.paddingX, 'bg-primary')}>
      <div className={clsx(styles.boxWidth)}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
)


export default App