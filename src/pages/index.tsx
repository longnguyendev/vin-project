import Card from "@components/Card";
import Layout from "@components/Layout";
import useHorizontalScroll from "@hooks/horizontalScroll";
import { NextPageWithLayout } from "@models/page";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  const ref1 = useHorizontalScroll();
  const ref2 = useHorizontalScroll();
  return (
    <Box>
      <Box sx={{ position: "relative" }}>
        <Image
          alt="Banner"
          src="/banner.png"
          layout="responsive"
          width={1728}
          height={916}
          quality={100}
        />
        <Container
          maxWidth="xl"
          sx={{
            mt: [5, 10, 15, 20],
            mb: [3, 6, 9, 12],
            position: "absolute",
            display: {
              xs: "none",
              md: "block",
            },
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Grid container spacing={[1, 1, 2]}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: [44, 48, 52, 56, 60],
                  lineHeight: "80px",
                  color: "white",
                }}
              >
                Smart Technology for the Future
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: [18, 20, 22, 24],
                  lineHeight: "36px",
                  color: "white",
                }}
              >
                With customer-centred philosophy, VinFast smart cars are
                integrated with world's most advanced techonologies, namely Al
                based machine learning & deep learning, high-level autopilot for
                a comfortable ride, immersive entertainment & personalized
                experience.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ mt: [5, 10, 15, 20] }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: [44, 48, 52, 56, 60],
            color: "#101010",
          }}
        >
          VinFast Car
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontWeight: 400,
            fontSize: [18, 20, 22, 24],
            lineHeight: "36px",
            color: "#404040",
            maxWidth: "500px",
          }}
        >
          More than creating a new car, VinFast was born to represent the spirit
          and pride of the nation.
        </Typography>
      </Container>
      <Stack
        ref={ref1}
        direction="row"
        spacing={[2, 4, 6]}
        sx={{
          mt: [2, 4, 6],
          px: [2, 4, 6, 8, 12],
          overflowX: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {new Array(10).fill(0).map((item, index) => (
          <Card key={index} image="/VFe34.png" />
        ))}
      </Stack>
      <Container maxWidth="xl" sx={{ mt: [5, 10, 15, 20], mb: [3, 6, 9, 12] }}>
        <Grid container spacing={[1, 1, 2]}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: [44, 48, 52, 56, 60],
                lineHeight: "80px",
                color: "#101010",
              }}
            >
              Passionate Design
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: [18, 20, 22, 24],
                lineHeight: "36px",
                color: "#404040",
              }}
            >
              In collaboration with Pininfarina, a world-famous car design firm,
              VinFast offers premium & classy designs for every line of cars.
              Each model is packed with a distinctive & elegant exterior as well
              as a modern interior with meticulous attention to detail.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            zIndex: 1,
            borderColor: "transparent",
            borderStyle: "solid",
            borderLeftWidth: "calc(100vw / 2)",
            borderRightWidth: "calc(100vw / 2)",
            borderTopColor: "white",
            borderTopWidth: "32px",
            transition: "display 0.33s",
          }}
        />
        <Image
          alt="Banner"
          src="/banner-body.png"
          layout="responsive"
          width={1728}
          height={916}
          quality={100}
        />
      </Box>
      <Container maxWidth="xl" sx={{ mt: [5, 10, 15, 20] }}>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: [44, 48, 52, 56, 60],
            lineHeight: "80px",
            color: "#101010",
          }}
        >
          VinFast E-Scooters
        </Typography>
        <Typography
          sx={{
            mt: 3,
            fontWeight: 400,
            fontSize: [18, 20, 22, 24],
            lineHeight: "36px",
            color: "#404040",
            maxWidth: "500px",
          }}
        >
          Products of Vietnamese people, for Vietnamese people with the best
          preferential policy in the market.
        </Typography>
      </Container>
      <Stack
        ref={ref2}
        direction="row"
        spacing={[2, 4, 6]}
        sx={{
          mt: [2, 4, 6],
          px: [2, 4, 6, 8, 12],
          overflowX: "auto",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {new Array(10).fill(0).map((item, index) => (
          <Card key={index} image="/THEONS.png" />
        ))}
      </Stack>
      <Box sx={{ position: "relative", mt: [5, 10, 15, 20] }}>
        <Container
          maxWidth="xl"
          sx={{
            position: ["relative", "relative", "relative", "absolute"],
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <Grid container spacing={[1, 1, 2]}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: [44, 48, 52, 56, 60],
                  lineHeight: "80px",
                  color: "#101010",
                  maxWidth: "443px",
                }}
              >
                Aspiration to conquer the world
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: [18, 20, 22, 24],
                  lineHeight: "36px",
                  color: "#404040",
                }}
              >
                {
                  '"It is, in automobile industry, utopian that not one but two vehicles are designed and manufactured within 12 months."'
                }
              </Typography>
              <Typography
                sx={{
                  mt: 3,
                  fontWeight: 400,
                  fontSize: [18, 20, 22, 24],
                  lineHeight: "36px",
                  color: "#404040",
                  fontStyle: "italic",
                }}
              >
                - Top Gear -
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Image
          alt="Banner"
          src="/banner-footer.png"
          layout="responsive"
          width={1728}
          height={916}
          quality={100}
        />
      </Box>
    </Box>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
