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
    background: "black",
    color: "white",
    borderRadius: "8px",
    width: "fit-content",
    m: "auto",
  };

  return (
    <>
      <Box
        sx={{
          background: "rgb(255 255 255 / 100%)",
          position: "fixed",
          width: "100%",
          width: "100%",
          bottom: "0px",
        }}
      >
        <Box
          sx={{
            pb: 2,
            px: 1,
            pt: 1,
            "& > div > div > div": { width: "fit-content", m: "auto" },
            "& > div > div > div.active": {
              background: "black",
              color: "white",
              borderRadius: 2,
            },
          }}
        >
          <Grid container>
            <Grid item xs>
              <Box
                className={activeRootPath == "home" && "active"}
                onClick={() => router.push("/home")}
              >
                <IconButton color="inherit">
                  <FiHome />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                className={activeRootPath == "tray" && "active"}
                onClick={() => router.push("/tray")}
              >
                <IconButton color="inherit">
                  <GiForkKnifeSpoon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                className={activeRootPath == "explore" && "active"}
                onClick={() => router.push("/explore")}
              >
                <IconButton color="inherit">
                  <TbGridDots />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box sx={{ height: "68px", width: "100%", pt: 2 }} />
    </>
  );
}
