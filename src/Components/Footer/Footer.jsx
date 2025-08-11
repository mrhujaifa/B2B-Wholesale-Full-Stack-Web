import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaGithub,
  FaBehance,
} from 'react-icons/fa';

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
          <div className="flex space-x-4 mb-4 text-gray-600">
            {/* Social media icons */}
            <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebookF size={20} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700"><FaLinkedinIn size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600"><FaInstagram size={20} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600"><FaYoutube size={20} /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-red-500"><FaPinterestP size={20} /></a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><FaGithub size={20} /></a>
            <a href="#" aria-label="Behance" className="hover:text-blue-500"><FaBehance size={20} /></a>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Trade on the go with the <span className="font-bold text-gray-700">B2B.Wholesale.com</span> app
          </p>
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
