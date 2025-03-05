import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router"; // Use react-router-dom for routing

function BlogDetails() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/blog/`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const currentArticle = data?.blogs?.find((item) => String(item.id) === String(id));
                
                if (currentArticle) {
                    setArticle(currentArticle);
                } else {
                    setError("Article not found.");
                }
            } catch (error) {
                console.error("Error fetching article:", error);
                setError("Error loading article. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center h-screen text-red-500">{error}</div>;
    }

    if (!article) {
        return <div className="flex items-center justify-center h-screen text-red-500">Article not found!</div>;
    }

    const formatText = (article) => {
        let text = article.maintext.replaceAll("**", "");

        return text.split("\n\n").map((para, index) => {
            if (para.startsWith("###")) {
                return <h3 key={index} className="text-xl font-bold my-4">{para.replace("###", "").trim()}</h3>;
            }
            return <p key={index} className="mb-4">{para}</p>;
        });
    };

    const isValidImage = article?.imageURL && (typeof article.imageURL === 'string' || article.imageURL instanceof URL);

    return (
        <article className="container max-w-5xl mx-auto p-4 font-baiJamjuree">
            <div className="flex flex-col md:flex-row lg:flex-row gap-4 mb-8">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold text-emerald-900 mb-4 md:pt-4">{article?.title}</h2>
                    <h3 className="text-xl text-emerald-700 mb-4">{article?.subtitle}</h3>
                    <div className="flex gap-2">
                        {article?.tagItems?.map((tag) => (
                            <Link
                                key={tag}
                                to={`/blog?tag=${tag}`}
                                className="inline-block bg-stone-200 text-emerald-700 px-4 py-1 rounded-lg text-sm"
                                aria-label={`Filter by ${tag}`}
                            >
                                {tag}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src={isValidImage ? article.imageURL : "/path/to/default-image.jpg"}
                        alt={article?.imageALT || "Article image"}
                        className="w-full h-auto max-h-96 object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
            {article?.quote && (
                <div className="text-center text-emerald-800 my-8 text-2xl font-bold">
                    <p>" {article.quote} "</p>
                </div>
            )}
            <div className="text-emerald-800 text-lg/7 mb-8">
                {formatText(article)}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-emerald-600 border-t pt-4">
                <p>Author: {article?.author || "Anonymous"}</p>
                <p>Published: {article?.date || "Unknown date"}</p>
            </div>
        </article>
    );
}

export default BlogDetails;
