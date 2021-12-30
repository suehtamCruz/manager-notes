import './App.css';

import NewNoteComponent from './components/new-note.component';
import NotesComponent from './components/notes.component';

function App() {
  return (
   <main>
    <NewNoteComponent></NewNoteComponent>
 
    <NotesComponent></NotesComponent>
   </main>
  );
}

export default App;
