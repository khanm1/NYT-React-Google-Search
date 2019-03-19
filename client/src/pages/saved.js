import React, { Component } from "react";
 
import Nav from "../components/Nav";
 
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };
  componentDidMount() {
        this.loadBooks();

  }
 
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ recipes: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

   handleSaveBook = () => {}
 

  render() {
    return (
      <div>
 
        <Container>
           
          <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) : (
                <RecipeList>
                  {this.state.recipes.map(book => {
                    return (
                      <RecipeListItem key={book.id}
                      book = {book}
                      
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.infoLink}
                      authors={book.authors?book.authors :""}
                      description={book.description}
                      image={book.imageLinks ?book.imageLinks:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
                      onClick={""}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
