import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import type { FC } from "react";
import type { InferGetStaticPropsType } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

interface Data {
  heading: string;
  subHeading: string;
  description: string;
}

interface DataWithVideo extends Data {
  video: string;
}

interface Response {
  texts: Data[];
}

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container ${inter.variable} font-sans`}>
        <section className="grid min-h-screen place-content-center gap-4 text-center lg:gap-8">
          <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            Double the hires, half the effort
          </h1>
          <p className="mx-auto max-w-prose text-gray-600 lg:text-lg">
            Open conversations and nurture relationships at scale and be the first choice when your
            ideal candidate is ready to explore.
          </p>
          <button className="mx-auto max-w-max rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors active:bg-gray-300 lg:text-base">
            View Kula Outreach
          </button>
        </section>
        <section className="space-y-4">
          {data.map((element, index) => (
            <div key={index} className="space-y-2">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-sm font-semibold capitalize text-transparent lg:text-base">
                {element.subHeading}
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
                {element.heading}
              </h1>
              <p className="text-gray-600">{element.description}</p>
              <video autoPlay loop src={element.video} />
            </div>
          ))}
        </section>
        <section className="grid min-h-screen place-content-center gap-4 text-center lg:gap-8">
          <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            Turn employee&apos;s networks into your talent pipeline
          </h1>
          <p className="mx-auto max-w-prose text-gray-600 lg:text-lg">
            Bring all professional connections of your existing team members on one platform,
            request referrals in a click, and get an intro in another.
          </p>
          <button className="mx-auto max-w-max rounded-md bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors active:bg-gray-300 lg:text-base">
            View Circles
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1");
  const data: Response = await res.json();

  const videos = [
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4",
    "https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4",
  ];

  const dataWithVideo: DataWithVideo[] = [];
  data.texts.forEach((element, index) => {
    const data = { ...element, video: videos[index] };
    dataWithVideo.push(data);
  });

  return {
    props: {
      data: dataWithVideo,
    },
  };
};
