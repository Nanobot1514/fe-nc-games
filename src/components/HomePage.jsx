const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to NC Games!</h2>
      <p>
        For all your board game review needs! Browse for your favourite board
        games and see what people are saying about them, or look for something
        that may become a new staple of your Saturday nights!
      </p>
      <h3>Genres on offer</h3>
      <ul className="categories-list">
        <section className="categories">
          <li>Dexterity</li>
          <p>
            Games about testing your reactions, and your abilty to physically
            manipulate game pieces to win!
          </p>
          <li>Strategy</li>
          <p>
            Go head-to-head with your opponents to outsmart them in a game of
            wits.
          </p>
          <li> Hidden Roles</li>
          <p>Who is the imposter?</p>
          <li>Push Your Luck</li>
          <p>
            Should you or should you not take another turn? That is the
            question.
          </p>
          <li>Roll and Write</li>
          <p>Roll the dice and leave it up to fate!</p>
          <li>Deck Building</li>
          <p>
            Build up your deck to take on other players, these games usually
            involve a lot of strategy and deep knowlodge of the games rules to
            win.
          </p>
          <li>Engine Building</li>
          <p>
            Build up your resourses, money or points to overwhelm your opponents
            and emerge victorious
          </p>
        </section>
      </ul>
    </div>
  );
};
export default HomePage;
