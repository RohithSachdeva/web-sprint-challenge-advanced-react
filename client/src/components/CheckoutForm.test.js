import React from "react";
import { render, getByText, getByLabelText, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


// Write up the two tests here and make sure they are testing what the title shows
//Form header = checkout form ... getbytext 'form' ? 
//  onchange event

test("form header renders", () => {
const { getByText } = render(<CheckoutForm />);
const header = getByText(/form/i);
expect(header).toBeInTheDocument(); 
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText } = render(<CheckoutForm />);
    const firstNameInput = getByLabelText(/first name:/i)
    const lastNameInput = getByLabelText(/last name:/i)
    const addressInput = getByLabelText(/address:/i)
    const cityInput = getByLabelText(/city:/i)
    const stateInput = getByLabelText(/state:/i)
    const zipInput = getByLabelText(/zip:/i)
    
    fireEvent.change(firstNameInput, { target: { value: 'rohith'} });
    fireEvent.change(lastNameInput, { target: { value: 'sachdeva'} });
    fireEvent.change(addressInput, { target: { value: '1222 yoyo blvd'} });
    fireEvent.change(cityInput, { target: { value: 'taco'} });
    fireEvent.change(stateInput, { target: { value: 'california'} });
    fireEvent.change(zipInput, { target: { value: '96700'} });

    const button = getByText('Checkout');
    fireEvent.click(button);
    
    const friends = getByText(/friends/i);
    expect(friends).toBeInTheDocument
    
    


});
