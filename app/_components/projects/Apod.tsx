import NextStep from "../miscellaneous/Nextstep";
import { Tag } from "../miscellaneous/Tag";
import { APOD_screen } from './../icons/APOD/apod_screen';

export default function Apod() {
  return (
    <div className="text-center w-full md:grid md:grid-cols-3 md:gap-5 mt-3">
      <div className="md:col-span-2">
        <div className="grid md:grid-cols-1">
          <APOD_screen />
        </div>
      </div>
      <div className="md:col-span-1">
        <h1 className="text-caption text-primary text-2xl mb-5">
          APOD NASA
        </h1>
        <span>Une petite application qui affiche l'image astronomique du jour (APOD étant Astronomy Picture of The Day) pour m'entraîner à utiliser l'API de la NASA.</span>
        <br />
        <div className="mt-5 grid grid-cols-2 gap-3">
            <Tag text="ReactJS"/>
            <Tag text="NodeJS"/>
            <Tag text="ViteJS"/>
            <Tag text="Tailwind CSS"/>
            <Tag colspan="col-span-2" text="NASA Api"/>
            </div>
      </div>
    </div>
  );
}