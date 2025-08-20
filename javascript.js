const prompt_container = document.querySelector("#prompt-container");
const textbox = document.querySelector("#textbox");
const welcome_message = document.querySelector("#welcome-moodmate p");
const rc32 = document.querySelector("#rc32");
const new_textarea_for_prompt = document.createElement("textarea");
const all_conversations_block = document.querySelector("#welcome-moodmate");
const heading = document.querySelector("h1");

all_conversations_block.classList.add('hide-scrollbar');

const r1 = document.querySelector("#r1");
const r2 = document.querySelector("#r2");
const r3 = document.querySelector("#r3");
const r4 = document.querySelector("#r4");
const r5 = document.querySelector("#r5");

textbox.addEventListener("keydown", (event) => {
     if (event.key === 'Enter' && !event.shiftKey && (textbox.value.trim().length != 0)) {
          event.preventDefault();


          r1.style.flexGrow = "0";
          r2.style.flexGrow = "0";
          r3.style.flexGrow = "13.5";
          r4.style.flexGrow = "3";
          r5.style.flexGrow = "0.5";


          let prompt_message = textbox.value;
          textbox.value = '';

          welcome_message.remove();
          heading.remove();

          all_conversations_block.style.cssText = `
             max-height: 600px;
             overflow-y: auto;
        `;
          createConversationBlock(prompt_message);

          const all_dummy_ai_responses = document.querySelectorAll(".ai-response-block");

          const last_ai_response = all_dummy_ai_responses[all_dummy_ai_responses.length - 1];

          // Smoothly scroll the div to the target position
          last_ai_response.scrollIntoView({
               behavior: "smooth",
               block: "start"
          });






          // const conversation_block = document.querySelector("#welcome-moodmate");
          // conversation_block.setAttribute("id", "conversation-block");
          // conversation_block.style.display = "flex";
          // conversation_block.style.flexDirection = "column";
          // const empty_row1 = document.createElement("div");
          // const empty_row2 = document.createElement("div");
          // const empty_row3 = document.createElement("div");
          // const prompt_block = document.createElement("div");
          // const ai_response_block = document.createElement("div");
          // conversation_block.appendChild(empty_row1);
          // conversation_block.appendChild(prompt_block);
          // conversation_block.appendChild(empty_row2);
          // conversation_block.appendChild(ai_response_block);
          // conversation_block.appendChild(empty_row3);
          // prompt_block.style.justifyContent = "flex-end";
          // prompt_block.style.paddingLeft = "25%";
          // const prompt_message_box = document.createElement("div");
          // prompt_message_box.innerHTML = prompt_message;
          // prompt_message_box.style.cssText = `
          //     overflow-wrap: break-word;
          //     white-space: normal;
          //     word-break: break-word;
          //     padding: 10px;
          //     border-radius: 30px;
          //     font-size: 16px;
          //     background-color: rgb(62,122,225);
          //     `;
          // prompt_block.appendChild(prompt_message_box);
          // new_textarea_for_prompt.value = prompt;
          // new_textarea_for_prompt.style.borderRadius = "30px";
          // rc32.appendChild(new_textarea_for_prompt);
     }
});

function createConversationBlock(prompt) {

     const conversation_block = document.createElement("div");
     conversation_block.setAttribute("class", "conversation-block");
     conversation_block.style.cssText = `
         display: flex;
         flex-direction: column;
         min-height: 300px;
         flex: 1, 0, auto;
         `;

     const empty_row1 = document.createElement("div");
     empty_row1.setAttribute("class", "empty-row1");

     const empty_row2 = document.createElement("div");
     empty_row2.setAttribute("class", "empty-row2");

     const empty_row3 = document.createElement("div");
     empty_row3.setAttribute("class", "empty-row3");

     const prompt_block = document.createElement("div");
     prompt_block.setAttribute("class", "prompt-block");

     const ai_response_block = document.createElement("div");
     ai_response_block.setAttribute("class", "ai-response-block");

     conversation_block.appendChild(empty_row1);
     conversation_block.appendChild(prompt_block);
     conversation_block.appendChild(empty_row2);
     conversation_block.appendChild(ai_response_block);
     conversation_block.appendChild(empty_row3);


     all_conversations_block.appendChild(conversation_block);

     prompt_block.style.cssText = `
         display: flex;
         justify-content: flex-end;
         align-items: flex-start;
         `;

     const prompt_message_box = document.createElement("div");
     prompt_message_box.textContent = prompt;
     prompt_message_box.style.cssText = `
          display: inline-block;
          overflow-wrap: break-word;
          white-space: pre-wrap;
          word-break: break-word;
          padding: 10px 15px;
          border-radius: 30px;
          font-size: 18px;
          background-color: rgb(62,122,225);
          max-width: 80%;
          display: inline-block;
          width: fit-content;
          flex: 0 0 auto;
          color: beige;
          letter-spacing: 2px;
            `;
     prompt_block.appendChild(prompt_message_box);



     prompt_block.appendChild(prompt_message_box);

     const dummy_ai_response = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus error odit molestias pariatur totam numquam in ipsum expedita eligendi perferendis. Perferendis illum maiores minus, voluptate deleniti pariatur ea odio hic, iste mollitia harum, ipsam facilis sequi cum tempora amet dolore minima! Ipsam doloribus culpa voluptatem quasi dolor exercitationem, nisi hic.";
     const ai_response_message_box = document.createElement("div");
     ai_response_message_box.textContent = dummy_ai_response;
     ai_response_block.appendChild(ai_response_message_box);
     ai_response_message_box.style.cssText = `
         padding: 10px;
         background-color: rgba(43, 175, 90, 1);
         font-size: 16px;
         border-radius: 30px;
         font-family: "Comic Sans MS", "Comic Sans", cursive;
         letter-spacing: 2px;
         color: beige;
    `;



     // const cb_elements = ["empty_row1","prompt_block","empty_row2","ai_response_block","empty_row3"];
     // cb_elements.forEach(element => {
     //     const div = document.createElement("div");
     //     div.setAttribute("class",element);
     //     conversation_block.appendChild(div);
     // 
     // });

}









