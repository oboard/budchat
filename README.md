# BudChat

> A example of buder to build a chat app with daisyUI

![screenshot](screenshot.jpg)

Core code of showing messages
```typescript
ForEach(
    messages,
    (message) => {
      return View([Text(message).class("chat-bubble")]).class("chat chat-end");
    },
    Col()
      .expand.style({ width: percent(100), overflowY: "scroll" })
      .padding(px(8))
  ),
```