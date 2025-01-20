
import { Football_search } from '../icons/MyTube/Football_search';
import { Tag } from '../miscellaneous/Tag';
import { MyTube_screen } from './../icons/MyTube/MyTube_screen';
export default function MyTube() {
  return (
    <div className="text-center w-full grid grid-cols-3 gap-5 mt-3">
      <div className="col-span-2">
        <div className="grid grid-cols-2">
          <MyTube_screen/>
          <Football_search/>
        </div>
      </div>
      <div className="col-span-1">
        <h1 className="text-caption text-primary text-2xl mb-5">
          MyTube
        </h1>
        <span>Un clone de YouTube en ReactJS et NodeJS dans le but de m'entraîner dans ces dites technologies.</span>
        <div className="mt-5 grid grid-cols-3 gap-3">
        <Tag text="ReactJS"/>
        <Tag text="NodeJS"/>
        <Tag text="API YouTube"/>
        </div>
      </div>
    </div>
  );
}
