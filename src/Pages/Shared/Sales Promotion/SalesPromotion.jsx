import { ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router";

export default function SalesPromotion() {
  return (
    <section
      className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400
 py-12"
    >
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="text-white space-y-6">
          <div className="flex items-center gap-3">
            <Tag className="w-8 h-8 text-yellow-300" />
            <span className="text-yellow-200 font-semibold uppercase tracking-wide">
              Limited Time Offer
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Get <span className="text-yellow-300">60% OFF</span> on Bulk Orders
          </h2>
          <p className="text-lg text-gray-100 max-w-lg">
            Special discount for wholesale customers. Grab the deal before it’s
            gone! Offer valid till{" "}
            <span className="font-semibold text-white">August 31</span>.
          </p>
          <Link to={"/allproducts"}>
            <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-all">
              Claim Offer <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

        {/* Image / Banner */}
        <div className="relative">
          <img
            src="https://i.ibb.co.com/SXKbXSzj/super-sale-banner-template-design-big-sales-special-offer-end-of-season-party-365742-original.jpg"
            alt="Sales Offer"
            className="rounded-2xl shadow-lg"
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
            -60%
          </div>
        </div>
      </div>
    </section>
  );
}
