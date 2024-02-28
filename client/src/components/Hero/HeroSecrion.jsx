import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./heroSection.css";

function HeroSection() {
  return (
    <>
      <div className="heroSection flex-container column">
        <div className="headerTitle column">
          <h1 className="headlines">2024 Presidential</h1>
          <h1 className="subheadlines">Election Live Updates</h1>
        </div>
        <Link to="/paliamentary">
          <div className="herocard flex-container">
            <div className="herocontent">
              <p>PARLIMENTARY</p>
              <p>UPDATE</p>
            </div>
            <button className="herobtn">
              <IoChevronForwardCircleSharp />
            </button>
          </div>
        </Link>

        <div className="herosectioncontent">
          <p>
            Display of other news happining in various polling station will
            appear here
          </p>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
