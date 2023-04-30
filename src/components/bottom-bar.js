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
  MdOutlineReceiptLong,
  MdAdd,
  MdCopyAll,
  MdOutlinePhotoLibrary,
  MdOutlineAccountCircle,
  MdManageAccounts,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useRouter } from "next/router";
export default function TopBar(props) {
  const router = useRouter();
  const activeRootPath = router.pathname.split("/")[1];
  const activeTab = {
    width: "fit-content",
    background: "black",
    color: "white",
    margin: "auto",
    borderRadius: "8px",
  };

  return (
    <>
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
            <Grid item xs sx={{ textAlign: "center" }}>
              <Box
                sx={activeRootPath == "" && activeTab}
                onClick={() => router.push("/")}
              >
                <IconButton color="inherit">
                  <FiHome />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs sx={{ textAlign: "center" }}>
              <Box
                sx={activeRootPath == "explore" && activeTab}
                onClick={() => router.push("/explore")}
              >
                <IconButton color="inherit">
                  <TbGridDots />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: "fit-content",
                  borderRadius: 2,
                  m: "auto",
                  border: 2,
                }}
                onClick={() => router.push("/tray")}
              >
                <IconButton color="inherit">
                  <GiForkKnifeSpoon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs sx={{ textAlign: "center" }}>
              <Box
                sx={activeRootPath == "orders" && activeTab}
                onClick={() => router.push("/orders")}
              >
                <IconButton color="inherit">
                  <MdOutlineReceiptLong />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs sx={{ textAlign: "center" }}>
              <Box>
                <Box
                  sx={activeRootPath == "account" && activeTab}
                  onClick={() => router.push("/account")}
                >
                  <IconButton color="inherit">
                    <MdManageAccounts />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ height: "68px", width: "100%", pt: 2 }} />
    </>
  );
}
