import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Explanation from "../components/Explanation";
import Leaderboard from "../components/Leaderboard";
import { getApplications } from "../actions/applications";
import Button from "../components/atoms/Button";
import { useRouter } from "next/router";

// components
import Footer from "../components/Footer";

export default function Home({ projects }) {
  const router = useRouter();

  function LeaderboardButton() {
    return (
      <Button size="large" color="dark" onClick={() => router.push({ pathname: "/dao-race" })}>
        Leaderboard
      </Button>
    );
  }

  return (
    <>
      <Head>
        <title>Hyperscale</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{
          backgroundImage: "url('/img/top-fold-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-center">
          <div
            className="w-screen flex justify-center"
            style={{
              backgroundImage: "url('/img/top-fold-lines-left.png'), url('img/top-fold-lines-right.png')",
              backgroundSize: "contain, contain",
              backgroundPosition: "left bottom, right bottom",
              backgroundRepeat: "no-repeat",
              maxWidth: "calc(80rem + 200px)",
            }}
          >
            <div className="w-screen max-w-7xl px-4 xl:px-0">
              <Header />
              <div className="my-16 sm:max-w-md">
                <Explanation />
                <div className="mt-8">
                  <LeaderboardButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-screen max-w-7xl px-4 xl:px-0">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-12">Trending DAOs</h2>
          <Leaderboard data={projects} numRows={5} />
          <div className="mt-4 text-center">
            <LeaderboardButton />
          </div>
        </div>
      </div>
      <div
        className="mt-14"
        style={{ background: "linear-gradient(180deg, rgba(251,251,255,1) 0%, rgba(255,255,255,1) 100%)" }}
      >
        <div className="flex justify-center">
          <div
            className="flex justify-center"
            style={{
              backgroundImage: "url('/img/top-fold-lines-left.png'), url('img/top-fold-lines-right.png')",
              backgroundSize: "contain, contain",
              backgroundPosition: "left bottom, right bottom",
              backgroundRepeat: "no-repeat",
              maxWidth: "calc(80rem + 200px)",
            }}
          >
            <div className="w-screen text-center max-w-7xl px-4 xl:px-0 py-16">
              <div className="text-indigo-500 uppercase mb-2">Join the race!</div>
              <Image src="/img/hs-icon-community.png" alt="" width={134} height={134} />
              <div className="flex justify-center">
                <h2 className="text-4xl w-screen max-w-3xl">
                  HyperscaleDAO has a strong community of contributors and advisors.
                </h2>
              </div>
              <div className="flex justify-center my-8">
                <div className="w-screen max-w-2xl">
                  Communities are a DAO’s most valuable asset. The winning DAO gets funding and joins the HyperscaleDAO.
                  Recieve $200k for 5% by filling out a simple application. You’ll recieve a decision within 1 week.{" "}
                  {/* <a href="#">Learn More</a> */}
                </div>
              </div>
              <div className="flex justify-center">
                <Button color="primary" el="a" href="https://airtable.com/shrLFCXD7BQXUg97K">
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const projects = JSON.parse(JSON.stringify(await getApplications()));
  return {
    props: {
      projects,
    },
  };
}
