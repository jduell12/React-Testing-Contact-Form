import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('Enters data into the form and submits', ()=>{
    render(<ContactForm />)

    //type into all input fields 
    /*
        1. query for all inputs
        2. run change event to add text to each field
    */
   const firstNameInput = screen.getByPlaceholderText(/edd/i);
   const lastNameInput = screen.getByPlaceholderText(/burke/i);
   const emailInput = screen.getByText(/email/i);
   const messageInput = screen.getByText(/message/i);

    //click submit button 
    /*
        1. query for the button
        2. run the click event on the button
    */

    //assert that the information is printed to the page
    /*
        1. query for new text
        2. assert that it's being rendered 
    */
})