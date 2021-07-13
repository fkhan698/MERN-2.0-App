import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "40%",
    flexWrap: "wrap"
  },
  form: {
    margin: "6rem"
  },
  label: {
    fontSize: "1.5rem"
  },
  inputText: {
    fontSize: "1rem"
  },
  fileInput: {
    width: "97%",
    margin: "10px 0"
  },
  submitButton: {
    margin: "2rem"
  }
});
