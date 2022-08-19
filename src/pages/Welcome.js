import { Route } from "react-router-dom";

const Welcome = () => {
    console.log('welcome')
  return (
    <section>
      <h1>My Welcome Page!</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
