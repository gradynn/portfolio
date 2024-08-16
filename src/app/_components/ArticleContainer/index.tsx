import { ReactNode } from 'react';
import './medium-theme.css'; // Make sure to import your CSS

export default function ArticleContainer({ children }: { children: ReactNode }) {
    return (
        <div className="article-container">
            {children}
        </div>
    );
}