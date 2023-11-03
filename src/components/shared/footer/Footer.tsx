import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../../../constants/colors";
import {
  CopyrightIcon,
  FacebookLogo,
  FilledTelephoneIcon,
  InstagramLogo,
  LocationIcon,
  MailIcon,
  TwitterLogo,
} from "../../../assets/icons/Icons";
import BgLogo from "../../../assets/WhiteBg-DaintyLogo.svg";
import { footer } from "../../../resources/Data";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.Primary,
        padding: { xs: "2rem 1rem 2em 0 ", md: "2rem" },
        color: Colors.White,
      }}
    >
      <Box sx={{ width: { xs: "95%", md: "85%" }, marginInline: "auto" }}>
        <Grid container >
          <Grid item xs={12} sm={4} md={3}>
            <Box
              component="img"
              src={BgLogo}
              alt="logo"
              sx={{ width: "60px", height: "60px", marginBottom: "0.5rem" }}
            />
            <Typography>
              <MailIcon sx={{ fontSize: "0.8rem", marginRight: "0.3rem" }} />
              daintyconfectioneries@gmail.com
            </Typography>
            <Typography sx={{ margin: "0.3rem 0" }}>
              <FilledTelephoneIcon sx={{ fontSize: "1rem" }} /> +234 8146058001
            </Typography>
            <Typography>
              <LocationIcon sx={{ fontSize: "1rem" }} /> Ibadan, Oyo State
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Grid
              container
              sx={{
                margin: { xs: "1rem 0", md: "initial" },
              }}
            >
              {footer.map((item) => {
                return (
                  <Grid
                    item
                    key={item.title}
                    xs={6}
                    sm={6}
                    sx={{
                      textAlign: "left",
                      display: { md: "flex" },
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Typography>{item.title}</Typography>
                    {item.data.map((data) => {
                      return (
                        <Typography
                          key={data}
                          sx={{
                            fontWeight: "light",
                            margin: "0.3rem 0",
                          }}
                        >
                          {data}
                        </Typography>
                      );
                    })}
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            md={3}
            sx={{
              textAlign: { sm: "right" },
            }}
          >
            <Typography>Social media</Typography>
            <Box>
              <FacebookLogo />
              <TwitterLogo sx={{ margin: "0 0.5rem" }} />
              <InstagramLogo />
            </Box>
          </Grid>
        </Grid>

        <Typography
          sx={{
            color: Colors.White,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            margin: "6rem 0 1rem 0",
          }}
        >
          <CopyrightIcon
            sx={{
              fontSize: { xs: "0.5rem", md: "0.9rem" },
              marginRight: {
                // xs: "0.2rem",
                md: "0.4rem",
              },
            }}
          />
          Copyright All reserved. Dainty confectioneries
        </Typography>
        <Box
          component="hr"
          sx={{
            color: Colors.White,
            width: "70%",
            // marginInline: "auto",
            margin: "1rem auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
