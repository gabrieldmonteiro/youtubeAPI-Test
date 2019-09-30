/* eslint-disable no-restricted-globals */
import React from "react";

import { Paper, TextField } from "@material-ui/core";

import "../styles/SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit=()=>{
      const { searchTerm } = this.state;    
      const { onFormSubmit } = this.props;    

      onFormSubmit(searchTerm);
     
      event.preventDefault();

  }
  

  render() {
    return (
      <div>
        <Paper elevation={6} id="PaperSB">
          <form onSubmit={this.handleSubmit}>
            <TextField
              fullWidth
              label="Procurar"
              onChange={this.handleChange}
            />
          </form>
        </Paper>
      </div>
    );
  }
}

export default SearchBar;
