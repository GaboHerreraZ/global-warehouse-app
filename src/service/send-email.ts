import { Contact } from "@/interface/contact";

export const sendEmail = async (contact:Contact) => {
  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(contact)
    });
  
    if(response.status === 200) {
      return true;
    }

    return false;
  }catch {
    return false;
  }
}