
import { Gameplay1_MadScientist } from "../icons/MadScientist Screenshots/Gameplay1";
import { Title_screen_MadScientist } from "../icons/MadScientist Screenshots/Title_screen";
import NextStep from "../miscellaneous/Nextstep";
import { Tag } from "../miscellaneous/Tag";

export default function MadScientist() {
  return (
    <div className="text-center w-full grid md:grid-cols-3 gap-5 mt-3">
      <div className="md:col-span-2">
        <div className="grid grid-cols-2">
          <Title_screen_MadScientist />
          <Gameplay1_MadScientist />
        </div>
      </div>
      <div className="col-span-1">
        <h1 className="text-caption text-primary text-2xl mb-5">
          The Mad Scientist
        </h1>
        <span>Un petit jeu en 2D constitué d'un seul niveau dans le but de comprendre le moteur/logiciel d'Epic Games (UE5) en utilisant les outils Blueprint.</span>
        <br />
        <div className="mt-5 grid md:grid-cols-1">
        <Tag text="Unreal Engin 5"/>
        </div>
      </div>
    </div>
  );
}
