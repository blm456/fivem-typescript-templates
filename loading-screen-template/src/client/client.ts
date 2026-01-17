import { TestMessage } from "@shared/test";

const RESOURCE = GetCurrentResourceName();

RegisterCommand(
  "ui",
  () => {
    SetNuiFocus(true, true);
    SendNUIMessage({ type: "setVisible", visible: "true" });
    SendNUIMessage({ type: "setText", text: "NUI opened" });
  },
  false,
);

RegisterNuiCallbackType("close");
on("__cfx_nui:close", (_data: any, cb: (arg: any) => void) => {
  SetNuiFocus(false, false);
  SendNUIMessage({ type: "setVisible", visible: false });
  cb({ ok: true });
});

console.log(TestMessage);
