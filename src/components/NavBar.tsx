import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { FC, useState, MouseEvent } from "react";
import Button from "./Button";
import Link from "./Link";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const NAV_BAR_LIST_ITEMS = [
  {
    id: "1",
    href: "#",
    name: "Car",
  },
  {
    id: "2",
    href: "#",
    name: "E-Scooter",
  },
  {
    id: "3",
    href: "#",
    name: "Special Offers",
  },
  {
    id: "4",
    href: "#",
    name: "Services",
  },
  {
    id: "5",
    href: "#",
    name: "Tools",
  },
];

interface NavBarItemProps {
  id: string;
  href: string;
  name: string;
}

const NavBarItem: FC<NavBarItemProps> = ({ href, name }) => {
  return (
    <Box component="li">
      <Link
        href={href}
        sx={{
          px: { md: "18px", lg: "28px" },
          py: 1,
          textDecoration: "none",
          color: "#000",
          opacity: 0.6,
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "24px",
          transition: "opacity 0.33s",
          ":hover": {
            opacity: 1,
          },
        }}
      >
        {name}
      </Link>
    </Box>
  );
};

interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
          backgroundColor: "white",
        }}
      >
        <Link href="/" sx={{ mr: "auto" }}>
          <IconButton
            sx={{
              width: {
                xs: 60,
                md: 80,
              },
              height: {
                xs: 60,
                md: 80,
              },
            }}
          >
            <Image src="/vin.png" alt="vin" width={64} height={64} />
          </IconButton>
        </Link>
        <Box
          component="ul"
          sx={{
            listStyle: "none",
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            position: "absolute",
          }}
        >
          {NAV_BAR_LIST_ITEMS.map((item) => (
            <NavBarItem key={item.id} {...item} />
          ))}
        </Box>
        <Button
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          Account
        </Button>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <IconButton
            sx={{
              height: 40,
            }}
            onClick={handleOpenNavMenu}
          >
            <Image src="/menu.svg" width={24} height={24} alt="menu" />
          </IconButton>
          <Drawer
            anchor="right"
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <Box
              sx={{
                width: 250,
              }}
              role="presentation"
            >
              <List>
                {NAV_BAR_LIST_ITEMS.map((item) => (
                  <ListItem button key={item.id} onClick={handleCloseNavMenu}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Box>
      <Box
        sx={{
          borderColor: "transparent",
          borderStyle: "solid",
          borderLeftWidth: "calc(100vw / 2)",
          borderRightWidth: "calc(100vw / 2)",
          borderTopColor: "white",
          borderTopWidth: "32px",
          display: { xs: "none", md: "block" },
          transition: "display 0.33s",
        }}
      />
    </Box>
  );
};

export default NavBar;
