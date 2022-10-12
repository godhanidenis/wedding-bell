import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Box, Modal, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const CustomTextField = styled(TextField)(({ theme }) => ({
  [`& .MuiInput-input`]: {
    fontWeight: 600,
    color: "#000000",
  },
  [`& .MuiInput-root:after`]: {
    borderBottom: 0,
  },
  [`& label`]: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "30px",
    color: "#544E5D",
    opacity: 0.5,
  },
  [`& .MuiInputLabel-root.Mui-focused`]: {
    color: "#544E5D",
  },
}));

export const CustomAuthModal = styled(Modal)(({ theme }) => ({
  [`& .MuiBackdrop-root`]: {
    backgroundColor: "transparent !important",
  },
}));

export const CustomTab = styled(Tabs)(({ theme }) => ({
  [`& .MuiTab-root`]: {
    textTransform: "none",
    color: "#757575",
    fontWeight: 400,
    fontSize: "15px",
  },
  [`& .Mui-selected`]: {
    fontWeight: 700,
    color: "#95539B !important",
  },
  [`& .MuiTabs-indicator`]: {
    backgroundColor: "#95539B !important",
  },
}));
export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: props.padding }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};