import React, { useState, useEffect} from 'react';
import { transport } from '../Grid/httpRequest'
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from "@mui/icons-material/Store";
import Box from "@mui/material/Box";
import {
    MenuItem,
    MenuList
  } from "@mui/material";
  import { useNavigate } from 'react-router-dom';

const Navigation = ({url, onClickMenu, menuData}) => {
    const navigate = useNavigate();
    const [menus, setMenus] = useState([]);

    const onLocationClick = (route) => {
        navigate(route);
        onClickMenu();
    };

    useEffect(() => {
        const getMenu = async() => {
          try {
            const { data } = await transport({
              url: url,
              method: 'POST',
              credentials: 'include'
            })
            setMenus(data?.records)
          } catch (error) {
            console.log(error)
          }
        }
    
        if(url) {
          getMenu();
        }
    },[]);

    const menuList = menuData || menus;

    return (
        <Box sx={{ width: 250 }} role="presentation">
            <MenuList>
                {menuList?.map((menu, index) => {
                    return (
                        <MenuItem key={index} onClick={() => onLocationClick(menu.Url)}>
                          <ListItemIcon>
                            <StoreIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText>{menu.Text}</ListItemText>
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Box>
    );
};
export default Navigation;
