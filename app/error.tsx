"use client";

const error = () => (
  <div className="flex flex-col items-center justify-center gap-5 pt-32">
    <h1 className="text-xl sm:text-3xl">Sorry, not found page,</h1>
    <button
      onClick={() => window.location.reload()}
      className="text-3xl from-black"
      type="button"
    >
      reload Page
    </button>
  </div>
);

export default error;
