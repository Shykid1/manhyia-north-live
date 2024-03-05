import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';


export default function BasicBreadcrumbs({ linkpath, routername }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/dashboard">
        Dashboard
      </Link>
      <Link underline="hover" color="inherit" href={linkpath}>
        {routername}
      </Link>
    </Breadcrumbs>
  );
}
BasicBreadcrumbs.propTypes = {
    linkpath: PropTypes.string.isRequired,
    routername: PropTypes.string.isRequired,
  };