import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

function CustomDrawer(props) {
  const { window, mainContent } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const SearchButton = styled(IconButton)(({ theme }) => ({
    marginLeft: theme.spacing(1),
  }));
  const iconMap = {
    'Overview': <DashboardIcon />,
    'Poll enters': <BarChartIcon />,
    'Votes': <HowToVoteIcon />,
    'Presidential': <PersonIcon />,
    'Palimentary': <GroupIcon />,
    'Analysis': <AssessmentIcon />,
    'News updates': <AnnouncementIcon />,
    'Agent info': <ContactSupportIcon />,
  };
  
  // const UserProfile=(
  //     <>
  //       <div className="user-profile flex--container column gap-5 ">
  //         <h1>hellop</h1>
  //         <h1>hellop</h1>
  //         <h1>hellop</h1>
  //       </div>
  //     </>
  // );

  const drawer = (
      <div>
      <Toolbar />
      <Divider />
      <List>
      {['Overview', 'Poll enters', 'Votes', 'Presidential', 'Palimentary', 'Analysis', 'News updates', 'Agent info'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {iconMap[text]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Your App Name
          </Typography>
          <SearchButton
            color="inherit"
            aria-label="search"
            sx={{ ml: 'auto' }}
          >
            <SearchIcon />
          </SearchButton>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {mainContent}
      </Box>
    </Box>
  );
}

CustomDrawer.propTypes = {
  window: PropTypes.func,
  mainContent: PropTypes.node.isRequired,
};

export default CustomDrawer;
