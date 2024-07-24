import { useParams } from "react-router-dom";
import { ACTS } from "../../../datas/acts.js";
import "./PagePlay.css"
import { ActProgress } from "../../generic/act/ActProgress.jsx";

export function PagePlay() {
  const { actId, subjectId } = useParams();
  
  return (
    <>
      <div className="play_container">
        <aside className="sidebar">
          {ACTS.map((act) => (
            <ActProgress actId={act.actId}/>
          ))}
        </aside>
        <section className="play_page_background">
		</section>
      </div>
    </>
  );
}
