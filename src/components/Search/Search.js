import React from 'react';

export default function Search(props) {
    return <div><input value={props.value} onChange={props.onChange} id={props.id}/><i className="fas fa-search"></i></div>
}