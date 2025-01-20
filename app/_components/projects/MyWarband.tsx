
import { WoW_char_level } from '../icons/WoW Characters/WoW_char_level';
import { WoW_char_name } from '../icons/WoW Characters/WoW_char_name';
import { Tag } from '../miscellaneous/Tag';
export default function MyWarband() {
  return (
    <div className="text-center w-full grid grid-cols-3 gap-5 mt-3">
      <div className="col-span-2">
        <div className="grid grid-cols-2">
          <WoW_char_level/>
          <WoW_char_name/>
        </div>
      </div>
      <div className="col-span-1">
        <h1 className="text-caption text-primary text-2xl mb-5">
          MyWarband
        </h1>
        <span>Un site qui affiche les personnages de WoW de la personne connectée.</span>
        <div className="mt-5 grid grid-cols-3 gap-3">
        <Tag text="ReactJS"/>
        <Tag text="NodeJS"/>
        <Tag text="NextJS"/>
        <Tag text="NextAuth"/>
        <Tag text="OAuth 2.0"/>
        <Tag text="API Battle.net"/>
        </div>
      </div>
    </div>
  );
}
