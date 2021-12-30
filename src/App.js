import './App.css';

import NewNoteComponent from './components/new-note/new-note.component';
import NotesComponent from './components/notes/notes.component';

function App() {
  return (
   <main>
    <NewNoteComponent></NewNoteComponent>
 
    <NotesComponent></NotesComponent>
   </main>
  );
}

export default App;
