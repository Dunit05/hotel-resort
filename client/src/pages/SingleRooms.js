import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { RoomContext } from '../context';
import axios from 'axios';
import { Form, Row, Col, Alert } from 'react-bootstrap';
import Cleave from 'cleave.js/react';
import BookingForm from '../components/BookingForm';
import {
  FaCcVisa,
  FaCcAmazonPay,
  FaCcAmex,
  FaCcMastercard,
} from 'react-icons/fa';

export default class SingleRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  state = {
    fname: '',
    lname: '',
    email: '',
    checkIn: '',
    checkOut: '',
    creditCard: '',
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
      creditCard: this.state.creditCard,
    };

    // const url = 'http://localhost:5000/api/save';

    axios({
      url: `/api/save`,
      method: 'POST',
      data: payload,
    });

    this.resetUserInputs();
    alert(
      `Booking saved, a confirmation email will be sent to ${this.state.email}. Once you press 'OK' this form will be cleared. See you on ${this.state.checkIn}.`
    );
  };

  resetUserInputs = () => {
    this.setState({
      fname: '',
      lname: '',
      email: '',
      checkIn: '',
      checkOut: '',
      creditCard: '',
    });
  };

  static contextType = RoomContext;
  // componentDidMount() {}
  // handleSubmit = async (e) => {};

  render() {
    console.log(this.state);
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className='error'>
          <h3>No room was found...</h3>
          <Link to='/rooms' className='btn-primary'>
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
      night,
    } = room;
    const [mainImg, ...defaultImg] = images;

    return (
      <>
        <Hero>
          <Banner title={`${name}`}>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </Hero>
        <section className='single-room'>
          <div className='single-room-images'>
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>
                price : ${price} Per: {night}
              </h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :{' '}
                {capacity > 1 ? `${capacity} people` : ` ${capacity} person`}
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>

          <div class='accordion' id='accordionExample'>
            <div class='accordion-item'>
              <h2 class='accordion-header' id='headingOne'>
                <button
                  className='accordion-button'
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
                  {/* <BookingForm /> */}
                  <div class='container'>
                    <form onSubmit={this.submit}>
                      <div class='input-group'>
                        <span class='input-group-text'>Room:</span>
                        <input
                          type='text'
                          name='room'
                          aria-label='Room'
                          placeholder='Room'
                          class='form-control'
                          value={name}
                          disabled
                        />
                      </div>
                      <br />
                      <div class='input-group'>
                        <span class='input-group-text'>
                          First and Last Name
                        </span>
                        <input
                          type='text'
                          name='fname'
                          aria-label='First Name'
                          placeholder='First Name'
                          class='form-control'
                          value={this.state.fname}
                          onChange={this.handleChange}
                          required
                        />
                        <input
                          type='text'
                          name='lname'
                          aria-label='Last Name'
                          placeholder='Last Name'
                          class='form-control'
                          value={this.state.lname}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div id='emailHelp' class='form-text'>
                        NOTE: If you booking more than one room with the same
                        check in and check out date, please put the name of the
                        occupant.
                      </div>
                      <br />
                      <div class='input-group'>
                        <span class='input-group-text'>Email Address</span>
                        <input
                          type='email'
                          name='email'
                          aria-label='Email'
                          placeholder='Email'
                          class='form-control'
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div id='emailHelp' class='form-text'>
                        We'll never share your email with anyone else.
                      </div>
                      <br />
                      <div class='input-group'>
                        <span class='input-group-text'>Check In Date</span>
                        <input
                          type='date'
                          name='checkIn'
                          aria-label='checkIn'
                          placeholder='Check In'
                          class='form-control'
                          value={this.state.checkIn}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <br />
                      <div class='input-group'>
                        <span class='input-group-text'>Check Out Date</span>
                        <input
                          type='date'
                          name='checkOut'
                          aria-label='checkOut'
                          placeholder='Check Out Date'
                          class='form-control'
                          value={this.state.checkOut}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <br />
                      <div class='input-group mb-3'>
                        <span
                          title='A charge of $20 CAD will be charge till your Check In Date, extra cost will be calculated at checkout. Credit card will be held for reservation.'
                          class='input-group-text'
                        >
                          ${price}
                        </span>
                        <input
                          class='form-control creditCard'
                          type='text'
                          name='creditCard'
                          aria-label='creditCard'
                          value={this.state.creditCard}
                          onChange={this.handleChange}
                          placeholder='Credit Card'
                          required
                        />
                      </div>
                      <div id='emailHelp' class='form-text'>
                        A temporary charge of $100 will be placed on your card
                        for reservation purposes.
                      </div>

                      <br />
                      <button type='submit' class='btn btn-dark'>
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className='pay-card-container'>
                    <FaCcVisa className='pay-card' />
                    <FaCcAmex className='pay-card' />
                    <FaCcMastercard className='pay-card' />
                    <FaCcAmazonPay className='pay-card' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
