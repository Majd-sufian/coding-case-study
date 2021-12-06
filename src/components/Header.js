import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./componentsStyle/card.css";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTheme,
  selectedTheme,
  themeBackgroundColorHeader,
} from "../redux/features/changeThemes/themeSlice";
import {
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import LogOut from "../redux/features/auth/logOut";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  // redux elements
  const theme = useSelector(selectedTheme);
  const backgroundColor = useSelector(themeBackgroundColorHeader);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function changeThemeByIconClik() {
    if (theme === "bright") {
      const newValues = ["dark", "#171717"];
      dispatch(changeTheme(newValues));
    } else {
      const newValues = ["bright", "#3f51b5"];
      dispatch(changeTheme(newValues));
    }
  }

  return (
    <>
      <AppBar
        style={{ background: backgroundColor, paddingLeft: 0, paddingRight: 0 }}
        position="static"
      >
        <Toolbar>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <LogOut />
            </Menu>
          </div>

          <Typography variant="h6" className={classes.title}>
            Case Study program
          </Typography>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={changeThemeByIconClik}
            >
              {theme === "bright" ? (
                <BrightnessHighIcon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
