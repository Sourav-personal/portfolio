import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { Unauthorize, Home, AcademicQualifications, WorkExperiences, RecognitionsAwards, Contact, ResearchArticles, ReviewArticles, BookChapters, Books, IPR, ConferencePresentation, News, ProfessionalMemberships, ResearchProjects, PhotoGallery } from '../pages'
import MainLayout from './MainLayout'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<MainLayout />}>
                <Route path='*' element={<Unauthorize />} />
                <Route path='' element={<Home />} />
                <Route path='academic-qualification' element={<AcademicQualifications />} />
                <Route path='work-experiences' element={<WorkExperiences />} />
                <Route path='recognitions-awards' element={<RecognitionsAwards />} />
                <Route path='contact' element={<Contact />} />
            </Route>
            <Route path='publications' element={<MainLayout />}>
                <Route path='research-articles' element={<ResearchArticles />} />
                <Route path='review-articles' element={<ReviewArticles />} />
                <Route path='book-chapters' element={<BookChapters />} />
                <Route path='books' element={<Books />} />
                <Route path='ipr' element={<IPR />} />
                <Route path='conference-presentation' element={<ConferencePresentation />} />
            </Route>
            <Route path='archives' element={<MainLayout />}>
                <Route path='news' element={<News />} />
                <Route path='professional-memberships' element={<ProfessionalMemberships />} />
                <Route path='research-projects' element={<ResearchProjects />} />
                <Route path='photo-gallery' element={<PhotoGallery />} />
            </Route>
        </>
    )
)

function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Router