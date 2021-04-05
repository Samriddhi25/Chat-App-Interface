export const getConversationData = async () => {
    const response = await fetch("conversation.json",{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
    );
    const data = await response.json();
    return data;
}
