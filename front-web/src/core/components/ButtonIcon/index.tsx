import React from 'react'
import { ReactComponent as ArrowICon } from 'core/assets/images/arrow.svg'

import './styles.scss'

type Props = {
    text?: string
}

const ButtonIcon = ( {text}:Props) => (
    <div className="d-flex">
        <button className="btn btn-primary btn-icon">
            <h5>{text}</h5>
        </button>
        <div className="btn-icon-content">
            <ArrowICon />
        </div>
    </div>
);

export default ButtonIcon;