import React, { useState } from 'react';
import '../assets/styles/main.css';
import { useNavigate } from 'react-router-dom';

type NavItem = {
  name: string;
  slug: string;
  active: boolean;
  subItems?: { name: string; slug: string }[];
};

const Header: React.FC = () => {
  const navigate = useNavigate();

  // ✨ Mobile menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="header-container">
      <div className="nav-wrapper">
        {/* ✨ Hamburger for mobile */}
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>

        <ul className={`menu-list ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                {/* ✨ If subItems exist, do not navigate */}
                {item.subItems ? (
                  <span className="no-menu">{item.name}</span>
                ) : (
                  <a
                    className="has-menu"
                    onClick={() => {
                      navigate(item.slug);
                      setMobileMenuOpen(false); // ✅ Close mobile menu
                    }}
                  >
                    {item.name}
                  </a>
                )}

                {/* ✨ Handle sub-items */}
                {item.subItems && (
                  <div className="dropdown">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.name}
                        onClick={() => {
                          navigate(subItem.slug);
                          setMobileMenuOpen(false); // ✅ Close mobile menu
                        }}
                        className="dropdown-item"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ) : null
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
