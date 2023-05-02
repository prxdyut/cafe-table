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
import Divider from "@mui/material/Divider";
import AspectRatio from "@mui/joy/AspectRatio";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import {
  MdFilterList,
  MdAdd,
  MdCopyAll,
  MdDelete,
  MdOutlinePhotoLibrary,
  MdOutlineAccountCircle,
  MdQrCodeScanner,
  MdManageAccounts,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { TbGridDots } from "react-icons/tb";
import { GiForkKnifeSpoon } from "react-icons/gi";
import SearchBar from "../components/search";
import { HiMinus, HiPlus, HiBadgeCheck } from "react-icons/hi";
import { createContext, useContext } from "react";

export default function HomeContainer() {
  const [value, setValue] = React.useState(null);
  const inputElement = React.useRef();

  const ThemeContext = createContext();
  const theme = useContext(ThemeContext);

  React.useEffect(() => {
    alert(theme);
    isNaN(Number(value && value.split("")[0]))
      ? !isNaN(Number(value && value.split("")[1]))
        ? !isNaN(Number(value && value.split("")[2]))
          ? console.log("all ok")
          : setValue(
              `${value && value.split("")[0]}${value && value.split("")[1]}`
            )
        : setValue(`${value && value.split("")[0]}`)
      : setValue(``);
  }, [value]);
  return (
    <>
      <React.Fragment>
        <Stack gap={5} sx={{ mb: 2 }}>
          <Typography variant="body1" fontWeight={500}>
            Table Code
          </Typography>
          <InputBase
            autoFocus
            placeholder="A00"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{ fontSize: "5rem", mt: -3, textAlign: "center" }}
            readOnly={value && value.split("").length >= 3}
            onClick={() =>
              value && value.split("").length >= 3 && setValue(null)
            }
          />
          <Box
            sx={{
              color: "white",
              background: "black",
              borderRadius: 2,
              mt: -5,
            }}
          >
            <Button
              fullWidth
              sx={{
                fontSize: "2.5rem",
                color: "white",
                background: "black",
                borderRadius: 2,
              }}
            >
              <MdQrCodeScanner />
            </Button>
          </Box>

          <Typography variant="body1" fontWeight={500}>
            Discount Code
          </Typography>
          <TextField
            id="standard-basic"
            capitalize
            placeholder="0000000"
            variant="standard"
            fullWidth
            sx={{ mt: -5, textTransform: "uppercase" }}
          />

          <Typography variant="caption" sx={{ mt: -5 }}>
            the code was applied successfully
          </Typography>
          <Stack gap={1} sx={{ px: 2 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight={500}>Product Name</Typography>
              <Typography sx={{ ml: 2 }}>$10 * 2</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          gap={2}
          sx={{
            pb: 2,
            position: "sticky",
            bottom: "0",
            width: "100%",
            // marginInline: -2,
            // paddingInline: 2,
            background: "white",
          }}
        >
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
          <Box sx={{ background: "black", color: "white", borderRadius: 2 }}>
            <Button color="inherit" fullWidth>
              PROCEED
            </Button>
          </Box>
        </Stack>
      </React.Fragment>
    </>
  );
}
