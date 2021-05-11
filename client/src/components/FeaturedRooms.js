import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from '../components/Loading';
import Room from '../components/Room';
import Title from './Title';
import { Form, Col, Row } from 'react-bootstrap';

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, FeaturedRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    console.log(rooms);
    return (
      <section className='featured-rooms'>
        <Title title='featured rooms' />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : rooms}
        </div>

        <br />

        {/* <div class='accordion' id='accordionExample'>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingOne'>
              <button
                class='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='false'
                aria-controls='collapseOne'
              >
                Booking
              </button>
            </h2>
            <div
              id='collapseOne'
              class='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div class='accordion-body'>
                <Form>
                  <Row className='py-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Group>
                      <Form.Control
                        className='form-label'
                        type='name'
                        placeholder='Enter name'
                      ></Form.Control>
                    </Form.Group>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}
