import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card'
describe('Given a card component', () => {
    const handeler = jest.fn();
    let component=null;
    
    beforeEach(() => {
        const item = {
            title:"Crew", description:"Lista de regalos para el grupo crew", tags:['Desportes de riesgo','Libros','Videojuegos']
        }
        component = render(<Card item={item} setFunction={handeler}/>);
      });
   
    test('Then an Libros should be in the document', () => {
      expect(component.getByText('Libros')).toBeInTheDocument();
    });
    
    describe('then when you click the card',()=>{ 
        test('call a function', () => {
            const card = component.getByTestId('card-Crew')
            fireEvent.click(card);
            expect(handeler).toHaveBeenCalled();  
        });
    })
});