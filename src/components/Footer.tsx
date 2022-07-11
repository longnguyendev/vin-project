import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "./Link";

const FOOTER_NAV_LIST_ITEMS = [
  {
    id: "1",
    href: "#",
    name: "ABOUT",
  },
  {
    id: "2",
    href: "#",
    name: "CAR",
  },
  {
    id: "3",
    href: "#",
    name: "E-SCOOTERS",
  },
  {
    id: "4",
    href: "#",
    name: "FEATURED NEWS",
  },
  {
    id: "5",
    href: "#",
    name: "SERVICES",
  },
  {
    id: "6",
    href: "#",
    name: "PRIVACY & TERMS",
  },
];

const ECOSYSTEM_LIST_ITEMS = [
  {
    id: "1",
    href: "#",
    name: "Vinhomes",
  },
  {
    id: "2",
    href: "#",
    name: "Vinmec",
  },
  {
    id: "3",
    href: "#",
    name: "Vinpearl",
  },
  {
    id: "4",
    href: "#",
    name: "Vsmart",
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: { xs: 3, sm: 6, md: 9, lg: 12 },
      }}
    >
      <Grid
        container
        spacing={{
          xs: 3,
          lg: 12,
        }}
      >
        <Grid item xs={12} lg={5}>
          <Image alt="vin" src="/vin-footer.png" width={229} height={64} />
          <Typography
            sx={{
              mt: 3,
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "28px",
              color: "#0F0F0F",
            }}
          >
            Vinfast Commercial & Services Trading Limited Liability Company
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#0F0F0F",
            }}
          >
            <strong>Enterprise Registration Certificate:</strong> No.
            0108926276, first issued by Hanoi Authority for Planning and
            Investment (HAPI) on October 1st 2019 and subsequent changes.
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#0F0F0F",
            }}
          >
            <strong>Address:</strong> No. 7, Bang Lang 1 Street, Vinhomes
            Riverside, Viet Hung Ward, Long Bien District, Hanoi City, Vietnam.
          </Typography>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#101010",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Ecosystem</Typography>
            <Box
              component="ul"
              color="#C4C4C4"
              sx={{
                display: "flex",
                alignItems: "center",
                flexFlow: "wrap",
                p: 0,
                m: 0,
              }}
            >
              {ECOSYSTEM_LIST_ITEMS.map((item) => (
                <Typography
                  component="li"
                  key={item.id}
                  sx={{
                    fontWeight: 500,
                    ml: 4,
                  }}
                >
                  {item.name}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={2}>
          <Box
            component="ul"
            mt={{ xs: 0, lg: 11 }}
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#101010",
              textTransform: "uppercase",
              p: 0,
              m: 0,
            }}
          >
            {FOOTER_NAV_LIST_ITEMS.map((item) => (
              <Box
                component="li"
                key={item.id}
                sx={{
                  position: "relative",
                  p: 1,
                  listStyle: "none",
                }}
              >
                <Link
                  href={item.href}
                  sx={{
                    textDecoration: "none",
                    color: "#101010",
                    listStyle: "none",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: "16px",
                    lineHeight: "24px",
                    ":before": {
                      position: "absolute",
                      bottom: "8px",
                      content: '" "',
                      width: "0%",
                      height: "2px",
                      backgroundColor: "#000",
                      transition: "width 0.33s",
                    },
                    ":hover": {
                      ":before": {
                        width: "40%",
                      },
                    },
                  }}
                >
                  {item.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              lineHeight: "32px",
              color: "#0F0F0F",
            }}
          >
            Subscribe to our newsletter
          </Typography>
          <Typography
            mt={1}
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#404040",
            }}
          >
            Subcribe to receive email updates on news and exclusive offers from
            VinFast
          </Typography>
          <Box
            mt={3}
            sx={{
              display: "flex",
              borderWidth: 1,
              borderColor: "#0F0F0F",
              borderStyle: "solid",
              p: 1,
            }}
          >
            <InputBase
              placeholder="Enter your email address"
              sx={{ flex: 1, px: 3 }}
            />
            <Button>Subscribe</Button>
          </Box>
          <Typography
            mt={1}
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#404040",
            }}
          >
            By subcribing to our newsletter, you confirm that you have read,
            understood and agreed to <strong>Privacy Policy</strong> of VinFast.
          </Typography>
          <Box
            mt={6}
            sx={{
              display: "flex",
              fontSize: "16px",
              lineHeight: "24px",
              color: "#101010",
              alignItems: "center",
              flexFlow: "wrap",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
              }}
            >
              HOTLINE:
            </Typography>
            <Typography
              ml={2}
              sx={{
                fontWeight: 500,
              }}
            >
              1900 23 23 89
            </Typography>
            <Typography
              ml={2}
              sx={{
                "::before": {
                  content: '"•"',
                  mr: 2,
                  color: "#C4C4C4",
                },
                fontWeight: 500,
              }}
            >
              Support.vn@vinfastauto.com
            </Typography>
            <Box ml="auto" sx={{ display: "flex" }}>
              <IconButton sx={{ mr: 4 }}>
                <Image
                  src="/facebook.svg"
                  width={32}
                  height={32}
                  alt="facebook"
                />
              </IconButton>
              <IconButton>
                <Image
                  src="/youtube.svg"
                  width={32}
                  height={32}
                  alt="youtube"
                />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
