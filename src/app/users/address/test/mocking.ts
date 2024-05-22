
type TAddresses = {
    receiver: string; 
    phoneNumber: string;
    address: string;
}

export const mockAddressesData = ({
    numberOfAddresses = 10,
  }: {
    numberOfAddresses: number;
  }): TAddresses[] => {
    const addressess: any[] = new Array( numberOfAddresses = 10)
      .fill(null)
      .map((_, index) => {
        const addressItemId = index + 1;
  
        return {
          id: addressItemId,
          receiver: `Receiver ${addressItemId}`,
          phoneNumber: '6287822004012',
          address: 'Kab. Bogor'
        };
      });
  
    return addressess;
  };