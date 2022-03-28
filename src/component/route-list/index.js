import { Routes, Route } from 'react-router-dom';
import SearchResultPage from '../../template/search-result-page';
import AboutUs from '../../template/about-us';
import ListingPage from '../../template/listing-page';

// All Route addition/removal will go in this file
export default function RouteList() {
    return (
        <Routes>
            {/* The below commeneted route is required for published gh-page */}
            {/* <Route path='/deliveroo-listing-page-frontend' element={<ListingPage />} /> */}
            <Route path='/feat-route-chnage.dpwxzmoj5tdni.amplifyapp.com' element={<ListingPage />} />
            {/* <Route path='/' element={<ListingPage />} /> */}
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/listing' element={<SearchResultPage />} />
        </Routes>
    )
}
