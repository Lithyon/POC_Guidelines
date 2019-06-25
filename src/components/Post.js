import React from 'react'
import {Card, Button} from 'react-bootstrap';
import parse from 'html-react-parser';

export default function Post(props) {
    return (
        <Card>
            <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {parse(props.desc)}
                    {props.created_on}
                </Card.Text>
                <Button variant="primary">Go !</Button>
            </Card.Body>
        </Card>
    )
}
