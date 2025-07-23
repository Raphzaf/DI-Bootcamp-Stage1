import React from "react";

class FavoriteColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
    };
  }

  // Partie I : contrôle du rendu
  shouldComponentUpdate() {
    return true; // changer à false bloquerait toute mise à jour
  }

  // Partie III : avant la mise à jour du DOM
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  // Partie II : après mise à jour du DOM
  componentDidUpdate() {
    console.log("after update");
  }

  // Partie II : déclenche un changement d’état 1s après montage
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  render() {
    return (
      <h1>
        My Favorite Color is{" "}
        <span style={{ fontStyle: "italic" }}>{this.state.favoriteColor}</span>
      </h1>
    );
  }
}

export default FavoriteColor;
