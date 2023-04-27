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
import { HiMinus, HiPlus } from "react-icons/hi";

export default function HomeContainer() {
  return (
    <>
      <React.Fragment>
        <Stack gap={3}>
          <Stack
            direction={"column"}
            gap={2}
            sx={{ overflow: "scroll", mx: -2, px: 2, py: 0.2 }}
          >
            {["", "", "", "", ""].map((v, i) => (
              <Box>
                <Paper
                  elevation={3}
                  key={i}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: "100%",
                  }}
                  onClick={() => console.log("Product")}
                >
                  <AspectRatio
                    ratio="1/1"
                    sx={{ width: "35%" }}
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
                    </Box>
                  </Box>
                </Paper>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                    }}
                  >
                    <Stack
                      gap={0.5}
                      direction="row"
                      sx={{
                        position: "absolute",
                        top: "-2.75rem",
                        margin: 1,
                        width: "fit-content",
                        //   py: 1.5,
                        //   px: 3,
                        borderRadius: 2,
                        position: "relative",
                        justifyContent: "space-around",
                        //   mb: 1,
                        background: "black",
                        color: "white",
                        //   width: "50%",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        size="small"
                        style={{ color: "white" }}
                        onClick={() => console.log("+")}
                      >
                        <HiPlus />
                      </IconButton>
                      <Typography>5</Typography>
                      <IconButton
                        size="small"
                        style={{ color: "white" }}
                        onClick={(e) => console.log("-")}
                      >
                        <HiMinus />
                      </IconButton>
                      <IconButton
                        size="small"
                        style={{ color: "white" }}
                        onClick={(e) => console.log("-")}
                      >
                        <MdDelete />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
          <Stack
            gap={2}
            sx={{
              pb: 2,
              position: "fixed",
              bottom: "0",
              width: "100%",
              marginInline: -2,
              paddingInline: 2,
              background: "white",
            }}
          >
            <Paper
              sx={{
                px: 2,
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              elevation={5}
            >
              <Typography variant="h6">Sub Total</Typography>
              <Typography>$100</Typography>
            </Paper>
            <Box sx={{ background: "black", color: "white", borderRadius: 2 }}>
              <Button color="inherit">PROCEED</Button>
            </Box>
          </Stack>
        </Stack>
      </React.Fragment>
    </>
  );
}
