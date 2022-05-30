import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import styles from "./Question.module.scss";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "./Backdrop";
interface Props {
  id: number;
  question: string;
  xp: number;
  name: string;
  avatar: string;
  answers: number;
  minutes: number;
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const Question: React.FC<Props> = ({
  id,
  question,
  xp,
  name,
  avatar,
  answers,
  minutes,
}): JSX.Element => {
  const theme = useTheme();
  const [color, setColor] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    {
      theme.palette.mode === "dark" ? setColor("#fff") : setColor("#000");
    }
  }, [color]);
  return (
    <Grid
      container
      style={{ height: "95px", maxWidth: "925px", color: color }}
      className={styles.questionItem}
      onClick={open ? handleClose : handleOpen}
    >
      <Grid item xs={6} className={styles.left}>
        <img
          className={styles.icon}
          src="./icon-question.png"
          alt="icon"
          width="40"
          height="40"
        />
        <div className={styles.questionWrap}>
          <div className={styles.question}>{question}</div>
          <div
            className={answers > 0 ? `${styles.success}` : `${styles.gradient}`}
          >
            {minutes} minutes ago
          </div>
        </div>
      </Grid>
      <Grid item xs={6} className={styles.right}>
        <div className={styles.bounty}>
          <span>Bounty</span>
          <span
            className={answers > 0 ? `${styles.success}` : `${styles.gradient}`}
          >
            {`+${xp}XP`}
          </span>
        </div>
        <div className={styles.answers}>
          <span>Answers</span>
          <div
            className={answers > 0 ? `${styles.success}` : `${styles.gradient}`}
          >
            {answers}
          </div>
        </div>
        <img className={styles.avatar} src={avatar} width="50" height="50" />
      </Grid>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};
