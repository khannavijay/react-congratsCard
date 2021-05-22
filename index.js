const element = (
  // Write your code here.

  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        className="user"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt=""
      />
      <h1 className="name">Kiran V</h1>
      <p>Vishnu institute of Computer Education and Technology, Bhimavaram.</p>
      <img
        className="watch"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt=""
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
