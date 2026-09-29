import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const FeaturedArticles = () => {
  const articles = [
    {
      title: "AI Video Generator",
      category: "AI",
      excerpt: "Discover the best free AI video generators to create professional content in seconds.",
      link: "https://www.techwithyash.blog/2026/09/ai-video-generator-best-free-ai-video.html",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-JI7ue31r6T5SdqUY1-WD-FihiGhFDqZt4dG15qN4sFxxpCdjNXVviqOdT5M9Z-H40tIb-irIoOnwUPkrWfJCrupd5gmDWcvPjr7enVCS0F8k-4a9MXCOWGTAOyDEzHpcEpZKcFfAJ_TWOl_2A_v23-h1f18XOGOZ6OG_rB-WA2L1dH89rQxNejPpjrY/s1672/ChatGPT%20Image%20Sep%2011,%202026,%2011_44_43%20AM.png"
    },
    {
      title: "Best AI Image Generator in 2026",
      category: "AI",
      excerpt: "Explore the most powerful AI image generators for realistic and creative art.",
      link: "https://www.techwithyash.blog/2026/08/best-ai-image-generator-in-2026.html",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVBz_YhgiXgeQXVJPW3g-g5mEqyfY3hbhwi2KKZkYjfRk5Z3vbejBwDUQ1DWUc9LfPr5H5Ih94p3FY3mYY0IA4rR7b8vdoLiJuO4MtGVlk_UIKXjZ8pTlB_M508VN_9w-F2pcIhWTDIc4WFHN52uD9393bOk9GICLRYWlhIrSAZqOZrHtLHsTpm_AqZZA/s1536/best-ai-image-generator-2026-thumbnail.webp"
    },
    {
      title: "Best Gaming Phone Under ₹20,000",
      category: "Smartphones",
      excerpt: "Full review of the top 5 budget gaming phones for performance and value.",
      link: "https://www.techwithyash.blog/2026/04/top-5-phones-under-rupees-20000-2026.html",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGCmqpZjAWV0hlLSC_bCVVLNBwRbCP7io1ajdLwU2UsC1_DSC5ip5nS0t0wgQIS8sv0KBfWjH5yCEXmsdpxjwxB4fHjMsn-C_Wz_l0HAZRmrDr3UjGUiRkFJ2Big6qmkF8DapnFabMTJuUOhJjIzgxkk4dD_PmBoqtv2MXVG3AQPeId7ZVWx2jmN-K58E/s650/banner.webp"
    },
    {
      title: "Best Laptop for Programming",
      category: "Laptop",
      excerpt: "Detailed guide on choosing the right laptop for coding and software development.",
      link: "https://www.techwithyash.blog/2026/07/best-laptop-for-programming.html",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjG8IpLLC3LxSWTIPIaCpJXXkGxIOwc-pezxYK1ndtznXYzTHs2pAsbXnEscrrKYd39LvYjo-Clu1AZ3xavyCbc_CVfykpeetj5MZMkyXIjXZ3XWBbnYpCq2Uqh__oXqmccxVb5z-zY8B3kothvM5M3LSJ_IiqKrC9zLK_zzIg8nLJyryXlqaP3wfYl_sM/s1536/new%20blog-optimized.webp"
    }
  ];

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="premium-gradient-text">Articles</span></h2>
            <p className="text-text-muted">Latest insights from the Tech With Yash blog.</p>
          </div>
          <a href="https://www.techwithyash.blog/" target="_blank" rel="noreferrer" className="text-accent-indigo font-bold flex items-center gap-2 hover:underline">
            View All Articles <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((art, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent-indigo text-[10px] font-bold uppercase">
                  {art.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-indigo transition-colors line-clamp-2">
                  {art.title}
                </h3>
                <p className="text-text-muted text-sm mb-6 line-clamp-3">
                  {art.excerpt}
                </p>
                <a
                  href={art.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all duration-300"
                >
                  Read Article <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
