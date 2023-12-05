
import { ContainerDivPhonebook,TitlePhonebook, TitleContacts } from './FormContacts/FormContacts.styled';
import { FormContacts } from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';


export const  App = () => {

  return (
    <ContainerDivPhonebook>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <FormContacts >
      </FormContacts>
      <TitleContacts>Contacts</TitleContacts> 
      <Filter />
      <ListContacts>
      </ListContacts>
    </ContainerDivPhonebook>
  );
}
