export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">CODEJITSU</h3>
            <p className="text-gray-400 text-sm">
              Software Development Dojo
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Langley, BC, Canada
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                  Let's Talk
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <a
              href="mailto:contact@codejitsu.ca"
              className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
            >
              contact@codejitsu.ca
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Codejitsu Development Studio Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
