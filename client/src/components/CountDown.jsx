import Countdown from 'react-countdown';

const CountDown = () => {
  const Completed = () => <span>Election is Today!!</span>;

  const renderTimeUnit = (value, unit) => (
    <div style={{ display: 'inline-block', margin: '0 5px' }}>
      <div
        style={{
          border: '2px solid white',
          padding: '5px',
          borderRadius: '5px',
          textAlign: 'center',
        }}
      >
        <span style={{ fontWeight: 900, fontSize: '30px' }}>{value}</span>
        <div style={{ fontSize: '14px', fontWeight: 'normal' }}>{unit}</div>
      </div>
    </div>
  );

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completed />;
    } else {
      // Render a countdown
      return (
        <div style={{ color: '#ffff'}}>
          {renderTimeUnit(days, 'Days')}
          {renderTimeUnit(hours, 'Hours')}
          {renderTimeUnit(minutes, 'Minutes')}
          {renderTimeUnit(seconds, 'Seconds')}
        </div>
      );
    }
  };
  return (
    <div>
      <p
        className=""
        style={{
          backgroundColor: '#ffff',
          color: 'black',
          fontWeight: 900,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Count Down To General Election
      </p>
      <Countdown date={new Date('November 25, 2024 07:00:00')} renderer={renderer} />
    </div>
  );
};

export default CountDown;
