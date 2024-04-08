import {
  Button,
  Column,
  Row,
  Text,
  Input,
  px,
  percent,
  State,
  View,
  ForEach,
  vw,
  vh,
  Theme,
  BuderState,
} from "buder";
import "daisyui/dist/full.css";
import "./style.css";

let inputText = State("");
let messages = State([] as BuderState<string>[]);

function send() {
  messages.value = [...messages.value, State(inputText.value)];
  inputText.value = "";
}

const daisyUITheme = {
  button: "btn",
  input: "input",
};

function ChatBubble(message: BuderState<string>) {
  return View(Text(message).class("chat-bubble")).class(["chat", "chat-end"]);
}

Theme(
  daisyUITheme,
  Column(
    ForEach(
      messages,
      (message) => ChatBubble(message),
      Column()
        .expand.style({ width: percent(100), overflowY: "scroll" })
        .padding(px(8))
    ),
    Row(
      Input(inputText)
        .class("input-bordered")
        .expand.event({
          keydown: (e) => {
            if (e.key === "Enter") {
              send();
            }
          },
        }),
      Button("Send").event({
        click: () => {
          send();
        },
      })
    ).style({ width: percent(100), gap: px(4) })
  )
    .style({ gap: px(8) })
    .style({
      width: vw(100),
      height: vh(100),
    })
).mount("#app");
