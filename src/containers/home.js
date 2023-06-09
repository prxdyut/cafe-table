import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import Skeleton from "@mui/material/Skeleton";
import {
  MdFilterList,
  MdAdd,
  MdCopyAll,
  MdOutlinePhotoLibrary,
  MdOutlineAccountCircle,
  MdManageAccounts,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import SearchBar from "../components/search";
import * as API from "../backend-functions/commerce";

export default function HomeContainer() {
  const [categories, setCategories] = React.useState(null);
  const [allProducts, setAllProducts] = React.useState(null);

  React.useEffect(() => {
    API.getCategories().then((categories) => setCategories(categories));
    API.getAllProducts().then((allProducts) => setAllProducts(allProducts));
  }, []);

  const getAny4Categories = () => {
    return categories
      .sort(() => {
        return Math.random() - Math.random();
      })
      .splice(0, 4);
  };
  const getAny2Products = () => {
    return allProducts
      .sort(() => {
        return Math.random() - Math.random();
      })
      .splice(0, 2);
  };

  console.log(categories, allProducts);

  return (
    <>
      <React.Fragment>
        <Stack gap={3}>
          <Typography variant="h4" fontWeight={500}>
            Eat <br /> Something Special
          </Typography>
          <SearchBar />
          <Stack
            direction={"row"}
            gap={2}
            sx={{ overflow: "scroll", mx: -2, px: 2, py: 0.2, mt: -1 }}
          >
            {["", "", "", "", ""].map((v, i) => (
              <Chip
                key={i}
                label="Clickable Link"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                sx={{ borderRadius: 1 }}
              />
            ))}
          </Stack>
          <Box sx={{ mx: -1 }}>
            {Array(4)
              .fill()
              .map((v, i) => (
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: "2rem",
                    mx: 1,
                    width: "calc(25% - 16px)",
                    display: "inline-block",
                  }}
                  key={i}
                />
              ))}
          </Box>
          <Paper>
            <AspectRatio ratio="2/1" sx={{ width: "100%" }} objectFit="contain">
              <Skeleton variant="rounded" />
            </AspectRatio>
          </Paper>
          <Box>
            <Grid container gap={2}>
              {!!categories
                ? getAny4Categories().map((v, i) => (
                    <Grid key={i} item xs>
                      <Paper elevation={0}>
                        <AspectRatio
                          ratio="1/1"
                          sx={{ width: "100%", borderRadius: 2 }}
                          objectFit="contain"
                        >
                          <Typography level="h2" component="div">
                            Pic
                          </Typography>
                        </AspectRatio>
                        <Typography variant="subtitle1" textAlign={"center"}>
                          {v.name}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))
                : Array(4).fill().map((v, i) => (
                    <Grid key={i} item xs>
                      <Paper elevation={0}>
                        <AspectRatio
                          ratio="1/1"
                          sx={{ width: "100%", borderRadius: 2 }}
                          objectFit="contain"
                        >
                          <Skeleton variant="rounded" />
                        </AspectRatio>

                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1rem", mx: 1 }}
                        />
                      </Paper>
                    </Grid>
                  ))}
              {}
              {}
            </Grid>
          </Box>
          <Box>
            <Grid container gap={2}></Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Best Sellers</Typography>
            <Link href="">
              <Typography variant="subtitle1" color="text.secondary">
                See all
              </Typography>
            </Link>
          </Box>
          <Box>
            <Grid container gap={2}>
              {!!allProducts ? getAny2Products().map((v, i) => (
                <Grid item xs key={i}>
                  <Paper elevation={3}>
                    <AspectRatio
                      ratio="3/2"
                      sx={{ width: "100%" }}
                      objectFit="contain"
                    >
                      <Typography level="h2" component="div">
                        16/9
                      </Typography>
                    </AspectRatio>
                    <Box sx={{ p: 1 }}>
                      <Typography variant="body1">Title Name</Typography>
                      <Typography
                        variant="body2"
                        // sx={{ pt: -1 }}
                        color="text.secondary"
                      >
                        Category
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 1,
                        }}
                      >
                        <Typography variant="h6">$40</Typography>
                        <Box
                          sx={{
                            background: "black",
                            color: "white",
                            borderRadius: 1,
                            // ml: 2,
                            // mt: 1,
                          }}
                        >
                          <IconButton
                            size="small"
                            color="inherit"
                            aria-label="menu"
                          >
                            <MdAdd />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              )) : Array(2).fill().map((v, i) => (
                <Grid item xs key={i}>
                  <Paper elevation={3}>
                    <AspectRatio
                      ratio="3/2"
                      sx={{ width: "100%" }}
                      objectFit="contain"
                    >
                      <Skeleton variant="rounded" />
                    </AspectRatio>
                    <Box sx={{ p: 1 }}>
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1.25rem", mr: 4 }}
                      />
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: "1rem", mr: 7 }}
                      />

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 1,
                        }}
                      >
                        {" "}
                        <Skeleton
                          variant="text"
                          sx={{ fontSize: "1.75rem", mr: 1 }}
                          width={50}
                        />
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Recommended</Typography>
            <Link href="">
              <Typography variant="subtitle1" color="text.secondary">
                See all
              </Typography>
            </Link>
          </Box>
          <Stack
            direction={"row"}
            gap={2}
            sx={{ overflow: "scroll", mx: -2, px: 2, py: 0.2 }}
          >
            {["", "", "", "", ""].map((v, i) => (
              <Paper
                elevation={3}
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: "75vw",
                }}
              >
                <AspectRatio
                  ratio="1/1"
                  sx={{ width: "40%" }}
                  objectFit="contain"
                >
                  <Typography level="h2" component="div">
                    16/9
                  </Typography>
                </AspectRatio>
                <Box
                  sx={{
                    p: 1,
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography variant="body1">Title Name</Typography>
                    <Typography
                      variant="body2"
                      // sx={{ pt: -1 }}
                      color="text.secondary"
                    >
                      Category
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Typography variant="h6">$40</Typography>
                    <Box
                      sx={{
                        background: "black",
                        color: "white",
                        borderRadius: 1,
                        // ml: 2,
                        // mt: 1,
                      }}
                    >
                      <IconButton
                        size="small"
                        color="inherit"
                        aria-label="menu"
                      >
                        <MdAdd />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Stack>
          <Stack
            direction={"row"}
            gap={2}
            sx={{ overflow: "scroll", mx: -2, px: 2, py: 0.2 }}
          >
            {["", "", "", "", ""].map((v, i) => (
              <Paper
                elevation={3}
                key={i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  minWidth: "75vw",
                }}
              >
                <AspectRatio
                  ratio="1/1"
                  sx={{ width: "40%" }}
                  objectFit="contain"
                >
                  <Skeleton variant="rounded" />
                </AspectRatio>
                <Box
                  sx={{
                    p: 1,
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1.25rem", mr: 4 }}
                    />

                    <Skeleton variant="text" sx={{ fontSize: "1rem", mr: 7 }} />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1.75rem", mr: 1 }}
                      width={50}
                    />
                  </Box>
                </Box>
              </Paper>
            ))}
          </Stack>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pl: 2,
                pr: 1,
                py: 1,
                border: 1,
                borderRadius: 1,
                borderColor: "text.secondary",
              }}
            >
              <Typography variant="body1" color="text.secondary">
                TABLESCAN10
              </Typography>
              <IconButton size="small">
                <MdCopyAll />
              </IconButton>
            </Box>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mt: 0.5, textAlign: "center" }}
            >
              Order using this code and avail 10% off.
            </Typography>
          </Box>
        </Stack>
      </React.Fragment>
    </>
  );
}
