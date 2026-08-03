import React from 'react';

export interface BlogPost {
  id: string | number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  slug?: string;
}

interface OurBlogsProps {
  /** Main featured blog post displayed on the right */
  featuredPost?: BlogPost;
  /** List of secondary blog posts displayed on the left column */
  recentPosts?: BlogPost[];
  /** Custom Clock Icon component or SVG path element if needed */
  clockIcon?: React.ReactNode;
}

const DefaultClockIcon = () => (
  <svg
    className="w-4 h-4 text-slate-400 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const defaultFeaturedPost: BlogPost = {
  id: 'featured-1',
  title: 'Understanding the Importance of a Dignified Final Farewell',
  description:
    'Discover how thoughtfully designed memorial spaces and compassionate services provide comfort, respect and peace during life\'s most emotional moments.',
  date: 'August 19, 2025',
  imageUrl: '/images/hero/blogs/Tax-saving.png',
  slug: '/blogs/understanding-dignified-final-farewell',
};

const defaultRecentPosts: BlogPost[] = [
  {
    id: 'recent-1',
    title: 'Honouring Traditions in a Modern Memorial Space',
    description:
      'Learn how Vaikunta Mahaprasthanam preserves cultural values while offering modern facilities that support meaningful and respectful final rites.',
    date: 'June 03, 2025',
    imageUrl: '/images/hero/blogs/Financial-Innovation.png',
    slug: '/blogs/honouring-traditions',
  },
  {
    id: 'recent-2',
    title: 'Creating a Peaceful Environment for Reflection & Remembrance',
    description:
      'Explore how serene landscapes and purposefully designed spaces help families gather, reflect and celebrate the lives of their loved ones.',
    date: 'May 27, 2025',
    imageUrl: '/images/hero/blogs/Financial-Innovation(2).png',
    slug: '/blogs/creating-peaceful-environment',
  },
];

export const OurBlogsSection: React.FC<OurBlogsProps> = ({
  featuredPost = defaultFeaturedPost,
  recentPosts = defaultRecentPosts,
  clockIcon,
}) => {
  const ClockIconComponent = clockIcon || <DefaultClockIcon />;

  return (
    <section className="bg-[#FFFFFF] py-14 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Title + 2 Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight pb-2">
              Our Blogs
            </h2>

            {recentPosts.map((post) => (
              <article
                key={post.id}
                className=" p-4 md:p-5 flex flex-col sm:flex-row gap-4  transition-shadow duration-200"
              >
                {/* Thumbnail Image */}
                <div className="relative w-full sm:w-36 h-44 flex-shrink-0 rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div className="space-y-1.5">
                    <h3 className="text-lg  font-sans text-[#1E293B] leading-snug  transition-colors">
                      <a href={post.slug || '#'}>{post.title}</a>
                    </h3>
                    <p className="text-xs text-[#1E293B] font-manrope line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  {/* Date & Clock Icon */}
                  <div className="flex items-center gap-1.5 pt-2 text-xs text-slate-400 font-medium">
                    {ClockIconComponent}
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Featured Card aligned to top */}
          <div className="lg:col-span-7">
            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
              {/* Featured Cover Image */}
              <div className="relative w-full h-60 md:h-75 lg:h-[300px] bg-slate-100 overflow-hidden flex-shrink-0">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Featured Body Content */}
              <div className="p-6 md:p-7 flex flex-col space-y-3">
                <h3 className="text-xl md:text-2xl font-manrope text-slate-900 leading-snug  transition-colors">
                  <a href={featuredPost.slug || '#'}>{featuredPost.title}</a>
                </h3>
                <p className="text-xs md:text-sm text-[#1E293B] font-manrope leading-relaxed">
                  {featuredPost.description}
                </p>

                {/* Date & Clock Icon */}
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-400 font-medium pt-1">
                  {ClockIconComponent}
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurBlogsSection;