'use client';

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Prediction } from "replicate";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/predictions", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });

    let prediction = await response.json();

    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (prediction?.status !== "succeeded" && prediction?.status !== "failed") {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction?.id, { cache: "no-store" });
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      setPrediction(prediction);
    }
  };

  const handleDownload = () => {
    if (prediction) {
      const downloadLink = document.createElement("a");
      downloadLink.href = prediction.output[prediction.output.length - 1];
      downloadLink.download = "generated_image.png";
      downloadLink.click();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title className="title-link">The GGReplicater</title>
      </Head>

      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-8 bg-gray-100">
        <div className="bg-white p-10 border border-gray-300 rounded-3xl shadow-lg max-w-3xl w-full">
          <h1 className="text-2xl font-bold text-center mb-4 text-blue-800">Generate Images</h1>
          <div className="flex">
            <a href="#" className="button-link">
              Website
            </a>
            <a href="#" className="button-link">
              GitHub
            </a>
            <a href="#" className="button-link">
              Twitter
            </a>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <input
              type="text"
              name="prompt"
              placeholder="Enter a prompt to display an image"
              className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />

            <button
              type="submit"
              className="px-4 py-2 mt-4 w-full bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Go!
            </button>
          </form>

          {error && <div className="mt-4 text-red-500">{error}</div>}

          {prediction ? (
            <div className="mt-4">
              {prediction.output && (
                <div className="flex flex-col items-center justify-center w-full">
                  <Image
                    src={prediction.output[prediction.output.length - 1]}
                    alt="output"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-md border-gray-300"
                  />
                  <button
                    onClick={handleDownload}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Download Image
                  </button>
                </div>
              )}
              <p className="mt-4 text-lg text-gray-700">Status: {prediction.status}</p>
            </div>
          ) : null}

        </div>
      </main>

      <Footer />

    </div>
  );
}
