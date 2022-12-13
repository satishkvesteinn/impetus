import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useSelector, useDispatch } from 'react-redux'
import { close } from '../../features/popup/OpenSlice';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Popup(props) {
  const popup = useSelector((state) => state.popup)
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(popup.open)
  }, [popup])


  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{popup.data.name}</DialogTitle>
        <DialogContent style={{
          width: "400px"
        }}>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='d-flex'><h6>Batch No. : </h6><p> {popup.data.batch}</p></div>
            <div className='d-flex'><h6>Location : </h6> <p> {popup.data.location}</p></div>
            <div className='d-flex'><h6>Experience : </h6> <p>{popup.data.experience}</p></div>
            <div className='d-flex'><h6>Contact us : </h6> <p>{popup.data.contact}</p></div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch(close({
            open: false,
            data: {}
          }))}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}