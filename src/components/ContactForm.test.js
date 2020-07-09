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
   const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
   const messageInput = screen.getByLabelText(/message/i);

   fireEvent.change(firstNameInput, {target: {value:'jes'}});
   fireEvent.change(lastNameInput, {target: {value: 'Duell'}});
   fireEvent.change(emailInput, {target: {value: 'something@gmail.com'}});
   fireEvent.change(messageInput, {target: {value: 'A message'}});


    //click submit button 
    /*
        1. query for the button
        2. run the click event on the button
    */
   const submitButton = screen.getByTestId(/submit/i);
   fireEvent.click(submitButton);


    //assert that the information is printed to the page
    /*
        1. query for new text
        2. assert that it's being rendered 
    */
   screen.getByText(/jes/i);
   
})