import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import {
  MdFilterList,
  MdOutlinePeopleAlt,
  MdAdd,
  MdCopyAll,
  MdOutlinePhotoLibrary,
  MdOutlineAccountCircle,
  MdManageAccounts,
  MdStarHalf,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiMinus, HiPlus } from "react-icons/hi";
import { FaPepperHot } from "react-icons/fa";
export default function HomeContainer() {
  return (
    <>
      <React.Fragment>
        <Stack gap={3}>
          <Box>
            <AspectRatio
              ratio="1/1"
              sx={{ width: "100%", borderRadius: 1 }}
              objectFit="contain"
            >
              <Typography level="h2" component="div">
                16/9
              </Typography>
            </AspectRatio>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight="500">
                Name of Product
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Category
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" fontWeight="500">
                $100
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Stack
              gap={2}
              direction="row"
              sx={{
                width: "fit-content",
                py: 1.5,
                px: 3,
                borderRadius: 2,
                width: "50%",
                justifyContent: "space-around",
                mb: 1,
                background: "black",
                color: "white",
                width: "50%",
              }}
            >
              <IconButton size="small" style={{ color: "white" }}>
                <HiPlus />
              </IconButton>
              <Typography>5</Typography>
              <IconButton size="small" style={{ color: "white" }}>
                <HiMinus />
              </IconButton>
            </Stack>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Stack
              gap={2}
              direction="row"
              sx={{ justifyContent: "space-evenly", width: "100%" }}
              divider={
                <Divider orientation="vertical" sx={{ my: 2 }} flexItem />
              }
            >
              <Box sx={{ textAlign: "center" }}>
                <MdOutlinePeopleAlt style={{ fontSize: "1.5rem" }} />
                <Typography variant="subtitle2">7</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <MdStarHalf style={{ fontSize: "1.5rem" }} />
                <Typography variant="subtitle2">5.4</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <FaPepperHot style={{ fontSize: "1.5rem" }} />
                <Typography variant="subtitle2">spicy</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <MdStarHalf style={{ fontSize: "1.5rem" }} />
                <Typography variant="subtitle2">5.4</Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography variant="h6">Ingredients:</Typography>

            <Box sx={{ mx: -1 }}>
              {[
                "all-purpose flour",
                "salt",
                "butter",
                "water",
                "quart oil",
                "onion",
                "garlic",
                "chilli pepper",
                "ginger",
                "turmeric",
                "garam masala",
              ].map((v, i) => (
                <Chip
                  key={i}
                  label={v}
                  variant="outlined"
                  sx={{ borderRadius: 1, border: 1, m: 1 }}
                />
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Add-ons:
            </Typography>

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
          </Box>
        </Stack>
      </React.Fragment>
    </>
  );
}
