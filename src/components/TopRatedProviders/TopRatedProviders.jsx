import { useEffect, useState } from "react";

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetch("/topRatedProvider.json")
      .then((res) => res.json())
      .then((data) => setProviders(data));
  }, []);

  return (
    <section className="my-16 px-6">
      <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#28807e] mb-8 alegreya-font">
        Top Rated Providers
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-teal-500"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {provider.name}
            </h3>
            <p className="text-gray-500">{provider.title}</p>
            <div className="mt-3 flex justify-center items-center gap-2 text-yellow-500">
              <span className="text-lg font-bold">{provider.rating} ⭐</span>
              <span className="text-gray-500 text-sm">
                ({provider.students} students)
              </span>
            </div>
            <button className="mt-5 bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-all">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;
