import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4 md:px-8 lg:px-16 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Get support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Live chat</a></li>
            <li><a href="#" className="hover:underline">Check order status</a></li>
            <li><a href="#" className="hover:underline">Refunds</a></li>
            <li><a href="#" className="hover:underline">Report abuse</a></li>
          </ul>
        </div>

        {/* Payments and protections */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Payments and protections</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Safe and easy payments</a></li>
            <li><a href="#" className="hover:underline">Money-back policy</a></li>
            <li><a href="#" className="hover:underline">On-time shipping</a></li>
            <li><a href="#" className="hover:underline">After-sales protections</a></li>
            <li><a href="#" className="hover:underline">Product monitoring services</a></li>
          </ul>
        </div>

        {/* Source on B2B.Wholesale.com */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Source on B2B.Wholesale.com</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Request for Quotation</a></li>
            <li><a href="#" className="hover:underline">Membership program</a></li>
            <li><a href="#" className="hover:underline">B2B.Wholesale.com Logistics</a></li>
            <li><a href="#" className="hover:underline">Sales tax and VAT</a></li>
            <li><a href="#" className="hover:underline">B2B.Wholesale.com Reads</a></li>
          </ul>
        </div>

        {/* Sell on B2B.Wholesale.com */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Sell on B2B.Wholesale.com</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Start selling</a></li>
            <li><a href="#" className="hover:underline">Seller Central</a></li>
            <li><a href="#" className="hover:underline">Become a Verified Supplier</a></li>
            <li><a href="#" className="hover:underline">Partnerships</a></li>
            <li><a href="#" className="hover:underline">Download the app for suppliers</a></li>
          </ul>
        </div>

        {/* Get to know us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Get to know us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About B2B.Wholesale.com</a></li>
            <li><a href="#" className="hover:underline">Corporate responsibility</a></li>
            <li><a href="#" className="hover:underline">News center</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Payment methods and social media */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6 md:mb-0">
          {/* Replace with actual payment method icons or svgs if available */}
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=ID+Check" alt="ID Check" className="h-6 rounded" />
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=Visa" alt="Visa" className="h-6 rounded" />
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=Mastercard" alt="Mastercard" className="h-6 rounded" />
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=PayPal" alt="PayPal" className="h-6 rounded" />
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=GPay" alt="Google Pay" className="h-6 rounded" />
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=ApplePay" alt="Apple Pay" className="h-6 rounded" />
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=Discover" alt="Discover" className="h-6 rounded" />
          <img src="https://placehold.co/60x30/FFFFFF/000000?text=Amex" alt="American Express" className="h-6 rounded" />
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            {/* Social media icons as inline SVGs */}
            <a href="#" className="text-gray-500 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.248-1.333 1.124-1.333h2.876v-5h-4.435c-4.111 0-5.565 3.033-5.565 5.009v2.991z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.003 0-5.441 2.438-5.441 5.441 0 .426.048.834.138 1.226-4.523-.225-8.532-2.39-11.226-5.69-.467.809-.733 1.743-.733 2.746 0 1.882.959 3.535 2.419 4.504-.89-.028-1.729-.271-2.465-.64v.068c0 2.641 1.88 4.842 4.364 5.335-.432.118-.881.181-1.341.181-.328 0-.64-.031-.95-.089.692 2.164 2.716 3.739 5.093 3.784-1.879 1.474-4.516 2.352-7.279 2.352-.471 0-.936-.027-1.391-.081 2.428 1.553 5.313 2.465 8.435 2.465 10.126 0 15.632-8.381 15.632-15.632 0-.238-.006-.474-.017-.708.974-.704 1.812-1.596 2.479-2.617z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.85-1.148 3.252-1.691 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.07-4.85 1.148-3.252 1.691-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.354.212-6.149 2.012-6.36 6.357-.058 1.28-.073 1.688-.073 4.948 0 3.259.014 3.667.072 4.947.212 4.354 2.012 6.149 6.357 6.36.27.013.51.026.75.035.32.012.637.025.955.034 1.455.039 1.792.039 4.948.039s3.493 0 4.948-.039c.318-.009.635-.022.955-.034.24-.009.48-.022.75-.035 4.346-.211 6.14-2.007 6.357-6.357.058-1.28.073-1.688.073-4.948 0-3.259-.014-3.667-.072-4.947-.212-4.354-2.012-6.149-6.357-6.36-1.28-.058-1.688-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.478-10.422c-.528 0-.956.428-.956.956s.428.956.956.956.956-.428.956-.956-.429-.956-.956-.956z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 16.297c-.77.106-2.839.213-4.938.213-3.084 0-4.946-.169-4.946-.169s-.825-.09-1.254-.09c-1.392 0-1.748.972-1.748 2.05v2.855c.162.062.33.12.5.176.629.19 1.139.297 1.8.297 1.15 0 10.485-.015 10.485-.015.703-.004 1.144-.069 1.258-.094l.092-.016v-2.855c-.001-1.077-.357-2.05-1.749-2.05-.429 0-1.254.09-1.254.09zm-6.044-6.297l5.544 3.007c-.015.421-.044.832-.087 1.233-.031.288-.06.577-.09.864l-5.367-2.909c-.066-.036-.129-.074-.188-.114-.492-.325-1.018-.675-1.579-1.053-.13-.087-.257-.174-.383-.262-.485-.341-.954-.672-1.393-.974-.112-.077-.221-.153-.327-.226l-1.04-.698c.453-.787 1.059-1.468 1.776-2.015.602-.455 1.272-.82 1.993-1.109.176-.07.35-.136.52-.198.808-.291 1.636-.457 2.479-.497.103-.005.207-.008.312-.008.069 0 .138.002.207.004.148.006.295.014.44.026.852.073 1.674.225 2.443.45.168.049.336.103.5.16.89.299 1.704.686 2.428 1.157l-6.495 3.522zm-2.049-5.187c.394-.498.814-.949 1.254-1.353l.429-.408.854-.836c.219-.214.444-.421.673-.623.633-.56 1.341-1.037 2.091-1.428.175-.091.352-.178.53-.262.839-.395 1.716-.677 2.624-.849.227-.043.454-.084.68-.12.483-.075.967-.132 1.451-.174l1.39-.125c-.443-.911-.963-1.748-1.539-2.493-.664-.852-1.405-1.597-2.213-2.222-.194-.148-.389-.294-.582-.44-.817-.63-1.67-.999-2.559-1.107-.224-.027-.449-.047-.674-.06-.484-.026-.968-.041-1.452-.041-.219 0-.437.005-.655.015-.221.01-.442.025-.663.045-.968.084-1.928.25-2.859.492-.195.05-.39.102-.585.155-.918.25-1.802.585-2.645.992-1.348.643-2.531 1.457-3.486 2.417-.95.955-1.716 2.05-2.27 3.242-.206.444-.396.89-.571 1.334-.14.351-.274.704-.401 1.057-.101.282-.195.565-.282.849-.247.78-.444 1.574-.587 2.378-.052.285-.096.57-.132.854-.055.438-.087.876-.087 1.314 0 .285.01.569.029.853.042.639.136 1.272.283 1.895.109.467.241.93.395 1.389.261.782.583 1.543.967 2.282.164.316.337.627.52.933.48.818 1.063 1.583 1.74 2.286l.668.736.853.916c.321.346.65.684.985 1.015.42.416.85.815 1.288 1.196.861.761 1.781 1.428 2.748 1.986.236.136.475.267.716.395.967.519 1.996.945 3.072 1.275.253.077.508.15.763.218.665.176 1.336.31 2.012.404.148.02.296.036.444.05.748.067 1.493.099 2.238.099.255 0 .509-.002.763-.005.176-.002.352-.005.527-.008.857-.015 1.71-.048 2.553-.102.25-.016.499-.033.748-.057.65-.062 1.294-.14 1.928-.231.258-.037.514-.076.769-.118.847-.14 1.67-.323 2.469-.548.169-.047.338-.097.507-.15l.659-.229c.774-.265 1.5-.595 2.174-.984.305-.175.6-.36.883-.556.745-.516 1.41-1.116 1.977-1.784.588-.693 1.077-1.464 1.467-2.3.15-.327.291-.657.417-.989.227-.604.417-1.22.56-1.84.113-.49.199-.982.261-1.476.046-.372.074-.745.084-1.12.01-.397.01-.796 0-1.194-.01-.371-.037-.741-.081-1.109-.136-.957-.384-1.9-.73-2.805-.183-.483-.393-.957-.63-.142-.87-.492-1.688-1.042-2.457-1.64-.176-.139-.355-.274-.536-.407-.532-.395-1.066-.777-1.599-1.144-.146-.1-.293-.203-.44-.306-.475-.333-.954-.66-1.436-.979-1.082-.71-2.222-1.285-3.417-1.724z"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.084 19.167c-.23-.004-.457-.015-.68-.035-1.4-.131-2.529-.53-3.235-1.028-.707-.499-1.096-1.168-1.272-1.996-.062-.284-.092-.581-.092-.888v-7.39c0-.285.03-.58.092-.865.176-.827.565-1.496 1.272-1.995.706-.498 1.835-.897 3.235-1.028.223-.02.45-.031.68-.035h6.168c.23.004.457.015.68.035 1.4.131 2.529.53 3.235 1.028.707.499 1.096 1.168 1.272 1.996.062.284.092.581.092.888v7.39c0-.285-.03-.58-.092-.865-.176-.827-.565-1.496-1.272-1.995-.706-.498-1.835-.897-3.235-1.028-.223-.02-.45-.031-.68-.035h-6.168zm7.396-9.167h-2.215v6.5h2.215v-6.5zm-5.215 0h-2.181v6.5h2.181v-6.5zm-1.071-1.396c0-.965-.784-1.75-1.75-1.75s-1.75.785-1.75 1.75.784 1.75 1.75 1.75 1.75-.785 1.75-1.75zm5.727 1.396c0-.965-.784-1.75-1.75-1.75s-1.75.785-1.75 1.75.784 1.75 1.75 1.75 1.75-.785 1.75-1.75z"/></svg>
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-4">Trade on the go with the <span className="font-bold text-gray-700">B2B.Wholesale.com</span> app</p>
          <div className="flex space-x-4">
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-10 rounded-md" /></a>
            <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10 rounded-md" /></a>
          </div>
        </div>
      </div>

      {/* Legal and copyright */}
      <div className="max-w-7xl mx-auto mt-10 pt-8 border-t border-gray-300 text-center text-xs text-gray-500 space-y-2">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <a href="#" className="hover:underline">Policies and rules</a>
          <a href="#" className="hover:underline">Legal Notice</a>
          <a href="#" className="hover:underline">Product Listing Policy</a>
          <a href="#" className="hover:underline">Intellectual Property Protection</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Integrity Compliance</a>
        </div>
        <p>
          © 1999-2025 B2B.Wholesale.com. 版权所有. 杭州阿里巴巴网络科技有限公司 版权所有.
          <a href="#" className="hover:underline ml-1">浙公网安备33010002000065号</a>
          <a href="#" className="hover:underline ml-1">浙ICP备09002981号-6</a>
        </p>
        <p>
          <a href="https://rule.B2B.Wholesale.com/rule/detail/2034.htm" className="hover:underline">B2B.Wholesale.com Site Map</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
