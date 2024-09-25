
import React from 'react';
import TodoList from './TodoList/TodoList';
import Bai2 from './Bai2/Bai2';
import Bai3 from './Bai3/Bai3';
import './App.css'; 

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="todolist-container">
                    <TodoList />
                </div>
                <div className="image-search-container">
                    <h2>Tìm Kiếm Hình Ảnh</h2>
                    <Bai2 />
                </div>
                <div className="image-search-container">
                    <h2>Random Color</h2>
                    <Bai3 />
                </div>
            </div>
        </div>
    );
}

export default App;
