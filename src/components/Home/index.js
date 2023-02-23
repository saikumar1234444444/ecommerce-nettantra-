import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        src="https://storiesfilpkartimage.blob.core.windows.net/stories/2017/09/bbdschedule_mainbanner2-59bfb1e3e37b8.jpg"
        alt="home"
        className="home-image"
      />
      <div className="home-text">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.fLaZ3k_fMg_w3znW5GXAUwHaE2&pid=Api&P=0"
          alt="day"
          className="offer"
        />
        <h1 className="home-heading">ARE YOU READY FOR BIG BILLION DAYS</h1>
        <p className="home-para">
          start buying products with offers and win exciting gifts click on
          products to see the available products
        </p>
      </div>
    </div>
  </>
)
export default Home
