import styled from "@emotion/styled";
import ButtonMui from "@mui/material/Button";

const StyledButton = styled(ButtonMui)(({ theme }, title, customWidth) => ({
  fontSize: 9,
  width: 100,
  [theme.breakpoints.up("sm")]: {
    width: 152,
    fontSize: 14,
  },
  //   width: title ? customWidth : 152,
  height: 44,
  borderRadius: 10,
  boxShadow: `0 10px 20px -10px ${theme.palette.primary.darkAquamarine50}`,
  color: theme.palette.common.white,
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {},
}));

export const Button = ({ title, customWidth, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      {...{ title, customWidth }}
      variant="contained"
    >
      {title ? title : "Add To Cart"}
    </StyledButton>
  );
};
