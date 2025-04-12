import React, { useState } from "react";

export default function EmajGPTApp() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    // Placeholder image generation logic (will be replaced with real API later)
    setTimeout(() => {
      setImageUrl("https://placekitten.com/800/600"); // Demo image
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">EmajGPT - ছবি বানাও</h1>

      <input
        type="text"
        className="p-2 border border-gray-300 rounded w-full max-w-md mb-4"
        placeholder="তুই কি ছবি চাস?"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateImage}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        ছবি বানাও
      </button>

      {loading && <p className="mt-4">ছবি বানানো হইতেছে...</p>}

      {imageUrl && !loading && (
        <img
          src={imageUrl}
          alt="Generated"
          className="mt-6 rounded-lg shadow-md max-w-full"
        />
      )}
    </div>
  );
}
