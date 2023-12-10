import { motion } from "framer-motion";
import Vimeo from "../../components/Vimeo";
import Instagram from "../../components/Instagram";
import { createClient } from "contentful";
//Components

//Contentful
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: "AusnZD5XJqAJNKsuqVHSNCIIdrn-uIYUTEQExZbJDTM",
  });

  const res = await client.getEntries({ content_type: "portfolio" });

  return {
    props: {
      portfolio: res.items,
    },
  };
}

export default function Index({ portfolio }) {
  var VimeoData = [];
  portfolio.forEach((item) => {
    VimeoData.push({
      id: item.fields.id,
      url: item.fields.videoLink,
      author: item.fields.author,
      title: item.fields.title,
      description: item.fields.description,
    });
  });

  var InstaData = [
    "https://www.instagram.com/reel/CxY6nPTS8fU/?utm_source=ig_embed&ig_rid=5eac5f8c-180a-4a8a-a7d0-190309a6a899",
    "https://www.instagram.com/reel/CyINUW6uBPg/?utm_source=ig_embed&ig_rid=6b301f21-3d01-4842-aaec-e9524a70661d",
    "https://www.instagram.com/reel/Cv2d0ExADrw/?utm_source=ig_embed&ig_rid=1d8aa442-b788-43ba-ab89-05cb266acffc",
    "https://www.instagram.com/reel/CwbSPeShoe4/?utm_source=ig_embed&ig_rid=520b195a-1343-4ded-90b2-e157d434b51e",
    "https://www.instagram.com/reel/Czy6_LOJ_vw/?utm_source=ig_embed&ig_rid=e6826b21-9577-4b74-8e42-3025c80abf19",
    "https://www.instagram.com/reel/CwwTKRqr7h4/?utm_source=ig_embed&ig_rid=5aebf780-a8b0-4811-b96a-1e0d461a18d8",
    "https://www.instagram.com/reel/CwjLWVwJL1B/?utm_source=ig_embed&ig_rid=76239903-db34-4dc3-86d7-6b44f1ec6c95",
    "https://www.instagram.com/reel/CwjRJgPrbVG/?utm_source=ig_embed&ig_rid=d895c957-e411-4d47-ad0c-8d589cce67b1",
    "https://www.instagram.com/reel/Cwx0eNpxKKO/?utm_source=ig_embed&ig_rid=5cb69c6b-54be-4ecc-9fbf-e92f581312ee",
    "https://www.instagram.com/reel/Cr1AXTvveDn/?utm_source=ig_embed&ig_rid=f82bcaf2-377f-49a8-9008-dfe88707aef3",
    "https://www.instagram.com/reel/ClKtpq5pj9C/?utm_source=ig_embed&ig_rid=fa919552-5183-4ced-9a84-205cfe1b3fe7",
    "https://www.instagram.com/reel/CyIAvZRueC3/?utm_source=ig_embed&ig_rid=8a9b8867-cada-4e6a-8ff8-2f489dfee03c",
    "https://www.instagram.com/reel/CzP3RsuNJOh/?utm_source=ig_embed&ig_rid=c2e46b17-e769-4e50-b21f-f0eb943baf98",
    "https://www.instagram.com/reel/Cm7Imihhy_L/?utm_source=ig_embed&ig_rid=e9d601e8-587c-435a-9035-5b69cd810588",
    "https://www.instagram.com/reel/Cs7G059AYAD/?utm_source=ig_embed&ig_rid=cd97b302-a1cb-476d-9357-5f3255015558",
    "https://www.instagram.com/reel/Cm6sqvqBrjf/?utm_source=ig_embed&ig_rid=6cbd3ca6-dcc8-4330-b49c-b3484169ec42",
    "https://www.instagram.com/reel/CxOkblQSICz/?utm_source=ig_embed&ig_rid=b924709b-5bb2-41b3-a629-c6860052408b",
    "https://www.instagram.com/reel/Cy_KH7lLEQE/?utm_source=ig_embed&ig_rid=df6cf546-a946-44b0-b524-0800eacbc68d",
    "https://www.instagram.com/reel/Cyr4-CCLUhS/?utm_source=ig_embed&ig_rid=4f516f5c-8096-404c-b6ea-cde85e668946",
    "https://www.instagram.com/reel/Crq4b8ZAiL-/?utm_source=ig_embed&ig_rid=5eb9c6fc-d4bb-42cd-b69c-607e09a78316",
    "https://www.instagram.com/reel/CrpfxTDgtDD/?utm_source=ig_embed&ig_rid=c4ffc989-0069-4333-80a1-3a9550023fe8",
    "https://www.instagram.com/reel/Cyyyr7Gvhr3/?utm_source=ig_embed&ig_rid=8daf30cb-8749-44d0-99e0-dd962a366e1e",
    "https://www.instagram.com/reel/CokbyKMp_MC/?utm_source=ig_embed&ig_rid=ba073040-e528-4b1c-ab8a-130cd81be217",
    "https://www.instagram.com/reel/CyJtnPJyhj9/?utm_source=ig_embed&ig_rid=8a2eb5cf-8b0b-45ac-92d0-24df5547f502",
    "https://www.instagram.com/reel/CyMvjHWRDz9/?utm_source=ig_embed&ig_rid=fbcedb3a-68ec-4d84-ab33-60f9e64daa73",
    "https://www.instagram.com/reel/CxtzLtuA17W/?utm_source=ig_embed&ig_rid=7407335e-4709-4adf-8ea8-c3c233073cf0",
    "https://www.instagram.com/reel/CsUnm6nNxyO/?utm_source=ig_embed&ig_rid=02dac0b1-c513-46cf-a3ea-09cf93a4e7ad",
    "https://www.instagram.com/reel/CwdQBNPKOKH/?utm_source=ig_embed&ig_rid=b224f5e0-37fa-4aee-b6d0-42643f7ec0b5",
  ];

  return (
    <>
      <motion.div
        className="transition-image final"
        initial={{ y: 800, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 800, opacity: 0 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1.6,
        }}
      >
        <Instagram instaData={InstaData} />
        {/* <Vimeo VimeoData={VimeoData} /> */}
      </motion.div>
    </>
  );
}
