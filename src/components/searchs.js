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
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import InputBase from "@mui/material/InputBase";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import Collapse from "@mui/material/Collapse";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
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
  MdSearch,
  MdHistory,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function TopBar() {
  const router = useRouter();
  const [open, setOpen] = React.useState({ search: false, filter: false });
  const [value, setValue] = React.useState("");
  const [selectValue, setselectValue] = React.useState([]);
  const selectValueString = selectValue.join(",");

  React.useEffect(() => {
    !(typeof router.query.search == "undefined") &&
      !open.search &&
      setOpen({ filter: false, search: true });
    typeof router.query.search == "undefined" &&
      open.search &&
      setOpen({ filter: false, search: false });
    !(typeof router.query.filter == "undefined") &&
      !open.filter &&
      setOpen({ filter: true, search: false });
    typeof router.query.filter == "undefined" &&
      open.filter &&
      setOpen({ filter: false, search: false });
  }, [router.query]);

  React.useEffect(
    (current) => {
      router.push({ query: { ...router.query, category: selectValueString } });
      // console.log(selectValue.join(','))
    },
    [selectValue]
  );

  const openSearch = () => {
    setOpen({ filter: false, search: true });
    router.push({ query: { ...router.query, search: "" } });
  };
  const openFilter = () => {
    setOpen({ filter: true, search: false });
    router.push({ query: { ...router.query, filter: "" } });
  };
  const close = () => {
    setOpen({ filter: false, search: false });
    router.push({
      query: {
        ...function () {
          const { search, filter, ...rest } = router.query;
          return rest;
        },
      },
    });
  };

  function MultipleSelectChip() {
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };

    const names = [
      "Oliver Hansen",
      "Van Henry",
      "April Tucker",
      "Ralph Hubbard",
      "Omar Alexander",
      "Carlos Abbott",
      "Miriam Wagner",+
      "Bradley Wilkerson",
      "Virginia Andrews",
      "Kelly Snyder",
    ];

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setselectValue(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };

    return (
      <FormControl sx={{ mt: -1 }}>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectValue}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          fullWidth
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, selectValue, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }

  return (
    <>
      <Box sx={{ display: "flex", px: 1 }}>
        <TextField
          id="outlined-basic"
          placeholder="Outlined"
          variant="outlined"
          size="small"
          sx={{ flexGrow: 1, borderRadius: 1 }}
          onFocus={openSearch}
          onChange={openSearch}
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
            edge="right"
            color="inherit"
            aria-label="menu"
            onClick={openFilter}
          >
            <MdFilterList />
          </IconButton>
        </Box>
      </Box>
      <AnimatePresence>
        {open.search && (
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
            }}
          >
            <AppBar
              position="static"
              elevation={2}
              sx={{ background: "none", color: "unset", mb: 1 }}
            >
              <Toolbar>
                <IconButton color="inherit" aria-label="menu" onClick={close}>
                  <MdOutlineArrowBackIosNew />
                </IconButton>
                <Box sx={{ flexGrow: "1", mx: 1 }}>
                  <InputBase
                    sx={{ width: "100%" }}
                    placeholder="search"
                    autoFocus
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </Box>
                <IconButton
                  //   size="small"
                  color="inherit"
                  aria-label="menu"
                  disabled={value.trim() == ""}
                  onClick={(event) =>
                    router.push({
                      pathname: "/search/",
                      query: { q: value.trim() },
                    })
                  }
                  //   sx={{ boxShadow: 2, borderRadius: 1 }}
                >
                  <MdSearch />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Collapse in timeout={2000}>
              <List
                aria-label="secondary mailbox folder"
                // onFocus={() => console.log(inputElement.current.classList)}
              >
                {["a", "b", "c", "d", "e"].map((v, l) => (
                  <ListItemButton
                  //   selected={selectedIndex === 2}
                  // onClick={(event) =>
                  //   router.push({
                  //     pathname: "/search/" + v,
                  //     query: { filters: null },
                  //   })
                  // }
                  >
                    <ListItemIcon sx={{ ml: 1, mr: -2 }}>
                      <MdHistory />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </motion.div>
        )}
        {open.filter && (
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
            }}
          >
            <AppBar
              position="static"
              elevation={2}
              sx={{ background: "none", color: "unset", mb: 1 }}
            >
              <Toolbar>
                <IconButton color="inherit" aria-label="menu" onClick={close}>
                  <MdOutlineArrowBackIosNew />
                </IconButton>
                <Box sx={{ flexGrow: "1", mx: 1 }}>
                  <Typography variant="h6">Filters</Typography>
                </Box>
              </Toolbar>
            </AppBar>
            <Container>
              <Stack gap={2}>
                <Typography variant="body1" fontWeight={500}>
                  Category
                </Typography>
                <MultipleSelectChip />
              </Stack>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
