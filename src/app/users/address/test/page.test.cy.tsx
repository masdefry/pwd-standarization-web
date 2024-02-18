import AddressPage from '../page';
import './../../../../app/globals.css';
import ReactQueryProvider from '~/providers/ReactQueryProvider';
import { mockAddressesData } from './mocking';

describe('<AddressPage />', () => {
    const interceptGetAddressesData = () => {
        const numberOfAddresses = 10;
        const addressesData = mockAddressesData({ numberOfAddresses });

        cy.intercept(
          { method: 'GET', url: '/user/address*' },
          {
            body: {
              data: addressesData,
            },
          },
        ).as('getAddresses');
      };
    
      it('should be mounted', () => {
        interceptGetAddressesData();
    
        cy.mount(
            <ReactQueryProvider>
                <AddressPage />
            </ReactQueryProvider>
        );
        cy.wait('@getAddresses');
    });

})