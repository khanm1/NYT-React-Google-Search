// Import React
import React from "react";

// Import styling for article search form.
import "./searhBooks.css";

// Import UI components from reactstrap framework.
import { Card, Button, CardHeader, CardBody, Form, FormGroup, Label, Input, } from 'reactstrap';

// Search form component.
const searchBooks = (props) => {
  return (
    <div>
      <Card className="search-form" id="search-form">
        <CardHeader>
            <h2 className="card-header">Search Books</h2>
        </CardHeader>
        <CardBody>
            <Form>
                <FormGroup>
                    <Label for="topic" className="form-label">Topic (for example, sports)</Label>
                    <Input
                        value={props.query}
                        onChange={props.handleTopicChange}
                        type="text" 
                        name="topic" 
                        id="articleTopic" 
                        placeholder="" />
                </FormGroup>

                <FormGroup>
                    <Label for="startYear" className="form-label">Start year (YYYY)</Label>
                    <Input 
                        value={props.begin}
                        onChange={props.handleStartYearChange}
                        type="text" 
                        name="startYear" 
                        id="startYear" 
                        placeholder="YYYY" />
                </FormGroup>

                <FormGroup>
                    <Label for="endYear" className="form-label">End year (YYYY)</Label>
                    <Input 
                        value={props.end}
                        onChange={props.handleEndYearChange}
                        type="text" 
                        name="endYear" 
                        id="endYear" 
                        placeholder="YYYY" />
                </FormGroup>

                <Button
                    type="submit"
                    onClick={props.handleFormSubmit}
                    className="btn search-btn"
                    size="lg"
                >
                    Search
                </Button>
            </Form>

        </CardBody>
      </Card>
    </div>
  );
};

// export search form.
export default searchBooks;