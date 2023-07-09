const contacts = require('./contacts');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      try {
        const allContacts = await contacts.listContacts();
        if (allContacts === null) {
          console.error(
            'Error while receiving contacts. Please try again later.'
          );
          break;
        }
        if (allContacts.length === 0) {
          console.log('There are no contacts in the list.');
        } else {
          console.log('List of contacts:');
          console.table(allContacts, ['name', 'phone', 'email', 'id']);
        }
      } catch (error) {
        console.error('Some unknown error while listing contacts');
      }
      break;

    case 'get':
      try {
        const contactById = await contacts.getContactById(id);
        if (contactById) {
          console.log(`Contact by id ${id}`);
          console.log(contactById);
        } else {
          console.log(`No contact was found by id ${id}`);
          console.log(contactById);
        }
      } catch (error) {
        console.error('Some unknown error while getting contact by ID');
      }
      break;

    case 'add':
      try {
        const addedContact = await contacts.addContact(name, email, phone);
        console.log(`Contact added successfully: ${addedContact.name}`);
        console.log(addedContact);
      } catch (error) {
        console.error('Some unknown error while adding contact');
      }
      break;

    case 'remove':
      try {
        const removedContact = await contacts.removeContact(id);
        if (removedContact) {
          console.log(`Contact removed successfully: ${removedContact.name}`);
          console.log(removedContact);
        } else {
          console.log(`Contact with id ${id} is not found.`);
        }
      } catch (error) {
        console.error('Some unknown error while removing contact by ID');
      }
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
