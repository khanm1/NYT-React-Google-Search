import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import { Container, Row, Col } from "../components/Grid";

class App extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ recipes: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

  handleSaveBook = book=> {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state

   console.log(this.state.recipes[0].id);
    
   console.log(book.book.id );
     

   let title=book.book.volumeInfo.title;
   let authors=book.book.volumeInfo.authors;
   let description=book.book.volumeInfo.description;
   let infoLink=book.book.volumeInfo.infoLink;
   let imageLinks=book.book.volumeInfo.imageLinks;
   
    API.saveBook({title,
                 authors,
                 description,
                 infoLink,
                 imageLinks
    }).then(res => this.loadBooks);
  
    
  };

  render() {
    return (
      <div>
       
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
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
                      
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors?book.volumeInfo.authors.join(", "):""}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png"}
                      onClick={this.handleSaveBook}
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
