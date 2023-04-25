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

export default function HomeContainer() {
  return (
    <>
      <React.Fragment>
        <Stack gap={3}>
          <Box sx={{ display: "flex", px: 1 }}>
            <TextField
              id="outlined-basic"
              placeholder="Outlined"
              variant="outlined"
              size="small"
              sx={{ flexGrow: 1, borderRadius: 1 }}
            />
            <Box
              sx={{
                background: "black",
                color: "white",
                borderRadius: 1,
                ml: 2,
              }}
            >
              <IconButton
                // size="small"
                edge="right"
                color="inherit"
                aria-label="menu"
              >
                <MdFilterList />
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Categories</Typography>
          </Box>
          <Box>
            <Grid container>
              {["", "", "", "", "", "", "", ""].map((v, i) => (
                <Grid key={i} item xs={4} sx={{ p: 1 }}>
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
                      Categ
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </React.Fragment>
    </>
  );
}
