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
                color="inherit"
                aria-label="menu"
              >
                <MdFilterList />
              </IconButton>
            </Box>
          </Box>
          <Stack
            direction="row"
            gap={1}
            sx={{ overflow: "scroll", mx: -2, px: 2 }}
          >
            {["", "", "", "", "", ""].map((v, i) => (
              <Chip
                key={i}
                label="Clickable"
                variant="outlined"
                sx={{ borderRadius: 1, border: 1 }}
              />
            ))}
          </Stack>
          <Box sx={{ py: 0.2 }}>
            <Grid container gap={2}>
              {["", "", "", "", "", "", "", ""].map((v, i) => (
                <Grid item xs={5.7} key={i}>
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
                      <Stack gap={2}>
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
                      </Stack>
                    </Box>
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
