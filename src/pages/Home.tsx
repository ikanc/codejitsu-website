import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { Code2, Bug, Zap, Users } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animations
    if (heroRef.current) {
      anime.timeline({
        easing: 'easeOutExpo',
      })
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
      })
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
      }, '-=600')
      .add({
        targets: '.hero-cta',
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 600,
      }, '-=400');
    }

    // Services animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: '.service-card',
              opacity: [0, 1],
              translateY: [40, 0],
              delay: anime.stagger(200),
              duration: 800,
              easing: 'easeOutExpo',
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code2 size={48} className="text-primary-400" />,
      title: 'Web Development',
      description: 'We help our customers take their vision and make it a reality. How, you may ask? - with code, of course!',
    },
    {
      icon: <Bug size={48} className="text-primary-400" />,
      title: 'Bug Fighting',
      description: 'Our code-ninjas search, locate and eliminate those stealth bugs that hide in your codebase.',
    },
    {
      icon: <Zap size={48} className="text-primary-400" />,
      title: 'Optimization',
      description: 'We teach your code the secrets of the dojo, making it stronger, faster, and definitely awesome.',
    },
  ];

  const clients = [
    'Taboola',
    'Connexity',
    'Skimlinks',
    'WorkZen',
    'Unitronics',
  ];

  return (
    <>
      <SEO
        title="Codejitsu Development Studio | Software Development Dojo"
        description="Expert web development, bug fighting, and code optimization services. Based in Langley, BC, Canada. Let's make your vision a reality."
        path="/"
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-black to-black"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl font-bold mb-6 opacity-0">
            <span className="text-gradient">CODEJITSU</span>
          </h1>
          <p className="hero-subtitle text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 opacity-0">
            Software Development Dojo
          </p>
          <p className="hero-subtitle text-lg sm:text-xl text-gray-400 mb-12 opacity-0">
            Where Code Meets Martial Arts Mastery
          </p>
          <div className="hero-cta opacity-0">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-500/50"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="text-gradient">Master</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Three core disciplines define our approach to software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card opacity-0 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:border-primary-500/50 transition-all hover:shadow-lg hover:shadow-primary-500/10"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users size={48} className="text-primary-400 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className="text-2xl font-semibold text-gray-500 hover:text-primary-400 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/projects"
              className="inline-block px-8 py-3 border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white font-semibold rounded-lg transition-all"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-gradient">Project</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-500/50"
          >
            Book a Meeting
          </a>
        </div>
      </section>
    </>
  );
}
