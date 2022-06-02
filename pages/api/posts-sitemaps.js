import { SitemapStream, streamToPromise } from "sitemap";

export default async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // List of sites
    smStream.write(
      { url: "/about", changefreq: "yearly", priority: "1" },
      { url: "/gallery", changefreq: "daily", priority: "1" },
      { url: "/portfolio", changefreq: "daily", priority: "1" },
      { url: "/contact", changefreq: "yearly", priority: "1" }
    );

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
