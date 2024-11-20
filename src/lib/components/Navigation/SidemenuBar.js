import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Navigation from "./index";
import { useState } from "react";

export default function SideMenu({sidebarToggle, url, iconClassName, onClickMenu, drawerWidth}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <React.Fragment key={"left"}>
        <Drawer
          anchor={"left"}
          anchorEl={anchorEl}
          variant="temporary"
          keepMounted={sidebarToggle}
          open={sidebarToggle}
          onClose={handleClose}
          sx={{
            width: drawerWidth,
            flexShrink: 50,
            zIndex: 10,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              top: "57px !important",
            },
          }}
        >
          <Navigation url={url} iconClassName={iconClassName} onClickMenu={onClickMenu} />
        </Drawer>
      </React.Fragment>
    </div>
  );
}
