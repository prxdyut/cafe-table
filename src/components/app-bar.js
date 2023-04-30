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
  MdOutlineArrowBackIosNew,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";

export default function TopBar() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "none", color: "unset", mb: 1 }}
    >
      <Toolbar sx={{ my: 2 }}>
        <IconButton
          //   size="small"
          color="inherit"
          aria-label="menu"
          sx={{ boxShadow: 0, borderRadius: 1 }}
        >
          <MdOutlineArrowBackIosNew />
        </IconButton>
        <Box sx={{ flexGrow: "1" }} textAlign="center">
          <Typography variant="h6">Search</Typography>
        </Box>
        <IconButton
          //   size="small"
          color="inherit"
          aria-label="menu"
          sx={{ boxShadow: 0, borderRadius: 1 }}
        >
          <GiForkKnifeSpoon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
