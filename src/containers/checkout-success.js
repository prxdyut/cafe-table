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
  MdDelete,
  MdOutlinePhotoLibrary,
  MdOutlineAccountCircle,
  MdManageAccounts,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import SearchBar from "../components/search";
import { HiMinus, HiPlus, HiBadgeCheck } from "react-icons/hi";

export default function HomeContainer() {
  return (
    <>
      <React.Fragment>
        <Stack gap={3}>
          <AspectRatio
            ratio="1/1"
            sx={{
              width: "75%",
              background: "none",
              "& .MuiAspectRatio-content": { background: "white" },
              alignSelf: "center",
            }}
          >
            <HiBadgeCheck />
          </AspectRatio>
          <Typography variant="h4" fontWeight="500" textAlign="center">
            Order Success
          </Typography>
          <Link href="/" sx={{ color: "black", textDecoration: "underline" }}>
            <Typography variant="body2" textAlign="center">
              #ord_9876553795
            </Typography>
          </Link>
          <Typography variant="body1" textAlign="center">
            Pay $200 on the Counter
          </Typography>
        </Stack>
      </React.Fragment>
    </>
  );
}
