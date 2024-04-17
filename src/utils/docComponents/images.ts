import { ImageRun, TextWrappingSide, TextWrappingType } from "docx";
import getBase64ImageFromURL from "../getBase64ImageFromURL";

const fundo: string = await getBase64ImageFromURL('./public/fundo.png') as string
export const image: string = await getBase64ImageFromURL('./public/antiplay_logo.jpeg') as string

export const imgFundo = new ImageRun({
  data: fundo,
  transformation: {
    width: 600,
    height: 900
  },
  floating: {
    horizontalPosition: {
      offset: 900000,
    },
    verticalPosition: {
      offset: 1000000,
    },
    behindDocument: true,
    zIndex: -1
  },
})

export const imgLogo = new ImageRun({
  data: image,
  transformation: {
    width: 100,
    height: 100
  },
  floating: {
    horizontalPosition: {
        offset: 700000,
    },
    verticalPosition: {
        offset: 1300000,
    },
    wrap: {
        type: TextWrappingType.SQUARE,
        side: TextWrappingSide.RIGHT,
    },
    margins: {
      right: 200000,
    },
    zIndex: 2
  },
})