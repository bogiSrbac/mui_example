import React, { useState } from 'react'
import {
    Button,
    TextField,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    RadioGroup,
    Radio,
    FormLabel
} from '@mui/material';

const Test = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        subscribe: false,
        age: 0,
        gender: "",
    });

    const onChangeHandler = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmitHendler = (e) => {
        e.preventDefault();
        console.log(inputs)
    }
    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHendler}>
                <TextField name='name' value={inputs.name} onChange={onChangeHandler} type={'text'} sx={{ margin: 3 }} placeholder='name' variant="outlined" />
                <TextField name='email' value={inputs.email} type={'email'} onChange={onChangeHandler} sx={{ margin: 3 }} placeholder='email' variant="standard" />
                <TextField name='password' value={inputs.password} type={'password'} onChange={onChangeHandler} sx={{ margin: 3 }} placeholder='password' variant="filled" />
                <FormGroup>
                    <FormControlLabel control={<Checkbox onChange={() => {
                        setInputs((prev) => ({
                            ...prev,
                            subscribe: !inputs.subscribe
                        }))
                    }} />} label="Subscribe for newslatter" />
                </FormGroup>
                <FormControl fullWidth>
                    <InputLabel >Age</InputLabel>
                    <Select
                        name='age'
                        value={inputs.age}
                        label="Age"
                        onChange={onChangeHandler}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                        defaultValue="female"
                        name="gender"
                        onChange={onChangeHandler}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default Test