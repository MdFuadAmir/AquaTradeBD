

const Loading = () => {
    return (
            <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-teal-500 mx-auto mb-6"></div>
        <h2 className="text-2xl font-semibold text-teal-600 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we fetch the data.</p>
      </div>
    </div>

    );
};

export default Loading;