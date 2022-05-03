function WithFavouriteNumber(component) {
  const Component = component;

  return function (props) {
    return <Component favouriteNumber="3" {...props} />;
  };
}

export default WithFavouriteNumber;
