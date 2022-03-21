import Router from 'next/router';

export default function Items({ items, hideShowMore = false }: any) {
  const goToUIView = () => {
    Router.push({
      pathname: '/ui',
    });
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto py-16  lg:max-w-none">
        {!hideShowMore && (
          <h2 className="text-2xl font-extrabold text-gray-900">
            Sometimes I like to do some User interfaces
          </h2>
        )}
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
          {items.map((callout: any) => (
            <div key={callout.id} className="group relative">
              <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                {callout.title}
              </p>
            </div>
          ))}
        </div>
        <div className=" mt-16 flex justify-center">
          {!hideShowMore && (
            <button
              type="button"
              onClick={goToUIView}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Show me more :)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
