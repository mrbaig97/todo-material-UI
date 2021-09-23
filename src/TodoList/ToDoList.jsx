import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
import ListComp from './ListComp';
import './Todo.css';

const ToDoList = () => {
    const [item, setItem] = useState(" ");
    const [newitem, setNewitem] = useState([]);

    const itemEvent = (event) => {

        setItem(event.target.value);
    }

    const listOfItems = () => {
        setNewitem((prevValue) => {
            return [...prevValue, item]
        });
        setItem(" ");
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDoList </h1>
                    <br />
                    <input type='text' value={item} placeholder="Add an item" onChange={itemEvent} />
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {/* <li> {item} </li> */}
                        {newitem.map((val, index) => {
                            return <ListComp key={index} text={val} />;
                        })}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    )
};

export default ToDoList;