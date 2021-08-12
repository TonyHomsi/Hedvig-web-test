import React from 'react'

import './peril.styles.css'

export const Peril = (props) => (
    <div class="css-deajr0">
        <button class="css-m4oz1q">
            <img src={props.peril.icon.variants.dark.svgUrl} alt="" width="24" height="24" class="css-673u28" />
                <h4 class="css-3d9q9a etzsc9u3">{props.peril.title}</h4>
        </button>
    </div>
   
)