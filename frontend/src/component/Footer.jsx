const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-10 px-4'>
      <div className='max-w-6xl mx-auto'>
        <p className='mb-4'>Questions? Call 1-800-123-4567</p>
        
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <ul>
            <li className='mb-2'><a href='#' className='hover:underline'>FAQ</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Investor Relations</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Privacy</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Speed Test</a></li>
          </ul>

          <ul>
            <li className='mb-2'><a href='#' className='hover:underline'>Help Center</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Jobs</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Cookie Preferences</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Legal Notices</a></li>
          </ul>

          <ul>
            <li className='mb-2'><a href='#' className='hover:underline'>Account</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Ways to Watch</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Corporate Information</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Only on Netflix</a></li>
          </ul>
          <ul>
            <li className='mb-2'><a href='#' className='hover:underline'>Media Center</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Terms of Use</a></li>
            <li className='mb-2'><a href='#' className='hover:underline'>Contact Us</a></li>
          </ul>
        </div>

        <p className='mt-8'>Netflix Clone - All rights reserved © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
