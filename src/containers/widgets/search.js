import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
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
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import InputBase from "@mui/material/InputBase";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import {
  MdFilterList,
  MdAdd,
  MdCopyAll,
  MdOutlinePhotoLibrary,
  MdOutlineAccountCircle,
  MdManageAccounts,
  MdPeopleAlt,
  MdOutlineArrowBackIosNew,
  MdSearch,
  MdHistory,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function SearchWidgetContainer() {
  const router = useRouter();
  const searchQuery = router.query.q;
  const [value, setValue] = React.useState("");
  const [history, setHistory] = React.useState([]);

  React.useEffect(
    () =>
      !!localStorage.getItem("searchHistory")
        ? setHistory(localStorage.getItem("searchHistory").split(","))
        : localStorage.setItem("searchHistory", ""),
    [router, value]
  );

  React.useEffect(
    () => (!!searchQuery ? setValue(searchQuery) : setValue("")),
    [searchQuery]
  );

  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{ background: "none", color: "unset", mb: 1 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => router.back()}
          >
            <MdOutlineArrowBackIosNew />
          </IconButton>
          <Box sx={{ flexGrow: "1", mx: 1 }}>
            <InputBase
              sx={{ width: "100%" }}
              placeholder="Search"
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onSubmit={() => {
                localStorage.setItem("searchHistory", [...history, value]);
                router.push({
                  pathname: "/search/",
                  query: { q: value.trim() },
                });
              }}
              type="search"
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="menu"
            disabled={value.trim() == ""}
            onClick={() => {
              localStorage.setItem("searchHistory", [...history, value]);
              router.push({
                pathname: "/search/",
                // pathname: "/",
                query: { q: value.trim() },
              });
            }}
          >
            <MdSearch />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        {[value, ...[...history].reverse()].slice(0, 15 + 1).map((v, i) => (
          <React.Fragment key={i}>
            {v.trim() != "" && (
              <ListItemButton
                onClick={() =>
                  router.push({ pathname: "/search/", query: { q: v } })
                }
              >
                <ListItemIcon sx={{ ml: 1, mr: -2 }}>
                  <MdHistory />
                </ListItemIcon>
                <ListItemText primary={v} />
              </ListItemButton>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
