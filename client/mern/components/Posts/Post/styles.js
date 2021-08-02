import { makeStyles } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";
export const useStyles = makeStyles({
  container: {
    width: "50%"
  },
  grid: {
    display: "grid",
    gap: "2rem",
    backgroundColor: "black"
  },
  form: {
    margin: "6rem"
  },

  label: {
    fontSize: "1.5rem"
  }
});
