import React, { useState } from 'react'
import NameBox from '../NameBox/NameBox'
import './DropDown.scss'

function DropDown(props) {

    const [open, setOpen] = useState(props.open);
    const [selected, setSelected] = useState(props.initial || -1);

    function renderOptions() {
        if (!props.options) {
            return;
        }

        return props.options.map((option, i) =>
            <div key={i} onClick={() => (props.doClick && props.onDoClick(option.name))}>
                <NameBox
                    author={option}
                    click={() => (props.doClick && setSelected(i))}         
                    active={i === selected}
                />
            </div>
        );
    }

    return (
        <div className="dropdown">
            <div
                onClick={() => setOpen(!open)}
                className="dropdown__toggle dropdown__list-item"
            >
                <div>{props.title}</div>
                <div>{open ? '⮝' : '⮟'}</div>
            </div>
            <ul className={"dropdown__list " + (open ? 'dropdown__list--active' : '')}>{open && renderOptions()}</ul>
        </div>
    )
}

export default DropDown;