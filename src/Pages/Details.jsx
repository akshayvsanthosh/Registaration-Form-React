import React, { useEffect } from 'react'
import '../Style/details.css'
import '../Style/form.css'
import Stack from '@mui/material/Stack';
import { Button, Grid, TextField } from '@mui/material';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from '@mui/joy';
import '../Components/Form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Details() {

    const name = sessionStorage.getItem("name")
    const address = sessionStorage.getItem("address")
    const mobile = sessionStorage.getItem("mobile")
    const email = sessionStorage.getItem("email")
    const dob = sessionStorage.getItem("dob")
    const gender = sessionStorage.getItem("gender")
    const coursedetails = sessionStorage.getItem("coursedetails")

    const handleEdit = () => {
        window.location = "/"
    }

    useEffect(() =>{
        toast.warning('Check the Details Entered !!! Tap Edit to Change the Details', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            color: "black"
            });
    }
)

    const handleUpload = () =>{
        sessionStorage.clear()
        toast.success('Wow !!! you made first step to join our team', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            color: "black"
        });

        setTimeout(() => {
            window.location = "/"
        }, 6000);
        
    }


    return (
        <div>
            <div className='backgroundDivDetails '>
                <div className='innerDivDetails'>
                    <Stack spacing={6} height={"100%"}>
                        <div><h1 className='headingDetails text-center '>VIEW DETAILS</h1></div>
                        <div style={{ height: "100%", paddingTop: "10px" }}>
                            <Grid className='mainGrid' height={"100%"} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                <Grid item xs={12} sm={6} height={"100%"} className='d-flex flex-column align-items-center justify-content-center ps-0 '>

                                    <TextField disabled name='fullName' sx={{ width: "70%", borderColor: "red" }} id="outlined-basic" label="Full Name" variant="outlined" value={name} />

                                    <TextField disabled name='address' id="outlined-multiline-flexible" label="Address" multiline maxRows={4} sx={{ marginTop: "30px", width: "70%" }} value={address} />

                                    <TextField disabled name='mobile' sx={{ marginTop: "34px", width: "70%" }} id="outlined-basic" label="Mobile" variant="outlined" value={mobile} />

                                    <TextField disabled name='email' sx={{ marginTop: "34px", width: "70%" }} id="outlined-basic" label="Email" variant="outlined" value={email} />

                                </Grid>
                                <Grid item xs={12} sm={6} height={"100%"} marginTop={{ xs: "25px", sm: "0px" }} className='d-flex flex-column align-items-center justify-content-center ps-0 '>

                                    <TextField disabled type='date' name='dob' sx={{ width: "70%" }} id="outlined-basic" label="Date of Birth" variant="outlined" InputLabelProps={{ shrink: true }} value={dob} />

                                    <FormControl >
                                        <FormLabel sx={{ marginTop: "25px", fontSize: "19px", fontWeight: 500, marginBottom: "10px" }}>Gender</FormLabel>
                                        <RadioGroup defaultValue="outlined" name="radio-buttons-group" className='d-flex flex-row align-items-center justify-content-stary' value={gender}>
                                            <Radio disabled value="male" label="Male" variant="solid" />
                                            <Radio disabled sx={{ marginTop: "0px", marginLeft: "16%" }} value="female" label="Female" variant="solid" />
                                        </RadioGroup>
                                    </FormControl>

                                    <FormControl sx={{ marginTop: "39px", width: "70%" }}>
                                        <InputLabel id="demo-simple-select-helper-label">Course</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            label="Course"
                                            name='Course'
                                            disabled
                                            value={coursedetails}
                                        >
                                            <MenuItem disabled value="">
                                                Courses
                                            </MenuItem>
                                            <MenuItem value={20}>Biology</MenuItem>
                                            <MenuItem value={21}>Humanities</MenuItem>
                                            <MenuItem value={22}>Commerce</MenuItem>
                                            <MenuItem value={23}>Computer Science</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <div className='d-flex flex-row' style={{ marginTop: "34px", width: "70%" }}>
                                        <Button onClick={handleEdit} type="submit" className="btn bg-primary " sx={{ color: "black", width: "45%", height: "50px", }}>Edit</Button>
                                        <Button onClick={handleUpload} className="btn bg-primary " sx={{ color: "black", marginLeft: "10%", width: "45%", height: "50px" }}>Upload</Button>
                                    </div>

                                </Grid>
                            </Grid>
                        </div>
                    </Stack>

                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )
}

export default Details
