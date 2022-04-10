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

function MyApp({ Component, pageProps }) {
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
          Hashimoto Films{" "}
          {router.pathname == "/"
            ? ""
            : router.pathname == "/portfolio"
            ? "- Portfolio"
            : router.pathname == "/gallery"
            ? "- Gallery"
            : router.pathname == "/about"
            ? "- About"
            : router.pathname == "/contact"
            ? "- Contact"
            : router.pathname == "/404"
            ? "- 404"
            : ""}
        </title>
        <meta
          name="description"
          content="Cirenio Bryan Lopez's personal website"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader">
              <Loader setLoading={setLoading} />
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

export default MyApp;
