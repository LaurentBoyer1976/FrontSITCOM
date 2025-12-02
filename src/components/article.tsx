import {type ReactNode, type FC } from 'react';

type ArticleElementProps = { children: ReactNode };

const ArticleElement: FC<ArticleElementProps> = ({ children }) => {
    return (
        <article className="mainArticle">
            {children}
        </article>
    );
};

export default ArticleElement;