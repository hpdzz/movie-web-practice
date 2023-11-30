import React, { Component } from "react";
import { Films } from "../shared/ListOfFilms";
import FilmsPresentation from "./FilmsPresentation/FilmPresentation";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      film: Films,
    };
  }

  render() {
    return <FilmsPresentation Films={this.state.film} />;
  }
}
export default Main;
