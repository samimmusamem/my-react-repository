import React from 'react';

const PriveWebsite = () => {
  // Projects Array Data
  const projects = [
    {
      id: 1,
      year: '2026',
      title: 'TrailType',
      description: 'Modern design inspired by the great outdoors.',
      imageUrl: 'src/samim3.avif',
      isFeatured: false,
    },
    {
      id: 2,
      year: '2026',
      title: 'The Spark Sessions',
      description: 'A podcast for creators chasing meaningful work.',
      imageUrl: 'src/samim1.avif',
      isFeatured: true,
    },
    {
      id: 3,
      year: '2025',
      title: 'Into the Wild',
      description: 'A raw journey through nature’s extremes.',
      imageUrl: 'src/samim2.avif',
      isFeatured: false,
    },
  ];

  // Blog Posts Array Data
  const posts = [
    {
      id: 1,
      date: 'Jul 2025',
      title: 'How I built my Framer template empire',
      slug: 'framer-template-empire'
    },
    {
      id: 2,
      date: 'Jun 2025',
      title: 'My journey from \$0 to \$10K MRR',
      slug: 'journey-to-10k-mrr'
    },
    {
      id: 3,
      date: 'Jun 2025',
      title: 'Is vibe coding here to stay?',
      slug: 'vibe-coding-here-to-stay'
    },
    {
      id: 4,
      date: 'May 2025',
      title: "Don't complain, create!",
      slug: 'dont-complain-create'
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-stone-900 select-none pb-20">
      
      {/* 1. NAVIGATION HEADER */}
      <header className="max-w-[1040px] mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <a href="#" className="bg-[#FF6B00] text-white font-bold text-sm px-2.5 py-1 rounded tracking-tight hover:text-[#FF6B99]">
            LW
          </a>
          <span className="text-stone-200 text-lg">|</span>
          <nav className="flex items-center space-x-5 text-[15px] font-normal text-stone-600">
            <a href="#" className="hover:text-[#FF6B00] transition-colors duration-150">About</a>
            <a href="#" className="hover:text-[#FF6B00] transition-colors duration-150">Work</a>
            <a href="#" className="hover:text-[#FF6B00] transition-colors duration-150">Blog</a>
            <a href="#" className="hover:text-[#FF6B00] transition-colors duration-150">Contact</a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-stone-700 hover:text-[#FF6B00] transition-colors duration-150">
            <svg className="w-[15px] h-[15px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="text-stone-700 hover:text-[#FF6B00] transition-colors duration-150">
            <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <span className="text-stone-200 text-lg">|</span>
          <button className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center hover:bg-stone-100/70 transition-colors duration-150 shadow-sm">
            <svg className="w-4 h-4 text-stone-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.75 16.5A10.05 10.05 0 0 1 12 21a10 10 0 0 1 0-20 10.05 10.05 0 0 1 1.5.11 8.5 8.5 0 1 0 8.25 15.39z" />
            </svg>
          </button>
        </div>
      </header>

      {/* 2. HERO INTRO SECTION */}
      <section className="max-w-[1040px] mx-auto px-6 pt-20 pb-12">
        <h1 className="text-[99px] font-bold tracking-tight text-black leading-[1.05] mb-8">
          Luke Williams
        </h1>

        <div className="flex justify-between items-center border-b border-stone-100 pb-12 mb-10 text-[20px] font-medium text-stone-800">
          <div>Founder - Matrix Designs</div>
          <div className="flex items-center">
            <span className="mr-1.5" role="img" aria-label="pin">📍</span>
            New York
          </div>
        </div>

        <div className="max-w-[840px] space-y-6 text-[18px] text-stone-600 font-normal leading-[1.65]">
          <p>
            Hi there! I'm an adventurer based in New York, with a background in the entertainment industry. 
            These days, I'm driven by a love for creativity and innovation, constantly exploring new ways 
            to connect ideas and build something meaningful.
          </p>
          <p>
            When I'm not immersed in my projects, you'll find me outdoors - scaling rock faces, hiking scenic 
            trails, and embracing the energy of nature. Life is all about climbing to new heights, both 
            literally and figuratively!
          </p>
        </div>
      </section>

      {/* 3. LATEST PROJECTS SECTION */}
      <section className="max-w-[1040px] mx-auto px-6 py-12">
        <div className="flex justify-between items-baseline border-b border-stone-100 pb-5 mb-8">
          <h2 className="text-[32px] font-bold text-black tracking-tight">Latest Projects</h2>
          <a href="#" className="text-[15px] font-normal text-stone-600 hover:text-[#FF6B00] transition-colors duration-150">
            View all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col">
              <div className="relative aspect-[1.53/1] rounded-xl overflow-hidden bg-stone-100 mb-5">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-[76px] font-bold tracking-normal opacity-[0.35] mix-blend-overlay">
                    {project.year}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2.5">
                <h3 className={`text-[21px] font-bold tracking-tight ${
                  project.isFeatured ? 'text-black' : 'text-black'
                }`}>
                  {project.title}
                </h3>
                {project.isFeatured && (
                  <span className="inline-flex items-center justify-center w-[17px] h-[17px] rounded border border-[#FF6B00] text-[#FF6B00]">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                )}
              </div>
              <p className="text-[15px] text-stone-600 font-normal leading-relaxed max-w-[95%]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LATEST POSTS SECTION */}
      <section className="max-w-[1040px] mx-auto px-6 py-12">
        <div className="flex justify-between items-baseline border-b border-stone-100 pb-5 mb-6">
          <h2 className="text-[32px] font-bold text-black tracking-tight">Latest Posts</h2>
          <a href="#" className="text-[15px] font-normal text-stone-600 hover:text-[#FF6B00] transition-colors duration-150">
            View all
          </a>
        </div>

        <div className="flex flex-col">
          {posts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center py-4 border-b border-stone-100 last:border-0 hover:hover:bg-stone-50/40 px-2 -mx-2 rounded-lg transition-colors duration-150"
            >
              <div className="text-[15px] text-stone-400 w-28 shrink-0 mb-1 sm:mb-0">
                {post.date}
              </div>
              <h3 className="text-[17px] font-medium text-stone-900 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all duration-200 ease-out">
                {post.title}
              </h3>
            </a>
              ))}
        </div>
         </section>

    </div>
  );
};




 

  // const handleSubscribe = (e) =
  //   e.preventDefault();
  //   console.log('Subscribed:', email);
  //   setEmail('');
  

  // return (
  //   <footer className="w-full bg-[#FCFCFC] py-16 px-6 font-sans antialiased text-[#1A1A1A] select-none">
  //     <div className="max-w-[1040px] mx-auto">
        
  //       {/* Newsletter Box Container */}
  //       <div className="w-full bg-[#F4F4F4] border border-[#E9E9E9] rounded-[14px] p-8 sm:p-[42px] flex flex-col sm:flex-row items-start gap-8 sm:gap-10 mb-14">
          
  //         {/* Left Thumbnail Image */}
  //         <div className="w-full sm:w-[260px] aspect-[1.48/1] rounded-xl overflow-hidden shrink-0 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
  //           <img 
  //             src="https://unsplash.com" 
  //             alt="Hiker with open arms looking over mountains" 
  //             className="w-full h-full object-cover grayscale-[8%] contrast-[1.02]"
  //           />
  //         </div>

  //         {/* Right Content Area */}
  //         <div className="w-full pt-1 flex flex-col justify-center">
  //           <h2 className="text-[28px] sm:text-[31px] font-bold tracking-tight text-[#111111] mb-[18px] leading-none">
  //             Subscribe to my Newsletter
  //           </h2>

  //           {/* Inline Email Input Form Row */}
  //           <form onSubmit={handleSubscribe} className="flex items-center gap-3 w-full max-w-[465px] mb-[18px]">
  //             <input 
  //               type="email"
  //               required
  //               placeholder="name@email.com"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //               className="w-full bg-[#FDFDFD] border border-[#DCDCDD] text-[15px] font-normal text-black placeholder-[#8C8C8C] rounded-lg px-3.5 py-2 outline-none focus:border-[#B5B5B6] transition-colors shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
  //             />
  //             <button 
  //               type="submit"
  //               className="bg-[#2E2E2E] hover:bg-black text-white font-medium text-[15px] px-5 py-2 rounded-lg transition-colors duration-150 shrink-0"
  //             >
  //               Subscribe
  //             </button>
  //           </form>

  //           {/* Description Subtext */}
  //           <p className="text-[15px] text-[#555555] font-normal leading-[1.45] max-w-[500px]">
  //             Sign up to stay updated about my latest work and adventures.{' '}
  //             <span className="italic font-medium text-[#737373]">No Spam, No BS. Promise!</span>
  //           </p>
  //         </div>
  //       </div>

  //       {/* Separator Line Rule */}
  //       <hr className="border-[#EAEAEA] w-full mb-8" />

  //       {/* Bottom Metadata Info Copyright Bar */}
  //       <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-[15px] text-[#616161]">
  //         <div className="font-normal tracking-wide">
  //           © Luke Williams | 2026
  //         </div>
          
  //         <nav className="flex items-center space-x-[22px] font-normal">
  //           <a href="#" className="text-[#FF6B00] hover:opacity-90 transition-opacity">Home</a>
  //           <a href="#" className="hover:text-black transition-colors duration-150">About</a>
  //           <a href="#" className="hover:text-black transition-colors duration-150">Work</a>
  //           <a href="#" className="hover:text-black transition-colors duration-150">Blog</a>
  //           <a href="#" className="hover:text-black transition-colors duration-150">Contact</a>
  //         </nav>
  //       </div>

  //     </div>
  //   </footer>
  // );

     

export default PriveWebsite;












        
