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

export default function TopBar() {
  return (
    <Box
      sx={{
        background: "rgb(255 255 255 / 100%)",
        position: "fixed",
        width: "100%",
        bottom: "0",
      }}
    >
      <Box sx={{ pb: 2, px: 1, pt: 1 }}>
        <Grid container>
          <Grid item xs>
            <Box
              sx={{
                color: "white",
                width: "fit-content",
                background: "black",
                borderRadius: "12px",
                m: "auto",
              }}
            >
              <IconButton color="inherit">
                <FiHome />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs sx={{ textAlign: "center" }}>
            <Box>
              <IconButton>
                <TbGridDots />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: "fit-content",
                borderRadius: "12px",
                m: "auto",
                border: 2,
                borderColor: "text.secondary",
              }}
            >
              <IconButton>
                <GiForkKnifeSpoon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs sx={{ textAlign: "center" }}>
            <Box>
              <IconButton>
                <MdOutlinePhotoLibrary />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs sx={{ textAlign: "center" }}>
            <Box>
              <IconButton>
                <MdManageAccounts />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
