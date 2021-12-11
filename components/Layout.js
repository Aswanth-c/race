import Head from "next/head";
import Header from "../components/Header";

export default function Layout({ title = "Hyperscale", breadcrumb, children }) {
  const pageTitle = title !== "Hyperscale" ? `Hyperscale - ${title}` : title;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex justify-center">
        <div className="w-screen max-w-7xl">
          <Header />
          {children}
        </div>
      </div>
    </>
  );
}
