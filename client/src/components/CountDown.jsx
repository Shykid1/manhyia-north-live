import Countdown from 'react-countdown'

const CountDown = () => {
  const Completed = () => <span>Election is Today!!</span>

  const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completed />;
    } else {
      // Render a countdown
      return <span style={{color: "#ffff", fontWeight: 900, fontSize: "30px"}}>{days} : {hours} : {minutes} : {seconds}</span>;
    }
  };
  return (
    <div>
      <p className="" style={{backgroundColor: "#ffff", color: "black", fontWeight: 900, marginTop: 20, marginBottom: 20}}>Count Down To General Election</p>
      <Countdown
        date={new Date('November 25, 2024 07:00:00')}
        renderer={renderer}
      />
    </div>
  )
}

export default CountDown
