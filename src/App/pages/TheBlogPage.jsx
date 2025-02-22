import { useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useTranslation } from '../components/LanguageContext';

/**
 * TheBlogPage Component
 * Main component for the blog page that handles article display, filtering, and navigation
 * @returns {JSX.Element} The complete blog page
 */
function TheBlogPage() {
  const t = useTranslation();
  // State Management
  const [articles, setArticles] = useState([]); // All articles
  const [filteredArticles, setFilteredArticles] = useState([]); // Articles after search/filter
  const [error, setError] = useState(null); // Error handling
  const [selectedTags, setSelectedTags] = useState([]); // Selected filter tags
  const [query, setQuery] = useState(""); // Search query
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Router hooks
  const location = useLocation();
  const navigate = useNavigate();

  /**
   * Fetch articles from API
   * Handles data fetching, error states, and loading
   */
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/blog");
        const data = await response.json();
        
        if (Array.isArray(data.blogs)) {
          setArticles(data.blogs);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch articles");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  /**
   * Sync URL parameters with state
   * Updates tags and search query based on URL
   */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tagsFromUrl = params.get("tag") ? params.get("tag").split(",") : [];
    const searchQuery = params.get("search") || "";

    setSelectedTags(tagsFromUrl);
    setQuery(searchQuery);
  }, [location]);

  /**
   * Filter articles based on search query and tags
   * Memoized to prevent unnecessary recalculations
   */
  const filterArticles = useMemo(() => {
    return articles.filter(article => {
      // Search filter
      const matchesSearch = !query.trim() || [
        article.title,
        article.subtitle,
        article.summary
      ].some(text => 
        text.toLowerCase().includes(query.toLowerCase())
      );

      // Tag filter
      const matchesTags = !selectedTags.length || 
        article.tagItems.some(tag => selectedTags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [articles, query, selectedTags]);

  // Update filtered articles when filter changes
  useEffect(() => {
    setFilteredArticles(filterArticles);
  }, [filterArticles]);

  /**
   * Handle search query updates
   * Updates URL and state
   * @param {string} newQuery - New search query
   */
  const handleSearch = (newQuery) => {
    const params = new URLSearchParams(location.search);
    
    if (newQuery) {
      params.set("search", newQuery);
    } else {
      params.delete("search");
    }

    navigate(`/blog?${params.toString()}`);
    setQuery(newQuery);
  };

  /**
   * Handle tag selection
   * Updates URL and state
   * @param {string} tag - Tag to toggle
   */
  const handleTagFilter = (tag) => {
    let newTags = tag === "" ? [] : // Clear all tags
      selectedTags.includes(tag) ?
        selectedTags.filter(t => t !== tag) : // Remove tag
        [...selectedTags, tag]; // Add tag

    const params = new URLSearchParams(location.search);
    
    if (newTags.length) {
      params.set("tag", newTags.join(","));
    } else {
      params.delete("tag");
    }

    if (query) params.set("search", query);
    
    navigate(`/blog?${params.toString()}`);
    setSelectedTags(newTags);
  };

  // Error state display
  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        <h2 className="text-xl font-bold">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  // Loading state display
  if (isLoading) {
    return <BlogSkeleton />;
  }

  return (
    <div className="flex flex-col justify-center">
      {/* Hero Section with Featured Articles */}
      <BlogHeroSection articles={articles} />
      
      <div className="flex flex-col md:flex-row pt-2 md:mt-8">
        {/* Sidebar with Search and Filters */}
        <div className="md:w-1/4 flex flex-col p-4 mx-auto space-y-4">
          <BlogSearch 
            query={query} 
            onSearch={handleSearch}
            placeholder={t.blogSearchPlaceholder}
          />
          <RenderTagFilter
            articles={articles}
            selectedTags={selectedTags}
            onTagFilter={handleTagFilter}
            clearText={t.blogClearFilters}
          />
        </div>
        
        {/* Main Content Area */}
        <BlogPostSection 
          articles={filteredArticles} 
          noArticlesText={t.blogNoArticles}
          readMoreText={t.blogReadMore}
        />
      </div>
    </div>
  );
}

/**
 * BlogSkeleton Component
 * Displays loading state with animated placeholders
 */
const BlogSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Add skeleton UI elements */}
    </div>
  );
};

