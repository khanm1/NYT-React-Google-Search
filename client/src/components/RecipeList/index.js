import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({

  book,

  title,
  subtitle,
  link,
  authors,
  description,
  image,
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p> description: { description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Click Here to View Detail!
            </a>

            {
              (onClick.length>0 )?( <button onClick =   {()=>onClick({book})}   >SaveBook</button>):""
            }
           
          </Col>
        </Row>
      </Container>
    </li>
  );
}
