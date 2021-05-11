import React from 'react';
import Cleave from 'cleave.js/react';

export default function BookingForm() {
  return (
    <div>
      <form
        name='BookingV1'
        method='POST'
        onSubmit='submit'
        data-netlify='true'
      >
        {/* <input type='hidden' name='form-name' value='BookingV1' /> */}
        <div class='input-group'>
          <span class='input-group-text'>First and Last Name</span>
          <input
            type='text'
            name='fname'
            aria-label='First Name'
            placeholder='First Name'
            class='form-control'
          />
          <input
            type='text'
            name='lname'
            aria-label='Last Name'
            placeholder='Last Name'
            class='form-control'
          />
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
          />
        </div>
        <br />
        <div class='input-group mb-3'>
          <span class='input-group-text'>$</span>
          <span
            title='Base price per night, extra cost will be calculated at checkout. Credit card will be held for reservation.'
            class='input-group-text'
          >
            price
          </span>
          <Cleave
            class='form-control'
            type='text'
            name='creditCard'
            aria-label='creditCard'
            placeholder='Credit Card #'
            options={{ creditCard: true }}
          />
        </div>

        <br />
        <button type='submit' className='btn btn-dark'>
          Submit
        </button>
      </form>
    </div>
  );
}
