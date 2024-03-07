import { ProgressBars, SubProgressBars } from "../../components/ProgressBar";
import { FaUserTie } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { Link } from "react-router-dom";

function HomeContent() {
  return (
    <>
      <div className="liverecords flex-container space-evenly">
        <div className="recorddetail flex-container column">
          <MdHowToVote className="icons" />
          <p className="subrecordstxt">137</p>
          <p className="mainrecordstxt">polling stations</p>
        </div>
        <div className="recorddetail flex-container column">
          <FaUserTie className="icons" />
          <p className="subrecordstxt">67,320</p>
          <p className="mainrecordstxt">Registered Voters</p>
        </div>
        <div className="recorddetail flex-container column">
          <FaFlag className="icons" />
          <p className="subrecordstxt">25</p>
          <p className="mainrecordstxt">Political Parties</p>
        </div>
      </div>
      <div className="flex-container column width-100 mainbody ">
        <center>
          <h1 className="pad-top10-bottom20 mainheadline">
            KNOW YOUR PRESIDENTIAL CANDIDATES
          </h1>
        </center>

        <br />
        <div className="knowthem flex-container width-100 space-evenly">
          <Link to="/candidate-profile">
            <div
              className="recorddetail flex-container column "
              style={{ color: "black" }}
            >
              <img
                src="Mahama.jpeg"
                alt=""
                className="knowthemimg margin-bottom-10"
              />
              <h4>JOHN DRAMANI MAHAMA </h4>
              <h5>NDC</h5>
              <h5>65</h5>
            </div>
          </Link>
          <Link to="/candidate-profile">
            <div
              className="recorddetail flex-container column "
              style={{ color: "black" }}
            >
              <img
                src="Bawumia.jpeg"
                alt=""
                className="knowthemimg margin-bottom-10"
              />
              <h4>DR. ALHAJI MAHAMADU BAWUMIA </h4>
              <h5>NPP</h5>
              <h5>60</h5>
            </div>
          </Link>
          <Link to="/candidate-profile">
            <div
              className="recorddetail flex-container column "
              style={{ color: "black" }}
            >
              <img
                src="NanaKwame.png"
                alt=""
                className="knowthemimg margin-bottom-10"
              />
              <h4>NANA KWAME BEDIAKO </h4>
              <h5>New force</h5>
              <h5>43</h5>
            </div>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <div className="voteprogress column">
          <div className="captions">
            <h4>LIVE PROJECTION</h4>
            <p>CANDIDATES LEADING</p>
            <h5>PRESIDENTIAL</h5>
          </div>
          <br />
          <div className="leading-cards space-between flex-container">
            <div className="leading flex-container gap-10">
              <img src="Mahama.jpeg" alt="" className="knowthemimg" />
              <div className="column gap-10">
                <h4>JOHN DRAMANI MAHAMA </h4>
                <h5>NDC</h5>
              </div>
            </div>
            <div className="leading flex-container gap-10">
              <img src="NanaKwame.png" alt="" className="knowthemimg" />
              <div className="column gap-10">
                <h4>NANA KWAME BEDIAKO </h4>
                <h5>New force</h5>
              </div>
            </div>
            <div className="leading flex-container gap-10">
              <img src="Bawumia.jpeg" alt="" className="knowthemimg" />
              <div className="column gap-10">
                <h4>DR. ALHAJI MAHAMADU BAWUMIA </h4>
                <h5>NPP</h5>
              </div>
            </div>
          </div>
          <div className="progressbars">
            <ProgressBars progress1={50} progress2={20} progress3={30} />
          </div>

          <br />
          <br />
          <div className="captions">
            <h3>PARLIMENTARY CANDIDATE</h3>
          </div>
          <br />
          <div className="leading flex-container gap-10">
            <img src="logo.png" alt="" className="knowthemimg" />
            <div className="column gap-10 ">
              <p>CANDIDATE NAME</p>
              <p>PARTY BELONG</p>
            </div>
          </div>
          <br />
          <div className="progressbars">
            <SubProgressBars progress1={45} progress2={50} />
          </div>
        </div>
        <br />
        <br />
        <center>
          <h4 className="stylishname">Live From The Grounds</h4>
        </center>
        <br />
        <br />
      </div>
    </>
  );
}

export default HomeContent;
