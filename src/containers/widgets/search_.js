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
  MdStar,
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
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import Rating from "@mui/material/Rating";

export default function FilterWidgetContainer() {
  const router = useRouter();

  return (
    <Box>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "none",
          color: "unset",
          mb: 1,
          position: "sticky",
          top: "0",
          background: "white",
          zIndex: "9",
        }}
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
            <Typography variant="h6">Filters</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ pt: 2 }}>
        <Stack gap={3}>
          <Category />
          <FoodTypeSelector />
          <ServingsCount />
          <HoverRating />
          <Price />
        </Stack>
      </Container>
    </Box>
  );
}

function FoodTypeSelector() {
  const [foodType, setfoodType] = React.useState(() => []);
  const handleFormat = (event, newfoodType) => {
    setfoodType(newfoodType);
  };
  React.useEffect(() => {
    localStorage.setItem("filterFoodType", foodType);
  }, [foodType]);

  return (
    <>
      <Typography variant="body1" fontWeight={500}>
        Servings
      </Typography>
      <Box sx={{ mt: -1 }}>
        <ToggleButtonGroup
          value={foodType}
          onChange={handleFormat}
          aria-label="text formatting"
          fullWidth
        >
          <ToggleButton value="veg" aria-label="bold">
            Veg
          </ToggleButton>
          <ToggleButton value="non-veg" aria-label="italic">
            Non-Veg
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography
          variant="caption"
          component="div"
          sx={{ mt: 1, textTransform: "capitalize" }}
        >
          {foodType.length == 0 || foodType.length == 2
            ? "both"
            : "only " + foodType[0]}
        </Typography>
      </Box>
    </>
  );
}

function ServingsCount() {
  const [servings, setServings] = React.useState(null);

  React.useEffect(() => {
    localStorage.setItem("filterServings", servings);
  }, [servings]);
  return (
    <>
      <Typography variant="body1" fontWeight={500}>
        Servings
      </Typography>
      <Box sx={{ m: -1, mt: -2 }}>
        {Array(6)
          .fill()
          .map((v, i) => (
            <Box
              key={i}
              sx={{
                background: i + 1 == servings && "black",
                color: i + 1 == servings && "white",
                m: 1,
                borderRadius: 1,
                display: "inline-block",
                transition: "background .2s, color .2s",
              }}
            >
              <Chip
                key={i + 1}
                // sx={{}}
                onClick={() => setServings(i + 1)}
                label={
                  <Typography sx={{ display: "flex", alignItems: "center" }}>
                    <MdPeopleAlt />
                    &nbsp;
                    {i + 1} Serving{i != 0 && "s"}
                  </Typography>
                }
                variant="outlined"
                sx={{
                  background: "transparent",
                  color: "inherit",
                  borderRadius: 1,
                }}
              />
            </Box>
          ))}
      </Box>
    </>
  );
}

function Category() {
  const [state, setState] = React.useState([]);

  const handleChange = (e) =>
    state.filter((v) => v == e.target.value).length == 0
      ? setState([...state, e.target.value])
      : setState(state.filter((v) => v != e.target.value));

  const checkState = (val) => state.filter((v) => v == val).length != 0;

  React.useEffect(() => {
    localStorage.setItem("filterCategory", state);
  }, [state]);
  return (
    <>
      <Typography variant="body1" fontWeight={500}>
        Category Selector
      </Typography>
      <Box sx={{ display: "flex", mt: -1 }}>
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <Grid container>
              {["a", "some thing big", "c", "d", "e"].map((v, i) => (
                <Grid item xs={6} key={i}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checkState(v)}
                        onChange={handleChange}
                        value={v}
                        name="gilad"
                      />
                    }
                    label={v}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
}

function Price() {
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 1000 });

  React.useEffect(() => {
    localStorage.setItem("filterPriceRange", JSON.stringify(priceRange));
  }, [priceRange]);
  return (
    <Box sx={{ pb: 2, position: "sticky", bottom: "0", background: "white" }}>
      <Typography variant="body1" fontWeight={500} sx={{ mb: 2 }}>
        Price Range
      </Typography>
      <Box sx={{ mt: -1 }}>
        <Grid container>
          <Grid
            item
            xs="auto"
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Min:</Typography>
          </Grid>
          <Grid item xs={3}>
            <Input
              sx={{ ml: 1, flex: 1 }}
              placeholder="Minimum"
              value={priceRange.min}
              onChange={(event) => {
                setPriceRange({
                  ...priceRange,
                  min: Number(event.target.value),
                });
              }}
              startAdornment={<Typography>₹&nbsp;</Typography>}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>-</Typography>
          </Grid>
          <Grid
            item
            xs="auto"
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>Max:</Typography>
          </Grid>
          <Grid item xs={3}>
            <Input
              sx={{ ml: 1, flex: 1 }}
              placeholder="Maximum"
              value={priceRange.max}
              startAdornment={<Typography>₹&nbsp;</Typography>}
              onChange={(event) => {
                setPriceRange({
                  ...priceRange,
                  max: Number(event.target.value),
                });
              }}
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  React.useEffect(() => {
    localStorage.setItem("filterRatings", value);
  }, [value]);

  return (
    <>
      <Typography variant="body1" fontWeight={500}>
        Ratings
      </Typography>
      <Box
        sx={{
          mt: -1,
          //   width: 200,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          // getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<MdStar style={{ opacity: 0.5 }} />}
        />
        {value !== null && <Box sx={{ ml: 2 }}>{value}</Box>}
      </Box>
    </>
  );
}
