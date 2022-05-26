import styled from "@mui/material/styles/styled";
import { Drawer, IconButton, Typography } from "@mui/material";
import { randomFillSync } from "crypto";
import React from "react";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const LogoStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

interface Props {
  isOpen: boolean;
  handleDrawerToggle: () => void;
}
const DRAWER_WIDTH = 240;

export const SideBar: React.FC<Props> = ({
  isOpen,

  handleDrawerToggle,
}): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShring: 0,
          "& .MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography variant="subtitle2" component="div" align="left">
              Logo
            </Typography>
          </LogoStyled>
          <IconButton onClick={handleDrawerToggle}>
            {/* {theme.direction === "ltr" ? (
              <ChevronLeftOutlined />
            ) : (
              <ChevronRightOutlined />
            )} */}
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </>
  );
};
