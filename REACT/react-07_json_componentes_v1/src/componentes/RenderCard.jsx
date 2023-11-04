import React from 'react'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "react-bootstrap";

const KeysToComponentMap = {
    card: Card,
    img: CardImg,
    text: CardText,
    body: CardBody,
    title: CardTitle,
    subtitle: CardSubtitle,
    button: Button
};

export const RenderCard = (config) => {

    const render = (config) => {
        if (typeof KeysToComponentMap[config.component] !== "undefined") {
            return React.createElement(
                KeysToComponentMap[config.component],
                {
                    src: config.src
                },
                config.children &&
                (typeof config.children === "string"
                    ? config.children
                    : config.children.map(c => render(c)))
            );
        }
    }

    return (
        <div>
            Render Card
            {render(config)}
        </div>
    )
}
