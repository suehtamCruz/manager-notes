
import './App.css';

import NotesComponent from './components/notes.component';

function App() {
  return (
   <main>
      <form>
      <input type="text" />

      <textarea placeholder="Escreva sua nota aqu"></textarea>
    </form>
 
    <NotesComponent></NotesComponent>
   </main>
  );
}

export default App;
