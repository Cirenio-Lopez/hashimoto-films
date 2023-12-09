import "../styles/globals.scss";
import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

// Components
import Header from "../components/Header";
import Loader from "../components/Loader";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function MyApp({ Component, pageProps, loader }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      <Head>
        <title>
          Hashimoto Films
          {router.pathname == "/"
            ? ""
            : router.pathname == "/portfolio"
            ? "- Portfolio"
            : router.pathname == "/gallery"
            ? "- Gallery"
            : router.pathname == "/about"
            ? "- About"
            : router.pathname == "/resume"
            ? "- Resume"
            : router.pathname == "/contact"
            ? "- Contact"
            : router.pathname == "/404"
            ? "- 404"
            : ""}
        </title>
        <meta
          name="description"
          content="Hashimoto Films: Rising Photographer and Videographer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hashimotofilms" />
        <meta name="twitter:title" content="Hashimoto Films" />
        <meta
          name="twitter:description"
          content="Rising Photographer and Videographer"
        />
        <meta
          name="twitter:image"
          content="https://images.ctfassets.net/metb7zgoa00s/2ITo4ZIKGVAD70o7yT3ZCQ/6a8c6c05a7b4927201eeff0704435472/image-1.webp?h=250"
        />
      </Head>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} images={loader} {...pageProps} />
            </motion.div>
          ) : (
            <>
              <Header />
              <Banner
                location={router.pathname}
                key={"Banner " + router.pathname}
              />
              {!loading && (
                <AnimatePresence exitBeforeEnter initial={false}>
                  <Component
                    {...pageProps}
                    key={router.pathname}
                    location={router.location}
                  />
                </AnimatePresence>
              )}
              <Footer />
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}