const BlogHeroSection = ({ articles }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => setActiveIndex(index);
  const handlePrevClick = () => setActiveIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  const handleNextClick = () => setActiveIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full px-2 md:px-4 rounded-xl">
      {articles.map((item, index) => (
        <div
          key={item.id || index}
          className={`relative h-[60vh] bg-cover bg-center rounded-xl ${index !== activeIndex ? "hidden" : ""}`}
          style={{ backgroundImage: `url(${item.imageURL})` }}
        >
          <Link to={`/blog/${item.id}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent rounded-xl opacity-40"></div>
            <div className="absolute w-full md:w-1/2 flex flex-col justify-center text-left text-white p-8 bottom-0 left-0">
              <h1 className="text-2xl md:text-5xl font-bold mb-4">{item.title}</h1>
              <p className="text-lg md:text-2xl mb-6">{item.subtitle}</p>
            </div>
          </Link>
        </div>
      ))}
      <div className="absolute top-1/2 left-6 transform -translate-y-1/2 cursor-pointer opacity-20 hover:opacity-80" onClick={handlePrevClick}>
        <IoIosArrowDropleft size={40} className="text-white" />
      </div>
      <div className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer opacity-20 hover:opacity-80" onClick={handleNextClick}>
        <IoIosArrowDropright size={40} className="text-white" />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {articles.map((_, index) => (
          <div
            key={index}
            className={`h-4 rounded-full cursor-pointer ${activeIndex === index ? "w-6 bg-white" : "w-4 bg-white opacity-40"
              }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const BlogSearch = ({ query, onSearch, placeholder }) => {
  const [localQuery, setLocalQuery] = useState(query);

  useEffect(() => {
    setLocalQuery(query);
  }, [query]);

  const handleSearchInput = (e) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);
    onSearch(newQuery); // Remove the delay and update immediately
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={localQuery}
        onChange={handleSearchInput}
        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
      />
      {localQuery && (
        <button
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          onClick={() => {
            setLocalQuery("");
            onSearch(""); // Clear the search and update URL
          }}
        >
          ✖
        </button>
      )}
    </div>
  );
};

const RenderTagFilter = ({ articles, selectedTags, onTagFilter, clearText }) => {
  const allTags = useMemo(() => {
    const tagSet = new Set();
    articles.forEach((post) => post.tagItems.forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet).sort(); // Sort tags alphabetically
  }, [articles]);

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagFilter(tag)}
          className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition duration-300
            ${selectedTags.includes(tag)
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
            }`}
        >
          {tag}
        </button>
      ))}
      {selectedTags.length > 0 && (
        <button
          onClick={() => onTagFilter("")}
          className="inline-block px-3 py-1 rounded-full text-sm font-medium 
                   transition duration-300 bg-gray-200 text-gray-700 hover:bg-gray-300"
        >
          {clearText}
        </button>
      )}
    </div>
  );
};

const BlogPostSection = ({ articles, noArticlesText, readMoreText }) => {
  return (
    <div className="container mx-auto px-4 mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {articles.length > 0 ? (
          articles.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id}>
              <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.imageURL}
                  alt={post.imageALT || "Blog Post Image"}
                  className="w-full h-auto max-h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{post.title}</h2>
                  {post.tagItems && post.tagItems.length > 0 && (
                    <div className="mt-2">
                      {post.tagItems.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-medium mr-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-2 text-sm line-clamp-3">{post.summary}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {readMoreText}
                  </Link>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">{noArticlesText}</p>
        )}
      </div>
    </div>
  );
};

export default TheBlogPage;