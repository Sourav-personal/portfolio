import React from 'react';
import { useNavigate } from 'react-router-dom';

type NavItem = {
    name: string;
    slug: string;
    active: boolean;
    subItems?: { name: string; slug: string }[];
};

const Header: React.FC = () => {

    const navigate = useNavigate();

    const navItems: NavItem[] = [
        { name: 'Home', slug: '/', active: true },
        { name: 'Academic Qualifications', slug: '/academic-qualification', active: true },
        { name: 'Work Experiences', slug: '/work-experiences', active: true },
        {
            name: 'Publications',
            slug: '/publications',
            active: true,
            subItems: [
                { name: 'Research Articles', slug: '/publications/research-articles' },
                { name: 'Review Articles', slug: '/publications/review-articles' },
                { name: 'Book Chapters', slug: '/publications/book-chapters' },
                { name: 'Books', slug: '/publications/books' },
                { name: 'Intellectual property rights(IPRs)', slug: '/publications/ipr' },
                { name: 'Conference Presentation', slug: '/publications/conference-presentation' },
            ],
        },
        { name: 'Recognitions/Awards', slug: '/recognitions-awards', active: true },
        {
            name: 'Archives',
            slug: '/archives',
            active: true,
            subItems: [
                { name: 'News', slug: '/archives/news' },
                { name: 'Professional Memberships', slug: '/archives/professional-memberships' },
                { name: 'Research Projects', slug: '/archives/research-projects' },
                { name: 'Photo Gallery', slug: '/archives/photo-gallery' },
            ],
        },
        { name: 'Contact', slug: '/contact', active: true },
    ];

    return (
        <header className="bg-gray-800 text-white p-4 sticky top-0 z-50">
            <div className="container mx-auto">
                <nav className="flex justify-center space-x-10 text-2xl relative">
                    {/* Here itareting the navItems array to show all menus */}
                    {navItems.map((item) =>
                        item.active ? (
                            <div key={item.name} className="relative group">
                                {/* For presence of SubItems here block and unblock the link navigate */}
                                {item.subItems ? (
                                    <a className="hover:text-gray-400 cursor-default">{item.name}</a>
                                ) : (
                                    <a onClick={() => navigate(item.slug)} className="hover:text-gray-400 cursor-pointer"> {item.name} </a>
                                )}
                                {/* For presence of SubItems here itareting the subItems of navItem array*/}
                                {item.subItems && (
                                    <div className="absolute left-0 top-full mt-5 w-56 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out delay-150 group-hover:delay-100 z-10">
                                        {item.subItems.map((subItem) => (
                                            <div
                                                key={subItem.name}
                                                onClick={() => navigate(subItem.slug)}
                                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                            >
                                                {subItem.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : null
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;