import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

export function ProgressBars({ progress1, progress2, progress3 }) {
  return (
    <ProgressBar className='flex-container rounded-50'>
      <ProgressBar
        now={progress1}
        key={1}
        label={`${progress1}%`}
        className='blue center-value'
      />
      <ProgressBar
        className="danger center-value"
        now={progress2}
        key={2}
        label={`${progress2}%`}
      />
      <ProgressBar
        className="success center-value"
        now={progress3}
        key={3}
        label={`${progress3}%`}
      />
    </ProgressBar>
  );
}

ProgressBars.propTypes = {
  progress1: PropTypes.number.isRequired,
  progress2: PropTypes.number.isRequired,
  progress3: PropTypes.number.isRequired,
};



export function SubProgressBars({ progress1, progress2 }) {
  return (
    <ProgressBar className='flex-container rounded-50'>
      <ProgressBar
        className="danger rounded-left center-value"
        now={progress1}
        key={2}
        label={`${progress1}%`}
      />
      <ProgressBar
        className="success center-value"
        now={progress2}
        key={3}
        label={`${progress2}%`}
      />
    </ProgressBar>
  );
}

SubProgressBars.propTypes = {
  progress1: PropTypes.number.isRequired,
  progress2: PropTypes.number.isRequired,
};