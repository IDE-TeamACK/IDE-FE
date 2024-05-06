import Head from "next/head";
import JoinRoomDialogue from "../components/joinroomDialogue";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-10 bg-gradient-to-b from-slate-800 via-bgpink to-bgdark text-white">
      <Head>
        <title>악</title>
        <meta
          name="description"
          content="Code Online is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex items-center justify-center space-x-8">
        <div className="items-center justify-center space-y-4 ">
          <div>
            <JoinRoomDialogue />
          </div>
        </div>
      </div>
    </div>
  );
}
