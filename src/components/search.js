import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Slide from "@mui/material/Slide";
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
import Dialog from "@mui/material/Dialog";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import SearchContainer from "../containers/widgets/search";
import FilterContainer from "../containers/widgets/filter";

const FadeAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        zIndex: 9,
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        background: "white",
        left: 0,
        overflow: "auto",
      }}
    >
      {children}
    </motion.div>
  );
};

export default function TopBar() {
  const router = useRouter();

  const openSearch = () => router.push({ query: { ...router.query, search: "" } });
  const openFilter = () =>router.push({ query: { ...router.query, filter: "" } });
  const close = () => {
    router.push({
      query: {
        ...() => {
          const { search, filter, ...rest } = router.query;
          return rest;
        },
      },
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", px: 1 }}>
        <TextField
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1, borderRadius: 1 }}
          onClick={openSearch}
          disabled
          value={router.query.q || "search"}
        />
        <Box
          sx={{
            background: "black",
            color: "white",
            borderRadius: 1,
            ml: 2,
          }}
        >
          <IconButton color="inherit" aria-label="menu" onClick={openFilter}>
            <MdFilterList />
          </IconButton>
        </Box>
      </Box>
      <Dialog
        fullScreen
        open={!(typeof router.query.search == "undefined")}
        TransitionComponent={Transition}
      >
        <SearchContainer />
      </Dialog>
      <Dialog
        fullScreen
        open={!(typeof router.query.filter == "undefined")}
        TransitionComponent={Transition}
      >
        <FilterContainer />
      </Dialog>
    </>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
