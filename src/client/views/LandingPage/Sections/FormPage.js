import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';

// @material-ui/icons
import CallMade from "@material-ui/icons/CallMade";
import CallReceived from "@material-ui/icons/CallReceived";
import Tune from "@material-ui/icons/Tune";
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

// core components
import Button from "../../../components/CustomButtons/Button.js";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";

import productStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {className: '', 
                  namedCredential: '', 
                  requestType: 'POST',
                  requestJSON: '',
                  responseJSON: ''};

    this.handleChange = this.handleChange.bind(this);
    this.validateRequestJSON = this.validateRequestJSON.bind(this);
    this.validateResponseJSON = this.validateResponseJSON.bind(this);
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  validateRequestJSON(event) {
    try {
      JSON.parse(this.state.requestJSON);
      this.setState({requestJSON: 
        JSON.stringify(this.state.requestJSON, undefined, 2)});
    }
    catch (err) {
        return false;
    }
  }

  validateResponseJSON(event) {
    try {
      JSON.parse(this.state.responseJSON);
      this.setState({responseJSON: 
        JSON.stringify(this.state.responseJSON, undefined, 2)});
    }
    catch (err) {
      //Highlight Error in JSON file
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <InfoArea
                title="Properties"
                description=""
                icon={Tune}
                iconColor="danger"
                vertical
              />
              <GridContainer>
                <GridItem xs={12} sm={6} md={4}>
                  <TextField
                    id="txtClassName"
                    label="Class Name"
                    name="className"
                    helperText="Enter Class Name prefix"
                    variant="outlined"
                    fullWidth
                    value={this.state.className}
                    onChange={this.handleChange}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <TextField
                    id="txtNamedCredential"
                    label="Named Credential"
                    name="namedCredential"
                    helperText="Enter Named Credential API Name"
                    variant="outlined"
                    fullWidth
                    value={this.state.namedCredential}
                    onChange={this.handleChange}
                />
                </GridItem>
                <GridItem xs={12} sm={6} md={4}>
                  <InputLabel htmlFor="ddlRequestType">Request Type</InputLabel>
                  <NativeSelect
                    id="ddlRequestType"
                    fullWidth
                    variant="outlined"
                    value={this.state.requestType}
                    onChange={this.handleChange}
                  >
                    <option selected value="POST">POST</option>
                    <option value="GET">GET</option>
                  </NativeSelect>
                </GridItem>
                <GridItem xs={12}>
                  <Button variant="contained" color="primary">
                    Generate Apex Files
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Request JSON"
                description=""
                icon={CallMade}
                iconColor="success"
                vertical
              />
              <TextField
                id="txtRequestJSON"
                name="requestJSON"
                style={{ margin: 8 }}
                placeholder="Paste your JSON string here"
                fullWidth
                margin="normal"
                multiline
                rows={50}
                variant="outlined"
                value={this.state.requestJSON}
                onChange={this.handleChange}
              />
                <Button variant="contained" color="primary" onClick={this.validateRequestJSON}>
                    Validate JSON
                  </Button>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <InfoArea
                title="Response JSON"
                description=""
                icon={CallReceived}
                iconColor="success"
                vertical
              />
              <TextField
                id="txtResponseJSON"
                name="responseJSON"
                style={{ margin: 8 }}
                placeholder="Paste your JSON string here"
                fullWidth
                margin="normal"
                multiline
                rows={50}
                variant="outlined"
                value={this.state.responseJSON}
                onChange={this.handleChange}
              />
              <Button variant="contained" color="primary" onClick={this.validateResponseJSON}>
                    Validate JSON
                  </Button>
            </GridItem>
          </GridContainer>
        </div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>Usage</h3>
            <h5 className={classes.description}>
              Add Instructions on usage here
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(FormPage);
