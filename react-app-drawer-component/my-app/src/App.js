import AppDrawer from "./AppDrawer";

var itemList =[
  { id: '01', title: 'About'},
  { id: '02', title: 'Get Started'},
  { id: '03', title: 'Sign In'}
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <AppDrawer heading="Menu" items={itemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
