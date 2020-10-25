import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter 
} from 'reactstrap';

const ListsComponent = (props) => {

  const [ userLists, setUserLists ] = useState([]);
  const [ modalOpen, setModalOpen ] = useState(false);

  const [ newListTitle, setNewListTitle ] = useState('');

  const modifyListTitle = (event) => setNewListTitle(event.target.value)

  const submitNewList = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/list/new', {
      method: 'POST',
      headers: {
        Authorization: props.userToken,
        'Content-Type': "application/json"
      },
      body: {
        title: newListTitle
      }
    })
    .then(response => response.json())
    .then(json => {
      setUserLists([
        ...userLists,
        json.list
      ])
    })
  }

  const toggleModal = (event) => setModalOpen(!modalOpen)

  useEffect(() => {
    fetch(`http://localhost:8080/list`, {
      headers : {
        'Authorization': props.userToken
      },
    })
    .then(response => response.json())
    .then(body => {
      setUserLists(body.results);
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div id="listsView">
      <div id="listViewHeader">
        <h1>Your Lists</h1>
        <Button color="success" onClick={toggleModal}>Create New List</Button>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
          <ModalHeader>
            Create New TODO List
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="newTitle">Title:</Label>
                <Input id="newTitle" type="text" onChange={modifyListTitle} value={newListTitle} />
              </FormGroup>
            </Form>
            <Button color="warning" onClick={toggleModal}>
              Cancel
            </Button>
            <Button onClick={submitNewList}>
              Create List
            </Button>
          </ModalBody>
        </Modal>
      </div>
      {
      userLists.length > 0
        ? userLists.map(list => {
          return(
            <Card>
              <CardBody>
                <CardTitle>{list.title}</CardTitle>
                <Button>
                  {/* TODO: update this button */}
                  View list items
                </Button>
              </CardBody>
            </Card>
          )
        })
        : (
          <h1>You have no lists</h1>
        ) 
      }
    </div>
  );
};

export default ListsComponent;