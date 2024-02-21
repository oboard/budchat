import {
  Button,
  Col,
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
} from "buder";
import "daisyui/dist/full.css";
import "./style.css";

let inputText = State("");
let messages = State([] as string[]);

function send() {
  messages.value = [...messages.value, inputText.value];
  inputText.value = "";
}

Col([
  ForEach(
    messages,
    (message) => {
      return View([Text(message).class("chat-bubble")]).class("chat chat-end");
    },
    Col()
      .expand.style({ width: percent(100), overflowY: "scroll" })
      .padding(px(8))
  ),
  Row([
    Input(inputText)
      .class("input input-bordered")
      .expand.event({
        keydown: (e) => {
          if (e.key === "Enter") {
            send();
          }
        },
      }),
    Button("Send")
      .event({
        click: () => {
          send();
        },
      })
      .class("btn"),
  ]).style({ width: percent(100), gap: px(4) }),
])
  .style({ gap: px(8) })
  .center.style({
    width: vw(100),
    height: vh(100),
  })
  .mount("#app");
