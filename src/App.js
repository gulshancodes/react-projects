import { Routes, Route } from 'react-router-dom';
import Home from './homepage/Home';
import Counter from './projects/counter/Counter';
import Accordion from './projects/accordion/Accordion';
import Tabs from './projects/tabs/Tabs';
import Sidebar from './projects/sidebar/Sidebar';
import StickyHeader from './projects/sticky-header/StickyHeader';
import BackTop from './projects/back-to-top/BackTop';
import ReadMore from './projects/readmore/ReadMore';
import Modal from './projects/modal/Modal';
import ClickedModal from './projects/clicked-modal/ClickedModal';
import LoadMore from './projects/loadMore/LoadMore';
import FilterableGallery from './projects/filterable-gallery/FilterableGallery';
import SearchFilter from './projects/search-filter/SearchFilter';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='https://gulshan-react-projects.netlify.app/counter' element={<Counter />} />
        <Route path='accordion' element={<Accordion />} />
        <Route path='tabs' element={<Tabs />} />
        <Route path='sidebar' element={<Sidebar />} />
        <Route path='sticky-header' element={<StickyHeader />} />
        <Route path='back-top' element={<BackTop />} />
        <Route path='read-more' element={<ReadMore />} />
        <Route path='modal' element={<Modal />} />
        <Route path='clicked-modal' element={<ClickedModal />} />
        <Route path='load-more' element={<LoadMore />} />
        <Route path='filterable-gallery' element={<FilterableGallery />} />
        <Route path='search-filter' element={<SearchFilter />} />
      </Routes>
    </>
  );
}

export default App;
