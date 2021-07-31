import React, { useState } from "react";
import { TextField, Typography, Grid, Container, Button, FormControl, FormHelperText, Input, InputLabel } from "@material-ui/core";
import {  } from "@material-ui/core/styles";

const SubmitForm = () => {
    const handleClick = () => {
        alert("Submit Form Clicked!");
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexGrow: 1, alignContent: 'center'}}>
        <FormControl>
            <InputLabel htmlFor="my-input">Project Name</InputLabel>
            <Input id="my-input" aria-describedby="The project name"/>
            <FormHelperText id="The project name">The GitHub project name</FormHelperText>
        </FormControl>
        <FormControl>
            <InputLabel htmlFor="my-input">GitHub Url</InputLabel>
            <Input id="my-input" aria-describedby="The GitHub Url"/>
            <FormHelperText id="The project name">The GitHub project url</FormHelperText>
        </FormControl>
        </div>
        <Button onClick={handleClick}/>
    </div>
    )
};

export default SubmitForm;