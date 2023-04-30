import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
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

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function HomeContainer() {
  return (
    <>
      <React.Fragment>
        <Box sx={{ mx: -2 }}>
          {["", "", ""].map((item, i) => (
            <Accordion elevation={0} key={i}>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography>6 January 2023</Typography>
                    <Typography variant="caption">ord_98735</Typography>
                  </Box>

                  <Typography variant="h6">$400</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Stack
                  direction={"column"}
                  gap={2}
                  sx={{ overflow: "scroll", mx: -2, px: 2, py: 0.2 }}
                >
                  {["", ""].map((v, i) => (
                    <Box sx={i} key={i}>
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
                            <Typography variant="h5">x2</Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </Box>
                  ))}
                  <Paper
                    sx={{
                      px: 2,
                      py: 1,
                    }}
                    elevation={5}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">Sub Total</Typography>
                      <Typography>$100</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">Discount</Typography>
                      <Typography>-$10</Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">Service</Typography>
                      <Typography>-$5</Typography>
                    </Box>
                    <Divider sx={{ my: 1 }} />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="h6">Total</Typography>
                      <Typography variant="h6" fontWeight="400">
                        $85
                      </Typography>
                    </Box>
                  </Paper>
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </React.Fragment>
    </>
  );
}
