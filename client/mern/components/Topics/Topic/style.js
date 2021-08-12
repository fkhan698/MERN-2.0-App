import { makeStyles } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";
export const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    borderRadius: "50px",
    padding: "1rem"
  },

  title: {
    fontSize: "2rem"
  },

  label: {
    fontSize: "1.5rem"
  }
});
