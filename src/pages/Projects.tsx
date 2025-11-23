import { useEffect } from 'react';
import anime from 'animejs';
import { ExternalLink, Github } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Projects() {
  useEffect(() => {
    anime({
      targets: '.project-card',
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(150),
      duration: 800,
      easing: 'easeOutExpo',
    });
  }, []);

  const projects = [
    {
      title: 'WorkZen',
      description: 'Enterprise SaaS CRM platform designed specifically for service companies, streamlining customer relationship management and business operations.',
      tags: ['SaaS', 'CRM', 'Enterprise'],
      link: 'https://www.workzen.io',
      image: '/assets/images/projects/workzen.png',
    },
    {
      title: 'Taboola',
      description: 'Supporting Taboola\'s marketing initiatives by building and maintaining their marketing websites and digital presence.',
      tags: ['Marketing', 'Web Development'],
      link: 'https://taboola.com',
      image: '/assets/images/projects/taboola.png',
    },
    {
      title: 'Connexity',
      description: 'Building and maintaining comprehensive online presence for Connexity, ensuring optimal performance and user experience.',
      tags: ['Web Development', 'Maintenance'],
      link: 'https://connexity.com',
      image: '/assets/images/projects/connexity.png',
    },
    {
      title: 'Skimlinks',
      description: 'Developing and maintaining Skimlinks\' digital infrastructure, ensuring seamless online operations and user engagement.',
      tags: ['Web Development', 'Maintenance'],
      link: 'https://skimlinks.com',
      image: '/assets/images/projects/skimlinks.png',
    },
    {
      title: 'Shopyourlikes',
      description: 'Creating and maintaining the online platform for Shopyourlikes, delivering a robust and engaging user experience.',
      tags: ['E-commerce', 'Web Development'],
      link: 'https://shopyourlikes.com',
      image: '/assets/images/projects/shopyourlikes.png',
    },
    {
      title: 'Crazy Labs',
      description: 'Building and maintaining Crazy Labs\' web presence, supporting their mobile gaming business with modern web solutions.',
      tags: ['Gaming', 'Web Development'],
      link: 'https://crazylabs.com',
      image: '/assets/images/projects/crazylabs.png',
    },
    {
      title: 'Unitronics',
      description: 'Comprehensive web development and maintenance for Unitronics\' multiple websites, supporting their industrial automation solutions.',
      tags: ['Corporate', 'Multi-site'],
      link: 'https://unitronicsplc.com',
      image: '/assets/images/projects/unitronics.png',
    },
    {
      title: 'Studies.co.il',
      description: 'Developing and maintaining a comprehensive e-learning platform for online university education, serving thousands of students.',
      tags: ['E-learning', 'Education', 'Platform'],
      link: 'https://studies.co.il',
      image: '/assets/images/projects/studies.png',
    },
    {
      title: 'Wingz Givat Shmuel',
      description: 'Modern restaurant website featuring online ordering, multi-language support (Hebrew/English), and PWA capabilities. Built with React, TypeScript, and Tailwind CSS.',
      tags: ['React', 'TypeScript', 'PWA'],
      link: 'https://wingz.co.il',
      image: '/assets/images/projects/wingz.png',
    },
    {
      title: 'Veteran HVAC',
      description: 'Full-service web development, maintenance, and marketing strategy leadership for Veteran HVAC services in Canada.',
      tags: ['Marketing', 'Web Development', 'SEO'],
      link: 'https://veteranhvac.ca',
      image: '/assets/images/projects/veteran.png',
    },
    {
      title: 'Garage Door Pros',
      description: 'Building and maintaining web presence while leading all marketing initiatives for Garage Door Pros services in Canada.',
      tags: ['Marketing', 'Web Development', 'SEO'],
      link: 'https://garagedoorpros.ca',
      image: '/assets/images/projects/garage-door-pros.png',
    },
    {
      title: 'Profix Garage Door',
      description: 'Full-scale web development, ongoing maintenance, and strategic marketing leadership for Profix Garage Door services.',
      tags: ['Marketing', 'Web Development', 'SEO'],
      link: 'https://profixgaragedoor.ca',
      image: '/assets/images/projects/profixgaragedoor.png',
    },
    {
      title: 'DD Garage Door Repair',
      description: 'Web development, maintenance, and comprehensive marketing leadership for DD Garage Door Repair services.',
      tags: ['Marketing', 'Web Development', 'SEO'],
      link: 'https://ddgaragedoorrepair.com',
      image: '/assets/images/projects/ddgaragedoor.png',
    }
  ];

  return (
    <>
      <SEO
        title="Our Projects"
        description="Explore our portfolio of successful web development projects, from SaaS platforms to e-commerce solutions."
        path="/projects"
      />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of our recent work and the solutions we've crafted for our clients
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card opacity-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/10 group flex flex-col"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative group-hover:from-primary-900/20 group-hover:to-gray-900 transition-all">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const placeholder = target.nextElementSibling as HTMLElement;
                      if (placeholder) placeholder.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center">
                    <span className="text-6xl font-bold text-gray-700 group-hover:text-primary-500/30 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags and Links - Pushed to bottom */}
                  <div className="mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary-500/10 text-primary-400 text-xs rounded-full border border-primary-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.link !== '#' && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                          Visit Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-lg mb-6">
              Interested in working with us?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-500/50"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
