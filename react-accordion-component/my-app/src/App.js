import './App.css';
import Accordion from './Accordion';

const topics = [
  {
    title: 'Hypertext Markup Language',
    content: `The HyperText Markup Language or HTML is the standard markup
    language for documents designed to be displayed in a web browser.
    It is often assisted by technologies such as Cascading Style Sheets and
    scripting languages such as JavaScript.`,
    id: 0
  },
  {
    title: 'Cascading Stylesheets',
    content: `Cascading Style Sheets is a style sheet language used for
    describing the presentation of a document written in a markup language
    such as HTML or XML. CSS is a cornerstone technology of the World Wide Web,
    alongside HTML and JavaScript.`,
    id: 1
  },
  {
    title: 'Javascript',
    content: `JavaScript, often abbreviated as JS, is a programming language
    that is one of the core technologies of the World Wide Web, alongside HTML
    and CSS. As of 2022, 98% of websites use JavaScript on the client side for
    webpage behavior, often incorporating third-party libraries.`,
    id: 2
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Accordion topics={topics}/>
        </div>
      </header>
    </div>
  );
}

export default App;
