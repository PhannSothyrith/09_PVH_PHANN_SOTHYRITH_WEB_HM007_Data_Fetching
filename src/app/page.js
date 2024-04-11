import Image from "next/image";
import CardComponent from "./components/CardComponent";
import CardActionMovieComponent from "./components/CardActionMovieComponent";
import CardAnimeComponent from "./components/CardAnimeComponent";
import CardHollywoodComponent from "./components/CardHollywoodComponent";
import { CardDramaComponent } from "./components/CardDramaComponent";
import CardScienceFictionComponent from "./components/CardScienceFictionComponent";
import CardFantasyComponent from "./components/CardFantasyComponent";

export default function Home() {
  return (
    <main className="bg-red-900">
      <div className="h-screen opacity-35 bg-no-repeat bg-cover bg-[url('https://puui.wetvinfo.com/vcover_hz_pic/0/2knhnaakii18oxj1683882661123/0?imageMogr2/thumbnail/600x|imageMogr2/thumbnail/600x')]"></div>
      <h1 className=" ml-11 pt-4 text-white font-bold text-2xl">
        All Movies &nbsp;&nbsp;&#62;
      </h1>
      <CardComponent />
      <h1 className=" ml-11 pt-4 text-white font-bold text-2xl">
        Action Movies &nbsp;&nbsp;&#62;
      </h1>
      <CardActionMovieComponent />
      <h1 className=" ml-11 pt-4 text-white font-bold text-2xl">
        Anime Movies &nbsp;&nbsp;&#62;
      </h1>
      <CardAnimeComponent />
      <h1 className=" ml-11 pt-4 text-white font-bold text-2xl">
        Hollywood Movies &nbsp;&nbsp;&#62;
      </h1>
      <CardHollywoodComponent />
      <h1 className=" ml-11 pt-4 text-white font-bold text-2xl">
        Drama Movies &nbsp;&nbsp;&#62;
      </h1>
      <CardDramaComponent />
      <h1 className=" ml-11 pt-4 text-white font-bold text-2xl">
        Science Fiction Movies &nbsp;&nbsp;&#62;
      </h1>
      <CardScienceFictionComponent />
      <h1 className=" ml-11 pt-4 text-white font-bold text-2xl">
        Fantasy Movies &nbsp;&nbsp;&#62;
      </h1>
      <CardFantasyComponent/>
    </main>
  );
}
