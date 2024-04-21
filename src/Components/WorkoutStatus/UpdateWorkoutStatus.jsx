import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, IconButton, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import DatePicker from '@mui/lab/DatePicker';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  Padding:4,
  outline: 'none',
  borderRadius:4,
};

const UpdateWorkoutStatus = () => {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = (values) => {
    console.log("handle submit", values);
  };

  const formik = useFormik({
    initialValues:{
      date:"",
      distanceRun:"",
      pushUps:"",
      weightLifted: "",
      Note:"",
    },
    onSubmit: handleSubmit,
  });

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button onClick={handleOpen} className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
          Update Status
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose} aria-label="delete">
                  <CloseIcon/>
                </IconButton>
                <p className=''>Update Status</p>
              </div>
            </div>
            <div className='hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]'>
              <div className="space-y-3">
                <TextField fullWidth type= "date" id="date" name="date" label="Date" value={formik.values.date} onChange={formik.handleChange} error={formik.touched.date && Boolean(formik.errors.date)} helperText={formik.touched.date && formik.errors.date} required/>
                <TextField fullWidth id="distanceRun" name="distanceRun" label="Distance Run" value={formik.values.distanceRun} onChange={formik.handleChange} error={formik.touched.distanceRun && Boolean(formik.errors.distanceRun)} helperText={formik.touched.distanceRun && formik.errors.distanceRun} required/>
                <TextField fullWidth id="pushUps" name="pushUps" label="Push Ups" value={formik.values.pushUps} onChange={formik.handleChange} error={formik.touched.pushUps && Boolean(formik.errors.pushUps)} helperText={formik.touched.pushUps && formik.errors.pushUps} required/>
                <TextField fullWidth id="weightLifted" name="weightLifted" label="Weight Lifted" value={formik.values.weightLifted} onChange={formik.handleChange} error={formik.touched.weightLifted && Boolean(formik.errors.weightLifted)} helperText={formik.touched.weightLifted && formik.errors.weightLifted} required/>
                <TextField fullWidth multiline rows={4} id="note" name="note" label="Note" value={formik.values.note} onChange={formik.handleChange} error={formik.touched.bio && Boolean(formik.errors.note)} helperText={formik.touched.note && formik.errors.note}/>


                <div className="flex items-center justify-center h-full">
                    <button className="px-4 py-2 bg-gray-200 text-lg font-medium rounded-full">
                        Share Workout Status
                </button>
                </div>
              </div>
            </div>
            
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateWorkoutStatus;
