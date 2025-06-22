import React from "react";
import '../assets/styles/pages/unauthorize.css'

const Unauthorize: React.FC = () => {
    return (
        <main className="unauthorize-main">
            <div className="unauthorize-content">
                <p className="unauthorize-code">404</p>
                <h1 className="unauthorize-title">Page not found</h1>
                <p className="unauthorize-message">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
            </div>
        </main>
    );
};

export default Unauthorize;