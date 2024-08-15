import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoListItem from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoListItem />
    </TodoTemplate>
  );
}

export default App;
