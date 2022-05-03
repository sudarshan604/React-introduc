// import WithFavouriteNumber from "./components/withFavouriteNumber";
import Main from "./components/withTogggler";
import Main1 from "./components/Main";

function App(props) {
  return (
    <div>
      <h1>{props.favouriteNumber}</h1>
      <Main1 />
      <Main />
    </div>
  );
}

export default App;
