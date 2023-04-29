import { ContactController } from './controller/ContactController';
import { ContactService } from './service/ContactService';
import { MongoContactRepo } from './repo/impl/MongoContactRepo';
import { DiscordService } from '../notification/service/impl/discord/DiscordService';
import { EmailService } from '../notification/service/impl/email/EmailService';

const contactRepo = new MongoContactRepo();
const contactService = new ContactService(contactRepo)
const contactController = new ContactController(contactService)

contactService.addObserver(new DiscordService())
contactService.addObserver(EmailService.getInstance())

export { contactController }