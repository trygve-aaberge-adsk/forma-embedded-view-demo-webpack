import { Forma } from "forma-embedded-view-sdk/auto";

const cameraPosition = await Forma.camera.getCurrent();
console.log(cameraPosition);
