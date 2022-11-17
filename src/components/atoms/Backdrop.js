const { Backdrop, CircularProgress } = require("@mui/material");

const CustomBackdrop = ({ open = false }) => {
  return (
    <Backdrop open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default CustomBackdrop;
