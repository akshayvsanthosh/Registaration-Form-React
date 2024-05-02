import React, { useEffect, useState } from 'react'
import '../Style/form.css'
import Stack from '@mui/material/Stack';
import { Button,Grid, TextField } from '@mui/material';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from '@mui/joy';

function Form() {
    const [invalidName, SetInvalidName] = useState(false)
    const [invalidAddress, SetInvalidAddress] = useState(false)
    const [invalidMobile, setInvalidMobile] = useState(false)
    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidDob, setInvalidDob] = useState(false)
    const [invalidGender,setInvalidGender] = useState(false)
    const [invalidCourse,setInvalidCourse] = useState(false)

    const [disableSubmit, setDisableSubmit] = useState(true)

    const [formDetails,setFormDetails] = useState({
        name:"",address:"",mobile:"",email:"",dob:"",gender:"",coursedetails:""
      })

    const [course, setCourse] = useState("");

    console.log(formDetails);

    //   disable submit button
    useEffect(()=>{
        if (formDetails.name=="" || formDetails.address=="" || formDetails.mobile=="" || formDetails.email=="" || formDetails.dob=="" || formDetails.gender=="" || formDetails.coursedetails=="" || invalidName || invalidAddress || invalidMobile || invalidEmail || invalidDob){
            setDisableSubmit(true)
            console.log(disableSubmit);
        }else{
            setDisableSubmit(false)
            console.log(disableSubmit);
        }
    })

    // to get data from session on edit
    useEffect(()=>{
        if ("name" in sessionStorage) {
            console.log(`session ${sessionStorage}`);
            if (formDetails.name=="") {
                setFormDetails({...formDetails,name:sessionStorage.getItem("name")})
            }else if(formDetails.address=="") {
                setFormDetails({...formDetails,address:sessionStorage.getItem("address")})
            }else if (formDetails.mobile=="") {
                setFormDetails({...formDetails,mobile:sessionStorage.getItem("mobile")})
            }else if(formDetails.email=="") {
                setFormDetails({...formDetails,email:sessionStorage.getItem("email")})
            }else if (formDetails.dob=="") {
                setFormDetails({...formDetails,dob:sessionStorage.getItem("dob")})
            }else if(formDetails.gender=="") {
                setFormDetails({...formDetails,gender:sessionStorage.getItem("gender")})
            }else if( formDetails.coursedetails=="") {
                setFormDetails({...formDetails,coursedetails:sessionStorage.getItem("coursedetails")})
                setCourse(sessionStorage.getItem("coursedetails"));
            }

        }
    })

    

    const handleInput = (tag) => {
        const { name, value } = tag
        console.log(name, value);

        if (name == 'fullName') {
            console.log(!!value.match(/^[A-Za-z\s.]+$/));
            if (!!value.match(/^[A-Za-z\s.]+$/)) {
                SetInvalidName(false)
                setFormDetails({...formDetails,name:value})
            } else {
                SetInvalidName(true)
                setFormDetails({...formDetails,name:value})
            }
        } else if (name == 'address') {
            console.log(!!value.match(/^[A-Za-z\s.\d()]+$/));
            if (!!value.match(/^[A-Za-z\s.\d,]+$/)) {
                SetInvalidAddress(false)
                setFormDetails({...formDetails,address:value})
            } else {
                SetInvalidAddress(true)
                setFormDetails({...formDetails,address:value})
            }
        } else if (name == 'mobile') {
            console.log(!!value.match(/^\d{10}$/));
            if (!!value.match(/^\d{10}$/)) {
                setInvalidMobile(false)
                setFormDetails({...formDetails,mobile:value})
            } else {
                setInvalidMobile(true)
                setFormDetails({...formDetails,mobile:value})
            }
        } else if (name == 'email') {
            console.log(!!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));
            if (!!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                setInvalidEmail(false)
                setFormDetails({...formDetails,email:value})
            } else {
                setInvalidEmail(true)
                setFormDetails({...formDetails,email:value})
            }
        }else if (name == 'dob') {
            console.log(!!value.match(/^(19[0-9]{2}|200[0-9]|201[0-9]|202[0-4])[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/));
            if (!!value.match(/^([12]{2}[0-9]{2}|200[0-9]|201[0-9]|202[0-4])[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/)) {
                setInvalidDob(false)
                setFormDetails({...formDetails,dob:value})
                console.log(formDetails);
            } else {
                setInvalidDob(true)
                setFormDetails({...formDetails,dob:value})
            }
        }else if (name == 'radio-buttons-group') {
            setFormDetails({...formDetails,gender:value})
            console.log(value);
            setInvalidGender(false)
            console.log(formDetails);
        }else if (name == 'Course') {
            setFormDetails({...formDetails,coursedetails:value})
            setCourse(value);
            console.log(course);
            setInvalidCourse(false)
        }
    }

    const handleReset = () =>{
        sessionStorage.clear()
        setFormDetails({name:"",address:"",mobile:"",email:"",dob:"",gender:"",coursedetails:""})
        setCourse("")
        SetInvalidName(false)
        SetInvalidAddress(false)
        setInvalidMobile(false)
        setInvalidEmail(false)
        setInvalidDob(false)
        setInvalidGender(false)
        setInvalidCourse(false)
    }

    const handleSubmit = () => {
        
        sessionStorage.setItem("name",formDetails.name)
        sessionStorage.setItem("address",formDetails.address)
        sessionStorage.setItem("mobile",formDetails.mobile)
        sessionStorage.setItem("email",formDetails.email)
        sessionStorage.setItem("dob",formDetails.dob)
        sessionStorage.setItem("gender",formDetails.gender)
        sessionStorage.setItem("coursedetails",formDetails.coursedetails)
        window.location = "/details"
    }

    // const Sfullname= sessionStorage.getItem("name")
    // const Saddress = sessionStorage.getItem("address")
    // const mobile = sessionStorage.getItem("mobile")
    // const email = sessionStorage.getItem("email")
    // const dob = sessionStorage.getItem("dob")
    // const gender = sessionStorage.getItem("gender")
    // const coursedetails = sessionStorage.getItem("coursedetails")
 



    return (
        <div className='backgroundDiv'>
            <div className='innerDiv'>
                <Stack spacing={6} height={"100%"}>
                    <div><h1 className='heading'>ADMISSION REGISTER FORM</h1></div>
                    <div style={{ height: "100%" }}>
                        <Grid className='mainGrid' height={"100%"} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                            <Grid item xs={12} sm={6} height={"100%"} className='d-flex flex-column align-items-center justify-content-center ps-0 '>

                                <TextField name='fullName' onChange={(e) => { handleInput(e.target) }} sx={{ width: "70%", borderColor:"red"}} id="outlined-basic" label="Full Name" variant="outlined" {...(invalidName && { error: true, helperText: "Invalid name" })} value={formDetails.name }/>

                                <TextField name='address' id="outlined-multiline-flexible" label="Address" multiline maxRows={4} onChange={(e) => { handleInput(e.target) }} sx={{marginTop: "30px", width: "70%" }} {...(invalidAddress && { error: true, helperText: "Invalid address" })} value={formDetails.address }/>

                                <TextField name='mobile' onChange={(e) => { handleInput(e.target) }} sx={{  marginTop: "34px", width: "70%" }} id="outlined-basic" label="Mobile" variant="outlined" {...(invalidMobile && { error: true, helperText: "Invalid number" })} value={formDetails.mobile}/>

                                <TextField name='email' onChange={(e) => { handleInput(e.target) }} sx={{ marginTop: "34px", width: "70%" }} id="outlined-basic" label="Email" variant="outlined" {...(invalidEmail && { error: true, helperText: "Invalid email" })} value={formDetails.email}/>

                            </Grid>
                            <Grid item xs={12} sm={6} height={"100%"} marginTop={{xs:"25px", sm:"0px"}} className='d-flex flex-column align-items-center justify-content-center ps-0 '>

                                <TextField type='date' name='dob' onChange={(e) => { handleInput(e.target) }} sx={{ width: "70%" }} id="outlined-basic" label="Date of Birth" variant="outlined" {...(invalidDob && { error: true, helperText: "Invalid date" })} InputLabelProps={{ shrink: true, required: true }} value={formDetails.dob}/>

                                <FormControl >
                                    <FormLabel sx={{ marginTop: "25px", fontSize: "19px", fontWeight: 500, marginBottom: "10px" }}>Gender</FormLabel>
                                    <RadioGroup defaultValue="outlined" name="radio-buttons-group" className='d-flex flex-row align-items-center justify-content-stary' value={formDetails.gender}>
                                        <Radio value="male" label="Male" variant="solid" onChange={(e) => { handleInput(e.target) }} />
                                        <Radio sx={{ marginTop: "0px", marginLeft: "16%" }} value="female" label="Female" variant="solid" onChange={(e) => { handleInput(e.target) }} />
                                    </RadioGroup>
                                </FormControl>

                                <FormControl sx={{marginTop: "39px", width: "70%" }}>
                                    <InputLabel id="demo-simple-select-helper-label">Course</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={course}
                                        label="Course"
                                        name='Course'
                                        onChange={(e) => { handleInput(e.target) }}
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

                                    <div className='d-flex flex-row w-100 ' style={{ marginLeft: "30%", marginTop: "34px",}}>
                                        <Button onClick={handleSubmit} disabled={disableSubmit} type="submit" className="btn bg-primary " sx={{color:"black", width: "30%", height:"50px" }}>Submit</Button>
                                        <Button onClick={handleReset} className="btn bg-primary " sx={{color:"black",marginLeft: "10%", width: "30%", height:"50px" }}>Reset</Button>
                                    </div>

                            </Grid>
                        </Grid>
                    </div>
                </Stack>

            </div>
        </div>
    )
}

export default Form




// const handleName = (tag) => {
//     const {name,value} = tag
//     console.log(name,value);
//     console.log(!!value.match(/^[A-Za-z\s.]+$/));
//     if (!!value.match(/^[A-Za-z\s.]+$/)) {
//         SetInvalidName(false)
//     } else {
//         SetInvalidName(true)
//     }
// }

// (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-](19[0-9]{2}|200[0-9]|201[0-9]|202[0-4])$/)