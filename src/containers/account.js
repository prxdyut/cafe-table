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
import Card from "@mui/material/Card";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import CardHeader from "@mui/material/CardHeader";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import {
  MdFilterList,
  MdOutlinePeopleAlt,
  MdAdd,
  MdCopyAll,
  MdLogout,
  MdOutlinePhotoLibrary,
  MdOutlineAccountCircle,
  MdManageAccounts,
  MdArrowForwardIos,
  MdStarHalf,
  MdCode,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { HiMinus, HiPlus } from "react-icons/hi";
import { FaPepperHot } from "react-icons/fa";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
export default function HomeContainer() {
  return (
    <>
      <React.Fragment>
        <Stack gap={3}>
          <br />
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardHeader
              sx={{
                p: 1,
                "& .MuiCardHeader-action": { m: 0, display: "contents" },
              }}
              avatar={
                <Avatar
                  aria-label="recipe"
                  sx={{ width: 48, height: 48, borderRadius: 2 }}
                >
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MdLogout />
                </IconButton>
              }
              title={<Typography>Pradyut Das</Typography>}
              subheader="daspradyut516@gmail.com"
            />
          </Card>
          <List>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="delete" size="small">
                  <MdArrowForwardIos />
                </IconButton>
              }
              sx={{ mb: 0.5 }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <MdCode />
                </ListItemIcon>
                <ListItemText primary="Account" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="delete" size="small">
                  <MdArrowForwardIos />
                </IconButton>
              }
              sx={{ mb: 0.5 }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <MdCode />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="delete" size="small">
                  <MdArrowForwardIos />
                </IconButton>
              }
              sx={{ mb: 0.5 }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <MdCode />
                </ListItemIcon>
                <ListItemText primary="Offers" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="delete" size="small">
                  <MdArrowForwardIos />
                </IconButton>
              }
              sx={{ mb: 0.5 }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <MdCode />
                </ListItemIcon>
                <ListItemText primary="Language" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={
                <IconButton edge="end" aria-label="delete" size="small">
                  <MdArrowForwardIos />
                </IconButton>
              }
              sx={{ mb: 0.5 }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <MdCode />
                </ListItemIcon>
                <ListItemText primary="Wishlist" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              secondaryAction={<Switch />}
              sx={{ mb: 0.5 }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  <MdCode />
                </ListItemIcon>
                <ListItemText primary="Notifications" />
              </ListItemButton>
            </ListItem>
          </List>

          <Divider sx={{ m: -2 }} />

          <List sx={{ display: "flex" }}>
            <ListItem
              disablePadding
              sx={{ minWidth: "50%", width: "fit-content" }}
            >
              <ListItemButton>
                <ListItemText primary="Help" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ minWidth: "50%", width: "fit-content" }}
            >
              <ListItemButton>
                <ListItemText primary="Feedback" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ minWidth: "50%", width: "fit-content" }}
            >
              <ListItemButton>
                <ListItemText primary="Report a problem" />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </React.Fragment>
    </>
  );
}
