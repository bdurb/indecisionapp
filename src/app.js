
var app = {
  title: 'Danjgo',
  subtitle: 'Unchained'
};

var template = (
  <div>
    <h1>{ app.title }</h1>
    <p>{ app.subtitle }</p>
  </div>
);

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Funkytown'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);