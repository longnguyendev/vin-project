import Box from "@mui/material/Box";
import React, { FC, PropsWithChildren } from "react";
import NavBar from "./NavBar";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";
import ScrollTop from "./ScrollTop";

interface LayoutProps {
  window?: () => Window;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, window }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ProgressBar />
      <NavBar />
      <Box
        id="back-to-top-anchor"
        sx={{
          height: { xs: 60, md: 0 },
        }}
      />
      <Box>{children}</Box>
      <Footer />
      <ScrollTop window={window} />
    </Box>
  );
};

export default Layout;
