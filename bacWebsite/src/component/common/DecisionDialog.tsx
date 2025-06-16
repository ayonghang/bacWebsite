import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

const DecisionDialog: React.FC<Props> = ({
  title,
  message,
  confirmBtnText,
  isOpen,
  onConfirm,
  handleClose,
  isDisabled,
}) => {
  return (
    <div>
      <Dialog open={isOpen} fullWidth maxWidth="sm" onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" color="textSecondary">
            {message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={onConfirm}
            disabled={isDisabled}>
            {confirmBtnText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DecisionDialog;
